import React from 'react';
import AmountButtons from "./AmountButtons";
import {formatPrice} from "../utils/helpers";
import { FaTrash } from 'react-icons/fa';
import {Link} from "react-router-dom";
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
        <Link to={`/products/${id}`} className="cartItem-title">
            <img src={image} alt={name}></img>
            <div>
                <h5 className="cartItem-name">{name}</h5>
                <p className="cartItem-color">Color: <span style={{background: color}}></span></p>
                <h5 className="cart-price">{formatPrice(price)}</h5>
            </div>
        </Link>
        <div className="cartItem-quant">
            <h5 className="price-small">{formatPrice(price)}</h5>
            <AmountButtons amount={amount} increase={increase} decrease={decrease}></AmountButtons>
            <h5 className="cart-subtotal-price">{formatPrice(price*amount)}</h5>
            <button type="button" className="remove-btn">
            <FaTrash onClick={()=>removeItem(id)}></FaTrash></button>
        </div>
    </div>
  );
}

export default CartItem;

