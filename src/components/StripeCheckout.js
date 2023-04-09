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




const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);


const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  
  
  //const history = useHistory();
  
  // stripe stuff
  const [succeeded, setSucceeded] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [processing, setProcessing] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [clientSecret, setClientSecret] = React.useState("");
  const stripe = useStripe();
  const elements = useElements();
  


  const createPaymentIntent = async () => {
    console.log({ cart, shipping_fee, total_amount });
    try {
      const {data} = await axios.post(
        '/.netlify/functions/create-payment-intent',
        JSON.stringify({ cart, shipping_fee, total_amount}),
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(data);
      return data.clientSecret
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };
  

  React.useEffect(() => {
    createPaymentIntent();
  },[]);

  const handleChange = (event) => {};

  const handleSubmit = (ev) => {};

  return (
    <div className="section">
    {succeeded ? (<div className="response-success">
                  <h4>Thank you!</h4>
               <h4>Your payment was successful!</h4>
                 <h4>Redirecting to homepage shortly.</h4>
                </div>) 
    : (<div className="response-error">
      <h4>Hello, {myUser && myUser.name}</h4> 
      <p>Your total: {formatPrice(shipping_fee+total_amount)}</p>
      <p>Test Card Number: 4242 4242 4242 4242</p>
    </div>)}
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
