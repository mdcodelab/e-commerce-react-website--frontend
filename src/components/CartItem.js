import React from 'react';
import AmountButtons from "./AmountButtons";
import {formatPrice} from "../utils/helpers";
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';


function CartItem({id, image, name, color, price, amount}) {
    console.log(color);
    const{removeItem, toggleAmount}=useCartContext();

    const increase = () => {

    }

    const decrease = () => {

    }

  return (
    <div className="cartItem-container">
        <div className="title">
            <img src={image} alt={name}></img>
            <div>
                <h5>{name}</h5>
                <p className="color">Color: <span className="color" style={{background: color, width: "3rem", height: "3rem"}}></span></p>
                <h5 className="price-small">{formatPrice(price)}</h5>
            </div>
        </div>
        <h5 className="price">{formatPrice(price)}</h5>
        <AmountButtons amount={amount} increase={increase} decrease={decrease}></AmountButtons>
        <h5 className="amount">{formatPrice(price*amount)}</h5>
        <button type="button" className="remove-btn" onClick={()=>removeItem(id)}>
        <FaTrash></FaTrash></button>
      
    </div>
  );
}

export default CartItem;

