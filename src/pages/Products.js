import React from 'react';
import Loading from "../components/Loading";
import PageHero from "../components/PageHero";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";


function Products() {
  

  return (
      <main>
      <PageHero title=" products"></PageHero>
      <div className="section products">
          <div className="filters">
            <Filters></Filters>
          </div>
          <div className="list">
            <Sort></Sort>
            <ProductList></ProductList>
          </div>
      </div>
      </main>
  );
}

export default Products;
