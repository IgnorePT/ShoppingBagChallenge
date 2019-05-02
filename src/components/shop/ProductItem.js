import React from 'react'

import ListItem from "./../elements/ListItem";
import ProductArticle from "./../product/ProductArticle";

export default function ProductItem(props) {

  return (
	<ListItem className="product-list__item">
		<ProductArticle addToCart={props.addToCart} onCart={props.onCart} onWhishlist={props.onWhishlist} addToWishlist={props.addToWishlist} product={props.product} />
	</ListItem>
  )
}

