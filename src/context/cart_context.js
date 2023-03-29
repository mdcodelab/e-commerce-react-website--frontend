import React from "react";
import cart_reducer from "../reducers/cart_reducer";
const CartContext=React.createContext();

const initialState = {
cart: [],
total_items: 0,
total_amount: 0,
shipping_fee: 534
}

const CartProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(cart_reducer, initialState)

    //add to cart
    const addToCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
    }

    return <CartContext.Provider value={{...state, addToCart}}>
        {children}
    </CartContext.Provider>
}

export {CartContext, CartProvider}

export const useCartContext = () => {
    return React.useContext(CartContext);
}
