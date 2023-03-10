export const filterReducer = (state, action) => {
    if(action.type === "LOAD_PRODUCTS") {
        return {...state, products: [...action.payload], filtered_products: [...action.payload]}
    }
    if(action.type === "SHOW_LIST") {
        return {...state, grid_view: false}
    }
    if(action.type === "SHOW_GRID") {
        return {...state, grid_view: true}
    }
    throw new Error("No matching.")
}