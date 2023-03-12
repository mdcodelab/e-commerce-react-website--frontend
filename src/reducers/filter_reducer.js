export const filterReducer = ((state, action) => {
    if (action.type === "LOAD_PRODUCTS") {
      return {...state, products: [...action.payload], filtered_products: [action.payload]};
    }
  
    if (action.type === "SHOW_GRID") {
      return {...state, show_grid: true};
    }
  
    if (action.type === "SHOW_LIST") {
      return {...state, show_grid: false};
    }
  
    throw new Error("No matching action type found.");
  });
  