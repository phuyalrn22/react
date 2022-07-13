import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../../component/ProductCard";
import { getProduct } from "../../services/product";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const { cart } = useContext(CartContext);

  const [product, setProduct] = useState({
    products: [],
    error: null,
    loading: true,
  });

  const helper = async () => {
    try {
      setProduct({
        ...product,
        loading: true,
      });
      var res = await getProduct();
      setProduct({
        ...product,
        products: res.data,
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

  useEffect(() => {
    helper();
  }, []);

  if (product.loading) {
    return <>Loading ....</>;
  } else if (product.error) {
    return <>{product.error}</>;
  }
  return (
    <>
      <nav>cartCounter: {cart}</nav>
      <div className="container">
        <div className="d-flex flex-wrap" id="body">
          {product.products.map((p, i) => {
            return (
              <Product
                bgc={i % 2 !== 0 && "bg-secondary bg-opacity-10"}
                key={p.id}
                product={p}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
