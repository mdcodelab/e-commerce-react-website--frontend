import React from 'react';
import {filterReducer} from "../reducers/filter_reducer";
import {useProductsContext} from "./products_context";


const FilterContext =React.createContext();

const initialState = {
    filtered_products: [],
    products: [],
    grid_view: true,
    sort: "price-lowest"
}

//get products
const FilterProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(filterReducer, initialState);

    const {products}=useProductsContext();
    React.useEffect(() => {
        dispatch({type: "LOAD_PRODUCTS", payload: products})
    }, [products])

    //show list or grid
    const showList = () => {
        dispatch({type: "SHOW_LIST"})
    }

    const showGrid = () => {
        dispatch({type: "SHOW_GRID"})
    }

    //change the option on input.select
    const updateSort = (e) => {
        dispatch({type: "UPDATE_SORT", payload: e.target.value})
        let value =e.target.value;
        console.log(value);
    }
   

    return <FilterContext.Provider value={{
        ...state,
        showList,
        showGrid,
        updateSort

    }}>
     

        {children}
    </FilterContext.Provider>
}

export {FilterContext, FilterProvider}

export const useFilterContext = () => {
    return React.useContext(FilterContext);
}
