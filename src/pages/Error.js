import React from 'react';
import {Link} from "react-router-dom";

function Error() {
  return (
    <div className="page-100">
        <div className="error-page">
        <h1>404</h1>
        <p>Sorry, the page you tried cannot be found.</p>
        <Link to="/" className="btn">Back Home</Link>
        </div>
    </div>
  );
}

export default Error;
