import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { existOnWhishlist, existOnCart} from "./../../helpers/productHelpers"

import ProductItem from "./ProductItem";


export default class ProductList extends Component {

  render() {
	const products = this.props.products || [];
	const brands = this.props.brands || [];

	return (
		<ul className="product-list">
			{
				products.map((product) => {
					
					const brandName = brands.find(brand => brand.id === product.brandId).name;
					const whishlist = (existOnWhishlist(this.props.whishlist, product.id)) ? true : false;
					const cart = (existOnCart(this.props.cart.products, product.id)) ? true : false;

				
					return <ProductItem removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart} onCart={cart} onWhishlist={whishlist} addToWishlist={this.props.addToWishlist} key={product.id} product={{brandName, ...product}} />
				})
			} 
	</ul>
	)
  }
}

// PropTypes
ProductList.propTypes = {
	products: PropTypes.array,
	brands: PropTypes.array,
	whishlist: PropTypes.array,
	cart: PropTypes.object,
	addToWishlist: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired
}
