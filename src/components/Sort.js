import React from 'react';
import {BsFillGridFill, BsList} from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';

function Sort() {
  const {filtered_products: products, grid_view, showList, showGrid, sort, updateSort}=useFilterContext();
  return (
    <div className="sort-container">
      <div className="result">
      <div className="btn-container">
            <button type="button" className={grid_view ? "active-btn" : "grid-btn"}>
            <BsFillGridFill title="Grid view" onClick={showGrid}></BsFillGridFill></button>
            <button type="button" className={!grid_view ? "active-btn" : ""}>
            <BsList title="List view" onClick={showList}></BsList></button>
            </div>
          <span>{products.length} products found.</span>
      </div>
        <div className="hr"></div>
        <form>
          <label htmlFor="sort">Sort by: </label>
          <select name="sort" value={sort} onChange={updateSort} id="sort" className="sort-input">
            <option value="price-lowest">Price (Lowest)</option>
            <option value="price-highest">Price (Highest)</option>
            <option value="name-a">Name (A-Z)</option>
            <option value="name-z">Name (Z-A)</option>
          </select>
        </form>
    </div>
  );
}

export default Sort;
