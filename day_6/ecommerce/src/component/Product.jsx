import React from "react";

const Product = ({ product }) => {
  const { name, thumbnailImage, price, oldPrice, description } = product;
  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-4 ">
      <div className="card mx-4">
        <img className="card-img" src={thumbnailImage} alt={name} />

        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">Style: {name}</h6>
          <p className="card-text">{description}</p>

          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4">${price}</h5>
            </div>
            <a href="#" className="btn btn-danger mt-3">
              {" "}
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
