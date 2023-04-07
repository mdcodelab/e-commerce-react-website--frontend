import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
//import { useHistory } from 'react-router-dom';



const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);



const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  //const history = useHistory();
  
  // stripe stuff
  const [succeeded, setSucceeded] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [processing, setProcessing] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [clientSecret, setClientSecret] = React.useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    console.log("hello from stripe checkout");
  };

  React.useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = (event) => {};

  const handleSubmit = (ev) => {};

  return (
    <div className="section">
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="link-authentication-element" onChange={handleChange} />
        <button className="bt" disabled={processing || disabled || succeeded}>
        <span>{processing ? <div className="spinner-check"></div> : "PAY"}</span></button>

        {/* Show any error that happens when processing the payment*/}
        {error && <div className="card-error" rile="alert">{error}</div>}

        {/* Show a success message upon completion*/}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your <a href={`https://dashboard.stripe.com/test/elements`}>
        Stripe dashboard. </a>
        <span>Refresh the page to try again</span>
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <div className="stripe-container">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
