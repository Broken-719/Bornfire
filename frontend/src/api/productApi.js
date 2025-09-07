import axios from "axios";

const API = "http://localhost:5000/api/products";

export const getProducts = () => axios.get(API);
export const addProduct = (formData) => axios.post(API, formData);
export const updateProduct = (id, formData) => axios.put(`${API}/${id}`, formData);
export const deleteProduct = (id) => axios.delete(`${API}/${id}`);

