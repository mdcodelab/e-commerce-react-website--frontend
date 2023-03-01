import React from 'react';
import { FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons';
import {useProductsContext} from "../context/products_context"


function Sidebar() {
  const data=useProductsContext();
  console.log(data);
  const isOpen = true;

  return (
    <aside className={isOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <div className='sidebar-header'>
          <Link to='/'>
            <h2 className="logo">Wooden Wonders</h2>
          </Link>
          <button type='button' className='nav-toggle'><FaTimes /></button>
        </div>
        <ul className='sidebar-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url} className="link">{text}</Link>
              </li>
            )
          })}
          <Link to="/checkout" className="link">Checkout</Link>
        </ul>
        <CartButtons />
      </div>
    </aside>
  );
}

export default Sidebar;
