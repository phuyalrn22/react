import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useHref, useParams } from "react-router-dom";
import { getProductDetails } from "../../services/product";

const ProductDetailsPage = () => {
  const params = useParams();

  const [product, setProduct] = useState({
    product: {},
    loading: true,
    error: null,
  });
  const helper = async () => {
    try {
      setProduct({
        ...product,
        loading: true,
      });
      var res = await getProductDetails(params.id);
      setProduct({
        ...product,
        product: res.data,
        loading: false,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setProduct({
          ...product,
          loading: false,
          error: err.response.data,
        });
      } else {
        setProduct({
          ...product,
          loading: false,
          error: "Something went wrong",
        });
      }
    }
  };
  const { name, thumbnailImage, price, oldPrice, description, id, style } =
    product.product;
  useEffect(() => {
    helper();
  }, []);
  if (product.loading) {
    <>Loading...</>;
  } else if (!!product.error) {
    <>{product.error}</>;
  }
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="row px-3">
      <div className="col-6">
        <img alt=" " width="100%" src={thumbnailImage} />
      </div>
      <div className="col-6">
        <h1>{name}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Price</td>
              <td>Rs ${price}</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>${style}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
        <Outlet />
      </div>
      <div className="row mt-3 m-2">
        <div>
          <div className="row">
            <img
              alt=""
              style={{ width: "65px" }}
              className="rounded-circle"
              src="https://www.whatsappimages.in/wp-content/uploads/2022/03/Best-Whatsapp-Dp-Profile-For-Boy-Images-free-hd.gif"
            />
            <div className="col">
              <div>Aryan Phuyal</div>
              <div className="text-muted">Seller</div>
            </div>
          </div>
          <div>{description}</div>
        </div>
        <div className="col">
          <Link to={`/products/${id}/description`}>
            <button className="btn btn-primary mx-4">Description</button>
          </Link>
          <Link to={`/products/${id}/review`}>
            <button className="btn btn-primary">Review</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
