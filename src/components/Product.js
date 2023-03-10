import React from 'react';
import {FaGalacticRepublic} from "react-icons/fa";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {formatPrice} from "../utils/helpers";


function Product({image, name, price, id}) {
    React.useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
          disable: "mobile",
          once: false,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          scroll: true
        });
      }, []);


  return (
    <div className="product-container" data-aos="flip-up">
      <img src={image} alt={name}></img>
      <Link to={`/products/${id}`} className="cover">
            <div className="icon-products-background">
            <FaGalacticRepublic className="icon-products" />
            </div>
      </Link>
      <div className="product-footer">
        <span className="product-footer-name">{name}</span>
        <span className="price">{formatPrice(price)}</span>
      </div>
    </div>
  );
}

export default Product;
