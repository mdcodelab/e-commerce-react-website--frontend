const products_reducer = (state, action) => {
    if(action.type === "SIDEBAR_OPEN") {
        //console.log(action)
        return {...state, isSidebarOpen: true}
    }
    if(action.type === "SIDEBAR_CLOSE") {
        return {...state, isSidebarOpen: false}
    }
    if(action.type === "GET_PRODUCTS_BEGIN") {
        return {...state, products_loading: true}
    }
    if(action.type === "GET_PRODUCTS_SUCCESS") {
        let maxPrice = action.payload.map((product)=> (product.price))
        maxPrice=Math.max(...maxPrice)
        console.log(maxPrice);
        
        //for featured_products
        const featured_products=action.payload.filter(product => product.featured === true)
        return {...state, products_loading: false, products: action.payload, 
            featured_products, filters: {...state.filters, max_price: maxPrice, price: maxPrice}}
    }
    if(action.type === "GET_PRODUCTS_ERROR") {
        return {...state, products_loading: false, products_error: true}
    }
    if(action.type === "GET_SINGLE_PRODUCT_BEGIN") {
        return {...state, single_product_loading: true, single_product_error: false}
    }
    if(action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
        return {...state, single_product_loading: false, single_product: action.payload}
    }
    if(action.type === "GET_SINGLE_PRODUCT_ERROR") {
       return {...state, single_product_loading: false, single_product_error: true}
    }
    //view, sort, filter
    if(action.type === "GRID_VIEW") {
        return {...state, grid_view: true}
     }
     if(action.type === "LIST_VIEW") {
        return {...state, grid_view: false}
     }
     if(action.type === "UPDATE_SORT") {
        return {...state, sort: action.payload}
     }
     if(action.type==="SORT_PRODUCTS") {
        const {sort, products}=state;
        let tempProducts=[...products];
            if(sort === "price-lowest") {
                tempProducts=tempProducts.sort((a, b) => (a.price-b.price));
            }
            if(sort === "price-highest") {
                tempProducts=tempProducts.sort((a, b) => (b.price-a.price));
            }
            if(sort === "name-a") {
                tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
            }
            if(sort === "name-z") {
                tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
            }
        return {...state, products: tempProducts}
     }
     if(action.type==="UPDATE_FILTERS") {
        const {name, value}=action.payload;
        return {...state, filters: {...state.filters, [name]: value}}
     }
     if(action.type === "FILTER_PRODUCTS") {
        return {...state}
     }


throw new Error(`No matching ${action.type}`)
}

export default products_reducer