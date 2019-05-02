import React from 'react'

export default function CartListItem(props) {

const {id ,subtitle, sortPrice, image} = props.product;

const removeProductFromCart = (productId) => {
	return props.removeFromCart(productId);
}


const figureStyle = {
	background: `url("./${image}") center no-repeat`,
    backgroundSize: 'contain'
}
  return (
	<li>
		<div className="product">
			<figure style={figureStyle}>
			</figure>
			<div className="detail">
				<h3 className="product-name">{subtitle}</h3>
				<p className="product-price">1 x {sortPrice}£</p>
			</div>
			<button onClick={() => removeProductFromCart(id)} className="remove-product">
				<svg width="8px" height="8px" viewBox="0 0 13 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:1.41421}}><path d="M5.06,6.375l-4.788,-4.788c-0.025,-0.028 -0.051,-0.054 -0.075,-0.084c-0.161,-0.206 -0.23,-0.482 -0.182,-0.741c0.054,-0.295 0.259,-0.558 0.533,-0.681c0.102,-0.046 0.213,-0.073 0.325,-0.08c0.075,-0.004 0.15,0.005 0.224,0.014c0.097,0.024 0.123,0.025 0.214,0.066c0.069,0.031 0.133,0.07 0.192,0.116c0.03,0.024 0.056,0.05 0.084,0.075l4.788,4.788l4.789,-4.788c0.028,-0.025 0.054,-0.051 0.084,-0.075c0.118,-0.092 0.258,-0.155 0.406,-0.182c0.098,-0.018 0.124,-0.014 0.224,-0.014c0.037,0.005 0.074,0.009 0.111,0.014c0.036,0.009 0.073,0.015 0.109,0.027c0.286,0.089 0.522,0.323 0.611,0.611c0.09,0.286 0.029,0.614 -0.155,0.85c-0.024,0.03 -0.05,0.056 -0.075,0.084l-4.788,4.788l4.788,4.787c0.066,0.075 0.087,0.091 0.138,0.177c0.194,0.32 0.17,0.756 -0.063,1.055c-0.163,0.206 -0.415,0.339 -0.676,0.354c-0.225,0.014 -0.453,-0.057 -0.63,-0.196c-0.03,-0.023 -0.056,-0.05 -0.084,-0.074l-4.789,-4.788l-4.788,4.788c-0.028,0.024 -0.054,0.051 -0.084,0.074c-0.235,0.185 -0.562,0.246 -0.85,0.156c-0.25,-0.078 -0.464,-0.266 -0.572,-0.506c-0.122,-0.273 -0.103,-0.605 0.053,-0.863c0.051,-0.086 0.072,-0.102 0.138,-0.177l4.788,-4.787Z"/></svg>
			</button>
		</div>
	</li>
  )
}
