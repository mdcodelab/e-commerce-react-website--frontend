import React from 'react';
import { useFilterContext } from '../context/filter_context';
import ListView from "./ListView";
import GridView from "./GridView";

function ProductList({products}) {
  

  return (
    <div>
      <GridView products={products}></GridView>
      <ListView products={products}></ListView>
    </div>
  );
}

export default ProductList;
