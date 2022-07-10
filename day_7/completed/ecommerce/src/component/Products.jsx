import React, { useEffect, useState } from "react";
import Product from "./Product";
import { getProduct } from "../services/product";
import axios from "axios";
// products
// error,
// loading

const Products = () => {
  const [product, setProduct] = useState({
    products: [],
    error: null,
    loading: true,
    cartCount: localStorage.getItem("count")
      ? localStorage.getItem("count")
      : 0,
  });

  const setCartCount = (cartCount) => {
    setProduct({
      ...product,
      cartCount,
    });
  };

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
      <nav>cartCounter: {product.cartCount}</nav>
      <div className="container">
        <div className="d-flex flex-wrap" id="body">
          {product.products.map((p, i) => {
            return (
              <Product
                bgc={i % 2 !== 0 && "bg-secondary bg-opacity-10"}
                key={p.id}
                product={p}
                cartCount={product.cartCount}
                setCartCount={setCartCount}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
