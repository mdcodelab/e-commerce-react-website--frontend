import React from 'react';
import {Link} from "react-router-dom";
import home from "../assets/home.jpg";

function Home() {
  return (
    <div className="home-container section-center">
      <div className="home-header">
        <div className="welcome">
             <h1>Design Your <br></br>Comfort Zone</h1>
              <p>Welcome to our online store where we create and sell exquisite wooden furniture. Each piece is 
                  crafted with care, ensuring a unique and 
                   durable addition to your home. Browse our collection and discover the perfect item to enhance your space.</p>
              <Link to="/products" className="btn">Shop Now</Link>
        </div>
        <div className="welcome-img">
           <img src={home} alt=""></img>
        </div>
      </div>

          <div className="featured-products">

          </div>

          <div className="services">

          </div>

          <div className="newsletter">

          </div>
    </div>
  );
}

export default Home;

