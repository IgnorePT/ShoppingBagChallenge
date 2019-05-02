import React, { Component } from 'react'

export default class PriceSort extends Component {

	onPriceSelectChange = (event) =>{
		this.props.sortByPrice(event.target.value);
	}

  render() {
	return (
		<>
		<label className="product-controls__label" htmlFor="Sort">Sort</label>
			<select onChange={this.onPriceSelectChange} className="product-controls__select" id="Sort">
					<option value="1">Price ascending</option>
					<option value="2">Price descending</option>
			</select>
			</>
	)
  }
}
