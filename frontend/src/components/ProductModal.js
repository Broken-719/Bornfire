import React, { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../api/productApi";
import './ProductModal.css'

export default function ProductModal({ show, onClose, fetchProducts, editProduct }) {
  const [form, setForm] = useState({
    name: "", stock: "", category: "", price: "", productId: "", description: "", image: null
  });

  useEffect(() => {
    if (editProduct) {
      setForm({ ...editProduct, image: null });
    }
  }, [editProduct]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setForm({ ...form, [name]: files[0] });
    else setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in form) if (form[key] !== null) data.append(key, form[key]);
    
    if (editProduct) await updateProduct(editProduct._id, data);
    else await addProduct(data);

    fetchProducts();
    onClose();
  };

  if (!show) return null;
  return (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <form onSubmit={handleSubmit}>
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title">{editProduct ? "Edit" : "Add"} Product</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} value={form.name} required />
              <input type="file" name="image" className="form-control mb-2" onChange={handleChange} />
              <input type="text" name="productId" placeholder="ID" className="form-control mb-2" onChange={handleChange} value={form.productId} required />
              <input type="text" name="category" placeholder="Category" className="form-control mb-2" onChange={handleChange} value={form.category} required />
              <input type="number" name="stock" placeholder="Stock" className="form-control mb-2" onChange={handleChange} value={form.stock} required />
              <input type="number" name="price" placeholder="Price" className="form-control mb-2" onChange={handleChange} value={form.price} required />
              <textarea name="description" placeholder="Description" className="form-control" onChange={handleChange} value={form.description}></textarea>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-2 btn-primary">{editProduct ? "Update" : "Add a Product"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}