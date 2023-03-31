import React from 'react';
import {formatPrice} from "../utils/helpers";
import {Link} from "react-router-dom";
import { useCartContext } from '../context/cart_context';


function CartTotals() {
    const{total_amount, shipping_fee}=useCartContext();
  return (
        <div className="cartTotals-wrapper">
            <div className="cartTotals-container">
                <div className="cartTotals-content">
                    <h5 className="subtotal">Subtotal: <span>{formatPrice(total_amount)}</span></h5>
                    <p className="shipping-fee">Shipping fee: <span>{formatPrice(shipping_fee)}</span></p>
                    <hr className="hr"></hr>
                    <h4>Order total: <span>{formatPrice(total_amount+shipping_fee)}</span></h4>
                </div>
        <Link to="/checkout" className="btn proceed">Proceed to checkout</Link>
        </div>
    </div>
  );
}

export default CartTotals;
