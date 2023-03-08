import React from 'react';
import {filterReducer} from "../reducers/filter_reducer";
import {useProductsContext} from "./products_context";


const FilterContext =React.createContext();

const initialState = {
    filtered_products: [],
    products: []
}


const FilterProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(filterReducer, initialState);

    const {products}=useProductsContext();
    React.useEffect(() => {
        dispatch({type: "LOAD_PRODUCTS", payload: products})
    }, [products])
   

    return <FilterContext.Provider value="hello">
     

        {children}
    </FilterContext.Provider>
}

export {FilterContext, FilterProvider}

export const useFilterContext = () => {
    return React.useContext(FilterContext);
}
