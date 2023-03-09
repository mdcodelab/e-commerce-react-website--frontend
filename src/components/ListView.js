import React from 'react';
import { formatPrice } from '../utils/helpers';
import {Link} from "react-router-dom";


function ListView({products, grid_view}) {
  

  return (
    <div className="list-view-container">
      {products.map((product) => {
        const{id, image, name, price, description}=product;
        return <div key={id} className="list-view">
          <img src={image} alt={name}></img>
          <div className="list-view-info">
            <h4>{name}</h4>
            <h5 className="price">{formatPrice(price)}</h5>
            <p>{description.substring(0, 150)}...</p>
            <Link to={`/products/${id}`} className="btn btn-list-view">Details</Link>
          </div>
        </div>
      })}
    </div>
  );
}

export default ListView;
