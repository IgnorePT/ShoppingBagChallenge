import React, { Component } from 'react'

import CartModal from "./../cart/CartModal";

export default class HeaderBagItem extends Component {

state = {
  toogleCartList: false,
}

toogleCart = () => {
  return this.setState({
    toogleCartList: !this.state.toogleCartList
  })
}
  
  render() {
    return (
      <div className="header-bag__item header-bag__count">
        <div className="header-bag__price">
          £{this.props.cart.subtotal}
        </div>
        <div onClick={this.toogleCart} className="dropdown">
          <svg className="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Bag Icon</title>
            <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fillRule="evenodd"></path>
          </svg>
          <CartModal removeFromCart={this.props.removeFromCart} toogleCartList={this.state.toogleCartList} cart={this.props.cart} /> 
          </div>
      <span className="bag__item-counter">{this.props.cart.products.length}</span>
  
    </div>
    )
  }
}

