import React from "react";
import { Link } from "react-router-dom";

const Nav = (prod) => {
  var linkStyle = {
    color: "white",
  };
  return (
    <nav
      style={{
        backgroundColor: "black",
        display: "flex",
        color: "white",
        justifyContent: "space-around",
      }}
    >
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        About
      </Link>
      <Link style={linkStyle} to="/contact">
        Contact us
      </Link>
      <Link style={linkStyle} to="/contact/Shyam">
        Contact Ram
      </Link>
    </nav>
  );
};

export default Nav;
