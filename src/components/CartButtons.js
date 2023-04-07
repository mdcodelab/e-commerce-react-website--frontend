import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context';
import { useProductsContext } from '../context/products_context';
import { useUserContext} from '../context/user_context';

function CartButtons() {
  const {isSidebarOpen, closeSidebar}=useProductsContext();
  const {total_items}=useCartContext();
  const {loginWithRedirect, myUser, logout}=useUserContext();

  return (
    <div className={isSidebarOpen ? "show-btn" : "cart-btn-container"} onClick={closeSidebar}>
        <Link to="/cart" className="shopping">
        Cart
        <span className="cart-container">
            <FaShoppingCart className="icon"></FaShoppingCart>
            {myUser ? (
              <span className="cart-value">
            {total_items}</span>
            ) 
            : 
            (<span></span>)} 
        </span>
        </Link>
        
        {!myUser ? (<button type="button" className="auth-btn" onClick={()=>loginWithRedirect()}>
            Login <FaUserPlus className="icon"></FaUserPlus>
        </button>) 
        : 
        (<button type="button" className="auth-btn" onClick={()=> logout({logoutParams: {
          returnTo: window.location.origin
        }})}>Logout <FaUserMinus></FaUserMinus></button>)}
        
    </div>
  );
}

export default CartButtons;
