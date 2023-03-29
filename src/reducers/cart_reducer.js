const cart_reducer = (state, action) => {
if(action.type === "ADD_TO_CART") {
    const {id, color, amount, product}=action.payload;  //get data from payload
    let tempItem=state.cart.find((item) => item.id === id + color)
    if(tempItem) {

    } else {
        const newItem={
            id: id+color,
            name: product.name,
            color, amount,
            image: product.images[0].url,
            price: product.price,
            max: product.stock
        };
        return {...state, cart: [...state.cart, newItem]}
    }

}
throw new Error(`No matching ${action.type} - action type`)
}

export default cart_reducer;