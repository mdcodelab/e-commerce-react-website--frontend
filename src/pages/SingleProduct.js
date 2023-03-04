import React from 'react';
import { useProductsContext } from '../context/products_context';
import {useParams} from "react-router-dom";
import {products_url} from "../utils/constants";
import {formatPrice} from "../utils/helpers";


function SingleProduct() {

  const {fetchSingleProduct, single_product_loading, single_product_error}=useProductsContext();
  const {id}=useParams();
  React.useEffect(() => {
    fetchSingleProduct(`${products_url}${id}`)
  }, [])




  return (
    <div>
      SingleProduct
    </div>
  );
}

export default SingleProduct;
