import React from 'react'

import HeaderBag from "./HeaderBag";

export default function header(props) {
  return (
	<header className="header container">
		<h1 className="page-title">PRODUCT LIST</h1>
		<HeaderBag removeFromCart={props.removeFromCart} cart={props.cart} wishlist={props.wishlist} />
	</header>
	)
}
