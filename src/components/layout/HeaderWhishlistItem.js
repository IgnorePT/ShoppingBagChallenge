import React from 'react'
import { Link } from "react-router-dom";

export default function HeaderWhishlistItem(props) {
  return (
	<div className="header-bag__item header-bag__wishlist-count">
	<Link to="/wishlist" >
		<svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<title>Wishlist Icon</title>
			<polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
		</svg>
		</Link>
		<span className="bag__item-counter">{props.wishlist.length}</span>
	</div>
  )
}
