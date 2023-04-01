import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context';
import { useProductsContext } from '../context/products_context';


function CartButtons() {
  const {isSidebarOpen, closeSidebar}=useProductsContext();
  const {total_items}=useCartContext();

  return (
    <div className={isSidebarOpen ? "show-btn" : "cart-btn-container"} onClick={closeSidebar}>
        <Link to="/cart" className="shopping">
        Cart
        <span className="cart-container">
            <FaShoppingCart className="icon"></FaShoppingCart>
            <span className="cart-value">{total_items}</span>
        </span>
        </Link>
        <button type="button" className="auth-btn">
            Login <FaUserPlus className="icon"></FaUserPlus>
        </button>
    </div>
  );
}

export default CartButtons;
