import React from 'react'
import {Link} from "react-router-dom"

import ProductPriceDiscounted from './../../product/ProducPriceDiscounted'
import ProductPrice from './../../product/ProductPrice'
import Button from './../../elements/Button'


/*Testing Style Configuration*/
const style = {
	h3: {
		title: {
			textAlign: "center",
			fontSize: "1.2rem",
			textTransform: "uppercase"
		}
	},
	a:{
		display: "block",
		textAlign: "center",
		margin: "20px 0"

	},
	article:{
		display: "flex",
    maxWidth: "600px",
		margin: "0 auto",
		padding: "10px"
	}
}

export default function Wishlist(props) {
	const products = props.wishlist;

	//Todo: Create Util To reuse this code
	const btnConfig = {
		className: `product__add-to-cart button button--primary ${props.onCart ? "button--in-cart" : ""}`,
		btnText: props.onCart ? "In Cart" : "Add to Cart",
		action: () => {
			return  props.onCart ? props.sendProductToCart() : "";
		}
	}

  return (
	<div>
		<h3 style={style.h3.title}>
		{(products.length > 0) ? "Fantastic here are the products on your wishlist!" : "Your wishlist is empty!"}
		</h3>
		{products.map(product =>

			<article style={style.article} key={`${product.id}`}>
			<div>
				<img alt={product.subtitl} src={product.image} />
			</div>
				
			<div className="">
				<h1 className="product__title" itemProp="brand">{product.brandName}</h1>
				<p className="product__subtitle" itemProp="description">{product.subtitle}</p>
				<div className="product__price" itemScope itemType="http://schema.org/Offer">
						{
							(product.priceDiscounted) ? <ProductPriceDiscounted price={product.price} priceDiscounted={product.priceDiscounted} /> : <ProductPrice price={product.price} />
						}
				</div>
				<Button action={props.sendProductToCart} className={`${btnConfig.className}`}> 
					{btnConfig.btnText}
				</Button>
			</div>
			

			
			</article>
		)}
		<Link style={style.a} to="/">
			 Go back
		</Link> 
	</div>
  )
}
