import React, { Component } from 'react'
import PropTypes from 'prop-types';

import BrandOptions from "./BrandOptions";

export default class BrandSelect extends Component {

	state = {
		brandId: null
	}

	onSelectChange = (event) =>{
		this.props.onBrandSelect(event.target.value);
	}

	render() {
		return (
			<>
			<label className="product-controls__label" htmlFor="Brands-Filter">Brands</label>
			<select onChange={this.onSelectChange} className="product-controls__select" id="Brands-Filter">
				<option value="">All</option>
				<BrandOptions brands={this.props.brands} />
			</select>
			</>
		)
	}
}


// PropTypes
BrandSelect.propTypes = {
	brands: PropTypes.array.isRequired
}
