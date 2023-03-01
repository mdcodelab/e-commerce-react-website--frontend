import React from "react";
import reducer from "../reducers/reducer"

const ProductsContext=React.createContext();

const initialState={
    isSidebarOpen: false
};

const ProductsProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({type: "SIDEBAR_OPEN"})
    }

    const closeSidebar = () => {
        dispatch({type: "SIDEBAR_CLOSE"})
    }

    React.useEffect(() => {
        openSidebar() 
    }, [])

    return <ProductsContext.Provider value={{...state, openSidebar, closeSidebar}}>
    {children}
    </ProductsContext.Provider>
}

export {ProductsContext, ProductsProvider}

export const useProductsContext=() => {
    return React.useContext(ProductsContext);
}