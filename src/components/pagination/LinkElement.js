import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class LinkElement extends Component {

selectPage = (e) => {
	e.preventDefault();
	const page = this.props.page;
	this.props.onChangePage(page)
}

  render() {
	return (
		<a style={this.props.style} onClick={this.selectPage} href="/" className="pagination__link">
			{this.props.children}
		</a>
	)
  }
}


LinkElement.propTypes = {
	page: PropTypes.number.isRequired,
	style:  PropTypes.object,
	onChangePage: PropTypes.func.isRequired
}
