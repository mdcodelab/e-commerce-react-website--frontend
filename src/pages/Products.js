import React from 'react';
import Loading from "../components/Loading";
import PageHero from "../components/PageHero";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import { useFilterContext } from '../context/filter_context';

function Products() {
  const{products}=useFilterContext();

  return (
      <main>
      <PageHero title=" products"></PageHero>
      <div className="section-center products">
          <div className="filters">
            <Filters></Filters>
          </div>
          <div className="list">
            <Sort></Sort>
            <ProductList products={products}></ProductList>
          </div>
      </div>
      </main>
  );
}

export default Products;
