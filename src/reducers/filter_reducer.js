// export const filterReducer = (state, action) => {
//     if(action.type === "LOAD_PRODUCTS") {
//         return {...state, products: [...action.payload], filtered_products: [...action.payload]}
//     }
//     if(action.type === "SHOW_LIST") {
//         return {...state, grid_view: false}
//     }
//     if(action.type === "SHOW_GRID") {
//         return {...state, grid_view: true}
//     }
//     if(action.type === "UPDATE_SORT") {
//         return {...state, sort: action.payload}
//     }
//     if(action.type === "") {
//         const {sort, filtered_products} = state;
//         if(sort === "price-lowest") {
//             console.log(sort);
//         }
//     }
//     throw new Error("No matching.")
// }

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return {...state, products: [...action.payload], filtered_products: [...action.payload]}
        case "SHOW_LIST":
            return {...state, grid_view: false}
        case "SHOW_GRID":
            return {...state, grid_view: true}
        case "UPDATE_SORT":
            return {...state, sort: action.payload}
        case "SORT_PRODUCTS":
            const {sort, filtered_products} = state;
            let filtered = [...filtered_products]; // Define filtered with a default value
            console.log(filtered_products);
            if(sort === "price-lowest") {
                filtered = filtered.sort((a, b) => a.price - b.price) // Assign sorted array to filtered
            }
            else if(sort === "price-highest") {
                filtered = filtered.sort((a, b) => b.price - a.price) // Assign sorted array to filtered
            }
            else if(sort === "name-a") {
                filtered = filtered.sort((a, b) => a.name.localeCompare(b.name)) // Assign sorted array to filtered
            }
            else if(sort === "name-z") {
                filtered = filtered.sort((a, b) => b.name.localeCompare(a.name)) // Assign sorted array to filtered
            }
            return {...state, filtered_products: filtered};
        default:
            throw new Error("No matching.");
    }
}


