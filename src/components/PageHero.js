import React from 'react';
import {Link} from "react-router-dom";

function PageHero({title}) {
  return (
    <div className="section-center hero">
          <h3>
          <Link to="/">Home</Link> / {title}
          </h3>
    </div>
  );
}

export default PageHero;
