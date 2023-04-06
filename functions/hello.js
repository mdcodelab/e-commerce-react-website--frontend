
//domain/netlify/functions/hello

exports.handler = async function (event, context) {
    console.log("Function called!");
    return {
      statusCode: 200,
      body: "Hello world!"
    };
  };
  