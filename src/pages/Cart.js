import React from 'react';
import {Link} from "react-router-dom";
import PageHero from '../components/PageHero';
import { useCartContext } from '../context/cart_context';


function Cart() {
  const {cart}=useCartContext();

  if(cart.length < 1) {
    return (<div className="page-100">
        <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">fil it</Link>
        </div>
    </div>)
  }


  return (
    <main>
      <PageHero title=" cart"></PageHero>
      <div className="cart-container">

      </div>
    </main>
  );
}

export default Cart;
