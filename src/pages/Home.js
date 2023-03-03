import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IconBase } from 'react-icons';
import {Link} from "react-router-dom";
import home from "../assets/home.jpg";
import {services} from "../utils/constants";



function Home() {
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
    <div className="home-container section-center">
        <div className="home-header">
          <div className="welcome" data-aos="fade-up">
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


          <div className="services-container">
              <article>
                <h3>Custom Furniture Built <br></br>Only for You</h3>
                <p>Our skilled craftsmen create unique and personalized furniture pieces 
                    tailored to your style and needs. From design to delivery, we ensure the highest 
                    quality and satisfaction.</p>
              </article>
              <div className="services">
              {services.map((service) => {
                const{id, icon, image, title, text}=service
                return <div key={id} className={`service service-${id}`} 
                        data-aos={id === 2 ? "" : id === 1 ? "fade-right" : "fade-left"} 
                        data-aos-delay={id === 2 ? "" : id === 1 ? "300" : "500"}
                        >
                    <div className="icon">{icon}</div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
              })}

              </div>
          </div>

          <div className="newsletter-container">
              <div className="newsletter-center">
                <div className="newsletter-title">
                  <h3>Join our newsletter and get 20% off</h3>
                  <p>Subscribe to our newsletter and receive a 
                      20% discount on your first purchase. Stay updated on our latest collections and exclusive offers.</p>
                </div>
                <form className="contact-form">
                  <input type="email" className="form-input" placeholder="Enter email"></input>
                  <button type="submit" className="btn submit-btn">Subscribe</button>

                </form>
              </div>
          </div>

      
    </div>
  );
}

export default Home;
