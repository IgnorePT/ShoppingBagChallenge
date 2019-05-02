import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ProductFigure from "./ProductFigure";
import ProductDetail from "./ProductDetail";

export default class ProductArticle extends Component {
	

	sendProductToWhishlist = () => {
		this.props.addToWishlist(this.props.product);
	}

	sendProductToCart= () => {
		this.props.addToCart(this.props.product);
	}

  render() {

		const product = this.props.product,
 				{ image } = this.props.product;
	
	return (
		<article className="product" itemScope itemType="http://schema.org/Product">
			<ProductFigure 
				onWhishlist={this.props.onWhishlist}
				sendProductToWhishlist={this.sendProductToWhishlist}
				image={image} 
			/>
			<ProductDetail 
				sendProductToCart={this.sendProductToCart} 
				product={product} 
				onCart={this.props.onCart}
			/>
		</article>
	)
  }
}

// PropTypes
ProductArticle.propTypes = {
	product: PropTypes.object.isRequired,
	addToWishlist: PropTypes.func.isRequired,
	onWhishlist: PropTypes.bool,
	onCart: PropTypes.bool

}
