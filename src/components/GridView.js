import React from 'react';
import Product from "./Product";

function GridView({products}) {
  console.log(products);
  return (
    <div className="grid-container">
      {products.map((product, index) => {
        return <Product key={product.id} {...product}></Product>
      })}
    </div>
  );
}

export default GridView;
