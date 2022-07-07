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
  });

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  if (product.loading) {
    return <>Loading ....</>;
  } else if (product.error) {
    return <>{product.error}</>;
  }
  return product.products.map((product) => (
    <Product key={product.id} product={product} />
  ));
};

export default Products;

// var [counter, setCounter] = useState(0);
// var variable = false;
// var isFirst = true;
// useEffect(() => {
//   if (!isFirst) {
//     setCounter(counter + 1);
//   } else {
//     isFirst = false;
//   }
// }, [variable]);
// {
//   counter;
// }
// <button
//   onClick={(e) => {
//     variable = !variable;
//   }}
// >
//   Press
// </button>;
