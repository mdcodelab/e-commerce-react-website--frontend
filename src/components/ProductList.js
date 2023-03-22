import React from 'react';
import { useProductsContext } from '../context/products_context';
import ListView from "./ListView";
import GridView from "./GridView";

function ProductList() {
  const {products, grid_view}=useProductsContext();
  console.log(products);
  //console.log(grid_view);
  
  if(products.length < 1) {
    return (<h5>Sorry, no products matched your search...</h5>)
  }

  if(grid_view === false) {
    return (<ListView products={products}></ListView>)
  }

  return (
    <div>
      <GridView products={products}></GridView>
    </div>
  );
}

export default ProductList;
