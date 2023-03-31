const cart_reducer = (state, action) => {
if(action.type === "ADD_TO_CART") {
    const {id, color, amount, product}=action.payload;  //get data from payload
    let tempItem=state.cart.find((item) => item.id === id + color)    //combine id with color for adding products with same id but of different color
    if(tempItem) {
        let tempCart=state.cart.map((cartItem) => {
            if(cartItem.id ===id+color) {      //add mode products with the same id
                let newAmount = cartItem+amount;
                if(newAmount>cartItem.max) {newAmount=cartItem.max}
                return {...cartItem, amount: newAmount}
            } else {
                return cartItem;
            }
        })
        return {...state, cart: tempCart}

    } else {  
        const newItem={
            id: id+color,  //id from the cart
            name: product.name,
            color, amount,
            image: product.images[0].url,
            price: product.price,
            max: product.stock
        };
        return {...state, cart: [...state.cart, newItem]}
    }
}
if(action.type === "REMOVE_ITEM") {
    let tempCart=state.cart;
    tempCart=tempCart.filter((item) => {
        return item.id !== action.payload
    })
    return {...state, cart: tempCart}
}
if(action.type === "CLEAR_CART") {
    return {...state, cart: []}
}
throw new Error(`No matching ${action.type} - action type`)
}

export default cart_reducer;