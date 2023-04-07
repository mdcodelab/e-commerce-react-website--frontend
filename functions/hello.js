
//domain/.netlify/functions/hello
const items=[
    {id: 1, name: "john doe"},
    {id: 2, name: "mary smith"}
]

exports.handler = async function (event, context) {
    console.log("Function called!");
    return {
      statusCode: 200,
      body: JSON.stringify(items)
    };
  };
  