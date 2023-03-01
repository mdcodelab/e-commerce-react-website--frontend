import React from 'react';
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa";
import {links} from "../utils/constants"
import CartButtons from "./CartButtons"
import { useProductsContext } from '../context/products_context';

function Navbar() {
  const{openSidebar}=useProductsContext()

  return (
    <nav>
          <div className="nav-center">
              <div className="nav-header">
                <Link to="/">
                    <h2 className="logo">
                    <span className="logo-l">Wooden</span>
                    <span className="logo-r">Wonders</span>
                    </h2>
                </Link>
                <button type='button' className='nav-toggle' onClick={openSidebar}><FaBars /></button>
            </div>

              <ul className="nav-links">
             {links.map((link) => {
             const {id, text, url}=link
            return <li key={id}><Link to={url}>{text}</Link></li>
            })}
        </ul>

        <CartButtons></CartButtons>
        
        </div>
    </nav>
  );
}

export default Navbar;
