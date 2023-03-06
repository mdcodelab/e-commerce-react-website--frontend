import React from 'react';
import {Link} from "react-router-dom";

function PageHero({title, single_product}) {
  return (
    <div className="section-center hero">
          <h3>
          <Link to="/">Home</Link> / 
          {single_product && (<Link to="/products"> Products </Link>)}
          / {title}
          </h3>
    </div>
  );
}

export default PageHero;
