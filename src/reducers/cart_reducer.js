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
if(action.type === "TOGGLE_ITEM_AMOUNT") {
    const{id, value}=action.payload;
    let tempCart=state.cart.map((item) => {
        if(item.id === id) {
                if(value === "inc"){
                    let newAmount=item.amount+1
                        if(newAmount > item.max){
                            newAmount = item.max;
                        }
                return {...item, amount: newAmount}
                }
                if(value === "dec") {
                    let newAmount=item.amount-1;
                        if(newAmount < 1) {
                            newAmount=1
                        }
                    return {...item, amount: newAmount}
                }
        } else {
            return item;
        }
    })
    return {...state, cart: tempCart}
}
if(action.type === "COUNT_CART_TOTALS") {
const {total_items, total_amount}=state.cart.reduce((total, cartItem) => {
    const{amount, price}=cartItem;
    total.total_items +=amount;
    total.total_amount+=price*amount;
    return total
}, {total_items: 0, total_amount: 0, })
return {...state, total_items, total_amount}
}

throw new Error(`No matching ${action.type} - action type`)
}

export default cart_reducer;