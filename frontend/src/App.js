import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Accounts from './components/Accounts';
import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "./api/productApi";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";

function App() {

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleEdit = (product) => { setEditProduct(product); setShowModal(true); };
  const handleDelete = async (id) => { await deleteProduct(id); fetchProducts(); };

  let component
  switch (window.location.pathname) {
    case '/dashboard':
      component = <Dashboard />;
      break;
    case '/products':
      component = (
        <div className="container mt-3">
          <button className="btn btn-1 btn-primary" onClick={() => { setEditProduct(null); setShowModal(true); }}>Add Product</button>
          <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
          <ProductModal show={showModal} onClose={() => setShowModal(false)} fetchProducts={fetchProducts} editProduct={editProduct} />
        </div>
      );

      break;
    case '/orders':
      component = <Orders />;
      break
    case '/accounts':
      component = <Accounts />;
      break;
    default:
      window.history.pushState({}, '', '/dashboard');
  }


  return (
  <div className="App">
      <Navbar />
      {component}
  </div>
  );
}

export default App;