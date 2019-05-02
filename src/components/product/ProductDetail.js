import React from 'react'

import ProductPrice from "./ProductPrice";
import ProductPriceDiscounted from "./ProducPriceDiscounted";
import Button from "./../elements/Button";

/**
 * Product Detail Functional Component
 * @param {Object} props 
 * Note: Should improve code refractoring | Improve Price discont logic
 */
 /* Trying to create the component as functional instead of class component */
export default function ProductDetail(props) {

const { price, priceDiscounted, subtitle, brandName } = props.product;

/* Trying Configurarion objects for Components */
const btnConfig = {
	className: `product__add-to-cart button button--primary ${props.onCart ? "button--in-cart" : ""}`,
	btnText: props.onCart ? "In Cart" : "Add to Cart",
	action: () => {
		return  props.onCart ? props.sendProductToCart() : "";
	}
}

  return (
	<div className="product__details">
		<h1 className="product__title" itemProp="brand">{brandName}</h1>
		<p className="product__subtitle" itemProp="description">{subtitle}</p>
		<div className="product__price" itemScope itemType="http://schema.org/Offer">
			{
				(priceDiscounted) ? <ProductPriceDiscounted price={price} priceDiscounted={priceDiscounted} /> : <ProductPrice price={price} />
			}
		</div>
		<Button action={props.sendProductToCart} className={`${btnConfig.className}`}> 
			{btnConfig.btnText}
		</Button>
	</div>
  )
}
