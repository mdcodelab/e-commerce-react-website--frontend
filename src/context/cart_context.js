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

    return <CartContext.Provider value={{...state}}>
        {children}
    </CartContext.Provider>
}

export {CartContext, CartProvider}

export const useCartContext = () => {
    return React.useContext(CartContext);
}

