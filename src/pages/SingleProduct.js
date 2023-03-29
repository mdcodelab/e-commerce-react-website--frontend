import React from 'react';
import { useProductsContext } from '../context/products_context';
import {single_product_url} from "../utils/constants";
import {useParams, useNavigate, Link} from "react-router-dom";
import {formatPrice} from "../utils/helpers";
import Loading from "../components/Loading";
import ErrorProduct from "./ErrorProduct";
import PageHero from "../components/PageHero";
//import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import ProductImages from '../components/ProductImages';


function SingleProduct() {
  const {fetchSingleProduct, single_product, single_product_loading, single_product_error}=useProductsContext();
  const {id}=useParams();
  const navigate=useNavigate();

  React.useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`)
  }, []);

  if (single_product_loading) {
    return <Loading />;
  }

  if (single_product_error) {
    return <ErrorProduct />;
  }

  if (!single_product) {
    return <h2>No product to display</h2>;
  }

  const {name, price, description, stock, reviews, stars, id:sku, company, images, colors}=single_product;

  return (
    <div className="single-product-container section">
      <PageHero title={name}></PageHero>
      <div className="single-product section-center">
        <Link to="/products" className="btn">Back to Products</Link>
        <div className="single-product-center">
          <section className="single-product-images">
            <ProductImages images={images}></ProductImages>
          </section>
          <section className="single-product-content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}></Stars>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span style={{fontWeight: "bold"}}>Available: </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span style={{fontWeight: "bold"}}>SKU: </span>{sku}
            </p>
            <p className="info">
              <span style={{fontWeight: "bold"}}>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={single_product}></AddToCart>}
          </section>
        </div>
      </div>
    </div>
  );
}


export default SingleProduct;
