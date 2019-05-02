import React, { Component } from 'react'
import PropTypes from 'prop-types';

import BrandSelect from "./BrandSelect";
import PriceSort from "./PriceSort";

export default class ProductFilter extends Component {
  render() {
	return (
		<div className="product-controls">
			<BrandSelect onBrandSelect={this.props.onBrandSelect} brands={this.props.brands} />
			<PriceSort sortByPrice={this.props.sortByPrice} />
</div>
	)
  }
}


// PropTypes
ProductFilter.propTypes = {
	brands: PropTypes.array.isRequired,
	onBrandSelect: PropTypes.func.isRequired,
	sortByPrice: PropTypes.func.isRequired
}
