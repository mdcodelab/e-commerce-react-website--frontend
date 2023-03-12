import React from 'react';
import {BsFillGridFill, BsList} from "react-icons/bs";
import { useProductsContext } from '../context/products_context';

function Sort() {
  const {products, grid_view, gridView, listView, sort, updateSort}=useProductsContext();
  return (
    <div className="sort-container">
      <div className="result">
      <div className="btn-container">
            <button type="button" className={grid_view ? "active-btn" : "grid-btn"}>
            <BsFillGridFill title="Grid view" onClick={gridView}></BsFillGridFill></button>
            <button type="button" className={!grid_view ? "active-btn" : ""}>
            <BsList title="List view" onClick={listView}></BsList></button>
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
