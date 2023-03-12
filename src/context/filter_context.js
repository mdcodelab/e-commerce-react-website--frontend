import React from "react";
import {filterReducer} from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

const FilterContext=React.createContext();

const initialState = {
filtered_products: [],
products: [],
grid_view: false
}

const FilterProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(filterReducer, initialState);
    const {products}=useProductsContext();
    //get products
    
    React.useEffect(() => {
        dispatch({ type: "LOAD_PRODUCTS", payload: products });
      }, [products]);

      
    const showGrid = () => {
        dispatch({type: "SHOW_GRID"})
    }

    const showList = () => {
        dispatch({type: "SHOW_LIST"})
    }


    return <FilterContext.Provider value={{
        ...state,
        showGrid,
        showList
    }}>
        {children}
    </FilterContext.Provider>
}

export {FilterContext, FilterProvider};

export const useFilterContext = () => {
    return React.useContext(FilterContext);
}
