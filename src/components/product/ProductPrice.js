import React from 'react'

export default function ProductPrice(props) {
	const {price} = props;
  return (
	<span className="product__price" itemProp="price">{`£ ${price}`}</span>
  )
}
