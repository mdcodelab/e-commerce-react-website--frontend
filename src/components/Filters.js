import React from 'react';
import {formatPrice, getUniqueValues} from "../utils/helpers";
import { FaCheck } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';

function Filters() {
  const {filters: {text, category, company, color, min_price, price, max_price, shipping}, 
  updateFilters, clearFilters, products}=useProductsContext();

  const categories = ["all",...getUniqueValues(products, 'category')];
  const companies = getUniqueValues(products, 'company');
  const colors = getUniqueValues(products, 'colors');
  console.log(categories, companies, colors);

  return (
    <div className="filters-container">
      <form onSubmit={(e)=> e.preventDefault()}>
      {/* search input*/}
          <div className="form-control">
            <input type="text" name="text" placeholder="Search..." 
            className="search-input" value={text} onChange={updateFilters} ></input>
          </div>
          {/* end of search input */}

          {/* categories */}
          <div className="category-control">
            <h5>Category</h5>
              {categories.map((cat, index) => {
                return <button type="button" key={index}
                 onClick={updateFilters} name="category" 
                 className={category === cat.toLowerCase() ? "acc-btn" : "n-btn"}>{cat}</button>
              })}
          </div>
          {/* end of categories */}

      </form>
    </div>
  );
}

export default Filters;
