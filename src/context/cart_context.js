import React from "react";
import cart_reducer from "../reducers/cart_reducer";
const CartContext=React.createContext();

const getLocalStorage = () => {
let cart = localStorage.getItem("cart");
if(cart) {
return JSON.parse(cart);
} else {
    return [];
}
}

const initialState = {
cart: getLocalStorage(),
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

    //remove items
    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    //toggle amount
    const toggleAmount = (id, value) => {
        console.log(id, value);
        dispatch({type: "TOGGLE_ITEM_AMOUNT", payload: {id, value}})
    }

    //clear cart
    const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
    }

    React.useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        dispatch({type: "COUNT_CART_TOTALS"})
    }, [state.cart])

    return <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>
        {children}
    </CartContext.Provider>
}

export {CartContext, CartProvider}

export const useCartContext = () => {
    return React.useContext(CartContext);
}

