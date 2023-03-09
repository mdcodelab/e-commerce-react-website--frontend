import React from 'react';
import { useFilterContext } from '../context/filter_context';
import ListView from "./ListView";
import GridView from "./GridView";

function ProductList() {
  const {filtered_products: products, grid_view}=useFilterContext();
  
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
