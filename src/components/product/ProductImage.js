import React from 'react'

export default function ProductImage(props) {
  return (
		<img className="product__image" src={props.image} alt="Product" itemProp="image"/>
  )
}
