import React from 'react';
import {filterReducer} from "../reducers/filter_reducer";
import {useProductsContext} from "./products_context";


const FilterContext =React.createContext();

const initialState = {
    filtered_products: [],
    products: [],
    grid_view: true
}


const FilterProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(filterReducer, initialState);

    const {products}=useProductsContext();
    React.useEffect(() => {
        dispatch({type: "LOAD_PRODUCTS", payload: products})
    }, [products])

    const showList = () => {
        dispatch({type: "SHOW_LIST"})
    }

    const showGrid = () => {
        dispatch({type: "SHOW_GRID"})
    }
   

    return <FilterContext.Provider value={{
        ...state,
        showList,
        showGrid

    }}>
     

        {children}
    </FilterContext.Provider>
}

export {FilterContext, FilterProvider}

export const useFilterContext = () => {
    return React.useContext(FilterContext);
}
