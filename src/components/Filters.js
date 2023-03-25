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


  const stylesBtn_all = {
    borderBottom: color === "all" ? "1px solid var(--clr-grey-4)" : "none"
  };



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
          <div className="form-control category-control">
            <h5>Category</h5>
              {categories.map((cat, index) => {
                return <button type="button" key={index}
                 onClick={updateFilters} name="category" 
                 className={category === cat.toLowerCase() ? "acc-btn" : "n-btn"}>{cat}</button>
              })}
          </div>
          {/* end of categories */}
            
            {/* company */}
            <div className="form-control company-control">
              <h5>Company</h5>
              <select name="company" value={company} onChange={updateFilters} className="company">
                {companies.map((comp, index)=> {
                  return <option key={index} value={comp} className="company">{comp}</option>
                })}
              </select>
            </div>
            {/* end company */}

            {/* colors */}
                <div className="form-control colors-control">
                  <h5>Colors</h5> 
                  <div className="colors">
                    {colors.map((col, index) => {
                      if(col === "all") {
                        return <button name="color" onClick={updateFilters} style={stylesBtn_all}
                         data-color="all" className="all-btn" key={index}>
                         {col}
                         </button>
                      } 
                      else {
                      return <button key={index} style={{background: `${col}`}}
                      className={color === col ? "color-btn activeCol" : "color-btn"}
                      name="color" data-color={col} onClick={updateFilters}>
                        {color === col ? <FaCheck className= "icon-color"></FaCheck> : null}
                      </button>}
                    })}
                    
                  </div>
                </div>
            {/* end colors */}

             {/* price */}
                    <div className="form-control price-control">
                      <h5>Price</h5>
                      <p className="price">{formatPrice(price)}</p>
                      <input type="range" name="price" onChange={updateFilters}
                       min={min_price} max={max_price} value={price} className="my-range"></input>
                    </div>
              {/* end price */}

              {/* shipping */}
                  <div className="form-control shipping-control">
                    <label htmlFor="shipping">Free shipping</label>
                    <input type="checkbox" name="shipping" checked={shipping} id="shipping"
                    onChange={updateFilters}></input>
                  </div>
              {/* end shipping */}
      </form>
      <button type="button" className="clear-btn btn" onClick={clearFilters}>clear filters</button>
    </div>
  );
}

export default Filters;
