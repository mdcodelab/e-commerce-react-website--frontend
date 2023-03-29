const product_reducer = (state, action) => {
  if(action.type==="SIDEBAR_OPEN") {
    return {...state, isSidebarOpen: true}
  }
  if(action.type==="SIDEBAR_CLOSE") {
    return {...state, isSidebarOpen: false}
  }
  if(action.type === "GET_PRODUCTS_BEGIN") {
    return {...state, products_loading: true}
  }
  if(action.type === "GET_PRODUCTS_SUCCESS") {
    let featured_products = action.payload.filter(
      (product) => product.featured === true
    )

    return {state, products_loading: false, products: action.payload, featured_products}
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return { ...state, products_loading: false, products_error: true }
  }
  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    }
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload
    }
  }
  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}
export default product_reducer;