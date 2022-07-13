import axios from "axios";

const baseUrl = "https://62bd8db5c5ad14c110c16cc2.mockapi.io/ecommercProduct";

export const getProduct = () => {
  return axios.get(baseUrl);
};

export const getProductDetails = (id) => {
  return axios.get(baseUrl + "/" + id);
};
