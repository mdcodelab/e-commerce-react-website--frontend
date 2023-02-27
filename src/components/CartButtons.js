import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CartButtons() {
  return (
    <div className="cart-btn-container">
        <Link to="/cart" className="shopping">
        Cart
        <span className="cart-container">
            <FaShoppingCart className="icon"></FaShoppingCart>
            <span className="cart-value">12</span>
        </span>
        </Link>
        <button type="button" className="auth-btn">
            Login <FaUserPlus classNAme="icon"></FaUserPlus>
        </button>
    </div>
  );
}

export default CartButtons;
