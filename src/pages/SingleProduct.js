import React from 'react';
import { useProductsContext } from '../context/products_context';
import {single_product_url} from "../utils/constants";
import {useParams} from "react-router-dom";
import {iseHistory} from "react-router";
import {formatPrice} from "../utils/helpers";
import Loading from "../components/Loading";
import ErrorProduct from "./ErrorProduct";


function SingleProduct() {

  const {fetchSingleProduct, single_product_loading, single_product_error}=useProductsContext();
  const {id}=useParams();
  console.log(id);
  const history=React.useHistory();

  //get product
  React.useEffect(() => {
    fetchSingleProduct(`${single_product_url}${2}}`)
  }, [])

  //navigate to Homepage if error
  React.useEffect(() => {
    if(single_product_error) {
      setTimeout(() => {
      history.push("/")
      }, 3000)
    }
  }, [single_product_error])


  if (single_product_loading) {
    return <Loading></Loading>
  }

  // if(single_product_error) {
  //   return <ErrorProduct></ErrorProduct>
  // }




  return (
    <div>
      SingleProduct
    </div>
  );
}

export default SingleProduct;
