import React from 'react';
import PageHero from "../components/PageHero";
import aboutImg from "../assets/hero-bcg.jpeg";

function About() {
  return (
    <div className="about">
        <PageHero title=" about"></PageHero>
        <div className="page section section-center about-page">
              <img src={aboutImg} alt="nice desk"></img>
            
          <article>
            <div className="title">
              <h2>Our story</h2>
              <div className="underline"></div>
            </div>
            <p>At our wooden furniture store, we share a passion for natural beauty and quality craftsmanship. We believe that a well-made piece of furniture can bring comfort and inspiration to any space. That's why we curate and sell exceptional wooden products, from tables and chairs to home decor, that enhance the lives of our customers. Sustainability is also a top priority for us, and we strive to offer pieces that reflect our commitment to 
            preserving the environment. Join us on our journey to discover the timeless elegance of wooden furniture.</p>
          </article>
        </div>
    </div>
  );
}

export default About;
