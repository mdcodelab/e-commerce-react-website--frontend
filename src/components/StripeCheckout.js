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
  const {cart, total_amount, shipping_fee, clearCart}=useCartContext();
  const {myYser}=useUserContext();
  const history=React.useHistory();
  //stripe stuff
  const[succeeded, setSucceeded]=React.useState(false);
  const[error, setError]=React.useState(null);
  const[processing, setProcessing]=React.useState("");
  const[disabled, setDisabled]=React.useState(true);
  const[clientSecret, setClientSecret]=React.useState("");
  const stripe = useStripe();
  const elements = useElements();


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
