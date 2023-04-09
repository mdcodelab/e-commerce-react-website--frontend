import React from 'react';
import {Link} from "react-router-dom";
import PageHero from '../components/PageHero';
import CartColumns from '../components/CartColumns';
import CartItem from '../components/CartItem';
import CartTotals from '../components/CartTotals';
import { useCartContext } from '../context/cart_context';


function CartPage() {
  const {cart, clearCart, total_amount, shipping_fee}=useCartContext();

  if(cart.length < 1) {
    return (<div className="page-100">
        <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">fil it</Link>
        </div>
    </div>)
  }


  return (
    <div className="cart-container">
      <PageHero title=" cart"></PageHero>
      <div className="cart-content section section-center">
          <CartColumns></CartColumns>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>
          })}
          <hr></hr>
          <div className="link-container">
            <Link to="/products" className="link-btn">continue shopping</Link>
            <button type="button" className="link-btn clear-btn" onClick={clearCart}>clear shopping cart</button>

          </div>
          <CartTotals></CartTotals>
      </div>
    </div>
  );
}

export default CartPage;
