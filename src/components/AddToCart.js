import React from 'react';
import {Link} from "react-router-dom";
import { FaCheck } from 'react-icons/fa';
import { IoColorFill, IoColorFillOutline } from 'react-icons/io5';



function AddToCart({product}) {
  const {id, stock, colors}=product;

  const[mainColor, setMainColor]=React.useState(colors[0]);
  console.log(mainColor)


  return (
    <div className="colors-container">
        <div className="colors">
            <span>Colors:</span>
            {colors.map((color, index) => {
              return <div key={index} style={{backgroundColor: color}} 
              className={mainColor === color ? "selected" : ""}  onClick={()=> setMainColor(color)}>
                {mainColor === color && <FaCheck style={{color: "white"}}></FaCheck>}
              </div>
            })}
            </div>
        <div className="btn-container">

        </div>
    </div>
  );
}

export default AddToCart;
