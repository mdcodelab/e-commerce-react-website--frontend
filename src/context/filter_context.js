import React from "react";
import {filterReducer} from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

const FilterContext=React.createContext();

const initialState = {
    filtered_products: [],  //array always changing
    products: [],  //default value
    grid_view: true,
    sort: "price-lowest",
    //filters
    filters: {
        text: "",
        company: "all",
        category: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false
    }

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

    const updateSort = (e) => {
        const value = e.target.value
        console.log(e.target.value);
        dispatch({ type: "UPDATE_SORT", payload: value })
      }

    React.useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({type: "SORT_PRODUCTS"})
    }, [products, state.sort, state.filters])


    const updateFilters =(e) => {
        let name=e.target.name;
        let value=e.target.value;
        console.log("update filters")
        console.log(name);
        if(name === "category") {
            value=e.target.textContent;
        }
        if(name === "color") {
            if(name === "all") {
                value=e.target.name;
            }
            value=e.target.dataset.color;
        }
        if(name === "price"){
            value=Number(value);
        }
        if(name === "shipping") {
            value=e.target.checked;
        }
        
        dispatch({ type: "UPDATE_FILTERS", payload: { name, value}});

    }


    const clearFilters =() => {
        dispatch({type: "CLEAR_FILTERS"})
    }

    return <FilterContext.Provider value={{
        ...state,
        showGrid,
        showList,
        updateSort,
        updateFilters,
        clearFilters
    }}>
        {children}
    </FilterContext.Provider>
}

export {FilterContext, FilterProvider};

export const useFilterContext = () => {
    return React.useContext(FilterContext);
}
