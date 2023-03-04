import React from "react";
import reducer from "../reducers/reducer";
import axios from "axios";
import {products_url} from "../utils/constants";


const ProductsContext=React.createContext();

const initialState={
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: []
};

const ProductsProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(reducer, initialState);

    //sidebar
    const openSidebar = () => {
        dispatch({type: "SIDEBAR_OPEN"})
    }

    const closeSidebar = () => {
        dispatch({type: "SIDEBAR_CLOSE"})
    }

    //loading
    
    //get all products
    const fetchProducts = async () => {
        dispatch({type: "GET_PRODUCTS_BEGIN"});
        try {
            const response = await axios.get(products_url);
            const products = await response.data;
            console.log(products);
            console.log(initialState.featured_products);
            console.log(initialState.products);
            dispatch({type: "GET_PRODUCTS_SUCCESS", payload: products})
        } catch (error) {
            dispatch({type: "GET_PRODUCTS_ERROR"})
        }
    }

    React.useEffect(() => {
        fetchProducts();
    }, [])


    return <ProductsContext.Provider value={{
        ...state, 
        openSidebar, 
        closeSidebar,
        products_loading: state.products_loading,
        products: state.products,
        products_error: state.products_error,
        featured_products: state.featured_products
        }}>
    {children}
    </ProductsContext.Provider>
}

export {ProductsContext, ProductsProvider}

export const useProductsContext=() => {
    return React.useContext(ProductsContext);
}