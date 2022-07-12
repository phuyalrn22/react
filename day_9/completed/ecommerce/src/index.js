import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Products from "./pages/Home/products";
import LoginForm from "./pages/Login";
import ProductDetailsPage from "./pages/productDetails";
import Description from "./pages/productDetails/components/Description";
import Review from "./pages/productDetails/components/Review";
import SignUpForm from "./pages/Signup";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path="/products/:id" element={<ProductDetailsPage />}>
            <Route path="" element={<Description />} />
            <Route path="description" element={<Description />} />
            <Route path="review" element={<Review />} />
          </Route>

          <Route path="*" element={<div>404 No page found</div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
