import React from 'react';
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
import {links} from "../utils/constants"
import CartButtons from "./CartButtons"

function Navbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen)
  }

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
                <button type='button' className='nav-toggle' onClick={handleNavToggle}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
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
