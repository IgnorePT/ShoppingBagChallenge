import React, { Component } from 'react'

export default class ListItem extends Component {
	

getClass = () => {
	return (this.props.className) ? this.props.className : "";
}


  render() {
	return (
	<li className="product-list__item">
		{this.props.children}
	</li>
	)
  }
}
