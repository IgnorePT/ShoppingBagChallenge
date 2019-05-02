import React from 'react'

import CartListItem from "./CartListItem";

export default function CartModal(props) {
  return (
	<div className={props.toogleCartList ? "dropdown-content showRender" :  "dropdown-content"}>
              <ul>
				  {props.cart.products.map(product => <CartListItem key={`cart_${product.id}`} removeFromCart={props.removeFromCart} product={product} /> )}
                  
                          <li>
                            <div className="subtotal">
                              <span className="text">CART SUBTOTAL:</span>
                              <span className="price">{props.cart.subtotal}£</span>
                            </div>
                        </li>
                </ul>
              </div>
  )
}
