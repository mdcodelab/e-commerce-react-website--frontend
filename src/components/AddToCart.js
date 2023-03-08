import React from 'react';
import {Link} from "react-router-dom";
import { FaCheck } from 'react-icons/fa';
import { IoColorFill, IoColorFillOutline } from 'react-icons/io5';
import AmountButtons from "./AmountButtons";



function AddToCart({product}) {
  const {id, stock, colors}=product;

  const[mainColor, setMainColor]=React.useState(colors[0]);
  const[amount, setAmount]=React.useState(1);

  const increase = () => {
    if(amount > stock) {
      setAmount(amount);
    } else {
      setAmount(prevState => prevState+1);
    }
  }

  const decrease = () => {
    if(amount <= 1 ) {
      setAmount(amount)
    } else {
      setAmount(prevState => prevState-1);
    }
  }

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
            <AmountButtons increase={increase} decrease={decrease} amount={amount}></AmountButtons>
            <Link to="cart" className="btn">ADD TO CART</Link>
        
    </div>
  );
}

export default AddToCart;
