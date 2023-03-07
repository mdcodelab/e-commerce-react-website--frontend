import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaStarHalf } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";


function Stars({stars, reviews}) {

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <FaStar />
        ) : stars > index ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
    )
  })

  return (
    <div className="stars-container">
          <div className="stars">{tempStars}</div>
          <span className="reviews">{reviews} customer reviews</span>
    </div>
  );
}

export default Stars;
