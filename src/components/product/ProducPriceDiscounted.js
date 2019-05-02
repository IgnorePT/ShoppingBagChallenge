import React from 'react'

export default function ProducPriceDiscounted(props) {
	const {price, priceDiscounted} = props;
  return (
	<>
	<span className="product__price--strike">{`£ ${price}`}</span>
	<span className="product__price--discounted" itemProp="price">{`£ ${priceDiscounted}`}</span>
	</>
  )
}
