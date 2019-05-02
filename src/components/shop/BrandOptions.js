import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class BrandOptions extends Component {

  render() {
	return this.props.brands.map((brand) => (
			<option key={brand.id} value={brand.id}>{brand.name}</option>
		))
		
  }
}

// PropTypes
BrandOptions.propTypes = {
	brands: PropTypes.array.isRequired
}
