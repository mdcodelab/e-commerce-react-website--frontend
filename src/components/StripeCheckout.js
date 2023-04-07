import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement, LinkAuthenticationElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import {useHistory} from "react-router-dom";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);
console.log(promise);


const CheckoutForm = () => {
return <h2>Hello from Stripe Checkout</h2>
}

const StripeCheckout = () => {
  return (
    <div className="stripe-container">
    <PaymentElement stripe={promise}>
        <CheckoutForm></CheckoutForm>
    </PaymentElement>
      
    </div>
  )
}

export default StripeCheckout;
