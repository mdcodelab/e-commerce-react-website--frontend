export const filterReducer = (state, action) => {
    if(action.type === "LOAD_PRODUCTS") {
        return {...state, products: [...action.payload], filtered_products: [...action.payload]}
    }
    throw new Error("No matching.")
}