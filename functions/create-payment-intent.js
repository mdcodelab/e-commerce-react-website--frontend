require('dotenv').config()

const stripe=require("stripe")(process.env.REACT_APP_STRIPE_SEC)


exports.handler = async function (event, context) {
  console.log(event);
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { cart, shipping_fee, total_amount } = body;

    if (!cart || !shipping_fee || !total_amount) {
      throw new Error('Missing required fields in request body');
    }

    console.log('Received data:', { cart, shipping_fee, total_amount });

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd"
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
      };
    } catch (error) {
      console.log('Error:', error);
      return {
        statusCode: 500,
        body: 'Error creating payment intent'
      };
    }
  } catch (error) {
    console.log('Error:', error);
    return {
      statusCode: 500,
      body: 'Error creating payment intent'
    };
  }
};
