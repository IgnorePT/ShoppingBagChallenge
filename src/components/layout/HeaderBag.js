import React from 'react';

import HeaderBagItem from "./HeaderBagItem";
import HeaderWhishlistItem from "./HeaderWhishlistItem";


export default function HeaderBag(props) {
  return (
	<aside className="header-bag">
	<HeaderBagItem removeFromCart={props.removeFromCart} cart={props.cart} />
	<HeaderWhishlistItem wishlist={props.wishlist} />
</aside>
  )
}
