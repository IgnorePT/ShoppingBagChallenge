import React, { Component } from 'react'

export default class PaginationItem extends Component {
  render() {
	return (
		<li className="pagination__item"> 
		{this.props.children}
		</li>
	)
  }
}
