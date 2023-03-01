import React from 'react';
import { FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons';
import {useProductsContext} from "../context/products_context"


function Sidebar() {
  const {isSidebarOpen, closeSidebar}=useProductsContext();


  return (
    <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <div className='sidebar-header'>
          <Link to='/'>
            <h2 className="logo">Wooden Wonders</h2>
          </Link>
          <button type='button' className='nav-toggle' onClick={closeSidebar}><FaTimes /></button>
        </div>

        <ul className='sidebar-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url} className="link" onClick={closeSidebar}>{text} </Link>
              </li>
            )
          })}
          
        </ul>

        <CartButtons></CartButtons>
      </div>
    </aside>
  );
}

export default Sidebar;
