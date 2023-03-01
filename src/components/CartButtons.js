import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context';


function CartButtons() {
  const {isSidebarOpen, closeSidebar}=useProductsContext();
  return (
    <div className={isSidebarOpen ? "show-btn" : "cart-btn-container"} onClick={closeSidebar}>
        <Link to="/cart" className="shopping">
        Cart
        <span className="cart-container">
            <FaShoppingCart className="icon"></FaShoppingCart>
            <span className="cart-value">12</span>
        </span>
        </Link>
        <button type="button" className="auth-btn">
            Login <FaUserPlus className="icon"></FaUserPlus>
        </button>
    </div>
  );
}

export default CartButtons;
