import React from 'react';
import {BsFillGridFill, BsList} from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';

function Sort() {
  const {filtered_products: products, grid_view}=useFilterContext();
  return (
    <div className="sort-container">
        <siv className="btn-container">
           <button type="button" className={grid_view ? "active-btn" : "grid-btn"}><BsFillGridFill title="Grid view"></BsFillGridFill></button>
           <button type="button" className={!grid_view ? "active-btn" : ""}><BsList title="List view"></BsList></button>
        </siv>
        <div>{products.length} products found.</div>
        <form>
          <label htmlFor="sort">Sort by: </label>
          <select name="sort" id="sort" className="sort-input">
            <option value="price=lowest">Price (Lowest)</option>
            <option value="price=highest">Price (Highest)</option>
            <option value="name-a">Name (A-Z)</option>
            <option value="name-z">Name (Z-A)</option>
          </select>
        </form>
        <hr></hr>
    </div>
  );
}

export default Sort;
