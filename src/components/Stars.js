import React from 'react';
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"

function Stars({stars, reviews}) {
  const [starsi , setStars]=React.useState(0);
  return (
    <div className="stars-container">
          <div className="stars">
          {/* stars*/}
          <span>{stars >= 1 ? <BsStarFill /> : stars > 0.5 ? <BsStarHalf /> : <BsStar />}</span>
          {/* end of star */}
          {/* stars*/}
          <span>{stars >= 2 ? <BsStarFill /> : stars > 1.5 ? <BsStarHalf /> : <BsStar />}</span>
          {/* end of star */}
          {/* stars*/}
          <span>{stars >= 3 ? <BsStarFill /> : stars > 2.5 ? <BsStarHalf /> : <BsStar />}</span>
          {/* end of star */}
          {/* stars*/}
          <span>{stars >= 4 ? <BsStarFill /> : stars > 3.5 ? <BsStarHalf /> : <BsStar />}</span>
          {/* end of star */}
          {/* stars*/}
          <span>{stars === 5 ? <BsStarFill /> : stars > 0.5 ? <BsStarHalf /> : <BsStar />}</span>
          {/* end of star */}
          </div>
          <p className="reviews">{reviews} customer reviews</p>
    </div>
  );
}

export default Stars;
