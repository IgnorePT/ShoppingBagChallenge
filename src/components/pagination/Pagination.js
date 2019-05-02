import React, { Component } from 'react'
import PropTypes from 'prop-types';

import PaginationList from "./PaginationList";

export default class Pagination extends Component {
  render() {

	/**
	 * Conditional Render Funtion to show pagination Element if there is more than one page of products
	 */
	const renderPaginationElement = () => {
		const pagination = this.props.pagination;

		if(pagination.pageNumber === null || pagination.totalPages <= 1){
			return ""
		}

		return (
			<nav className="pagination">
				<PaginationList pagination={pagination} onChangePage={this.props.onChangePage} />
			</nav>
		)
	}


	return renderPaginationElement();
  }
}

// PropTypes
Pagination.propTypes = {
	pagination: PropTypes.object.isRequired,
	onChangePage: PropTypes.func.isRequired
}
