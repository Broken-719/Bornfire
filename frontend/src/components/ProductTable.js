import React from "react";
import "./ProductTable.css";

export default function ProductTable({ products, onEdit, onDelete }) {
  return (



    <div className="products">
      {/* Header */}
      <div className="products-header">
        <h1 className="products-title">Products</h1>
        <p className="products-subtitle">Keep track of your inventory</p>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>ID</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id}>
                <td>{p.image && <img src={`http://localhost:5000/uploads/${p.image}`} alt="" className="table-img"/>}</td>
                <td>{p.name}</td><td>{p.productId}</td><td>{p.category}</td><td>{p.stock}</td><td>{p.price}</td><td>{p.description}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-1" onClick={() => onEdit(p)}>Update</button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(p._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

