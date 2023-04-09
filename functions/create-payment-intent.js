//domain: .nrtlify/functions/create-payment-intent 
const dotenv = require('dotenv')
dotenv.config()


exports.handler = async function (event, context) {
  console.log(event);
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { cart, shipping_fee, total_amount } = body;

    if (!cart || !shipping_fee || !total_amount) {
      throw new Error('Missing required fields in request body');
    }

    console.log('Received data:', { cart, shipping_fee, total_amount });

    return {
      statusCode: 200,
      body: 'Payment intent created successfully'
    };
  } catch (error) {
    console.log('Error:', error);
    return {
      statusCode: 500,
      body: 'Error creating payment intent'
    };
  }
};


