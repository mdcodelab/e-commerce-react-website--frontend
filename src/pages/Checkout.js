import React from 'react';
import PageHero from "../components/PageHero";
import StripeCheckout from '../components/StripeCheckout';
//extra imports
import { useCartContext } from '../context/cart_context';
import {Link} from "react-router-dom";


function Checkout({title}) {
  const{cart}=useCartContext();

  return (
    <div>
      <PageHero title=" checkout"></PageHero>
      <div className="page">
        {cart.length < 1 ? (<div className="page-100">
                          <div className="empty">
                          <h2>Your cart is empty</h2>
                          <Link to="/products" className="btn">fil it</Link>

                          </div>
                            </div>)
        :
        (<StripeCheckout></StripeCheckout>)}
      </div>
    </div>
  );
}

export default Checkout;
