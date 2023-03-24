import React from 'react';
import {formatPrice, getUniqueValues} from "../utils/helpers";
import { FaCheck } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';


function Filters() {
  const {filters: {text, category, company, color, min_price, price, max_price, shipping}, 
  updateFilters, clearFilters, products}=useProductsContext();

  const categories = ["all",...getUniqueValues(products, 'category')];
  const companies = ["all", ...getUniqueValues(products, 'company')];
  const colors = ["all", ...getUniqueValues(products, 'colors')];
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
            
            {/* company */}
            <h5>Company</h5>
            <div className="company-control">
              <select name="company" value={company} onChange={updateFilters} className="company">
                {companies.map((comp, index)=> {
                  return <option key={index} value={comp}>{comp}</option>
                })}
              </select>
            </div>
            {/* end company */}

            {/* colors */}
                <div className="colors-control">
                  <h5>Colors</h5>
                  <div className="colors">
                    {colors.map((col, index) => {
                      if(col === "all") {
                        return <button name={color} onClick={updateFilters}
                         data-color="all" className={col === "all" ? "all-btn-active" : "all-btn"}>{col}</button>
                      }
                      return <button key={index} style={{background: `${col}`}}
                      className={color === col ? "color-btn-active" : "color-btn"}
                      name="color" data-color={col} onClick={updateFilters}>
                        {color === col ? <FaCheck></FaCheck> : null}
                      </button>
                    })}
                  </div>
                </div>
            {/* end colors */}




      </form>
    </div>
  );
}

export default Filters;
