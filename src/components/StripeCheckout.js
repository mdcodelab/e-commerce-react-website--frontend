import React from 'react';

const CheckoutForm = () => {
return <h2>Hello from Stripe Checkout</h2>
}

const StripeCheckout = () => {
  return (
    <div className="stripe-container">
      <CheckoutForm></CheckoutForm>
    </div>
  )
}

export default StripeCheckout;
