import React, { Component } from 'react'
import PropTypes from 'prop-types';

import PaginationItem from "./PaginationItem";
import ArrowElement from "./ArrowElement";
import LinkElement from "./LinkElement";

import uuidv4 from "uuid/v4"


export default class PaginationList extends Component {

	/**
	 * Funtion to Return PaginationItem Element with Children
	 * @param {*} content Content to be display on List Element
	 * @param {Number} page Page Number to send to link element
	 */
	getPaginationItem = (content, page) => {

		let { pageNumber } = this.props.pagination;

		let style = (page === pageNumber) ? { fontWeight: "bold"} : {};
		const key = uuidv4();

		return <PaginationItem key={key}>
				<LinkElement style={style} onChangePage={this.props.onChangePage}  page={page}>
					{ content }
				</LinkElement>
			</PaginationItem>
	}

	/**
	 * Conditional Render for Pagination
	 * Todo: Clean up more code and analyse better options
	 */
	renderPagination = () => {
		let htmlForPage = [];
		const {prePage, pageNumber, nextPage, totalPages} = this.props.pagination;
		
		if(prePage != null && pageNumber > 1){
			htmlForPage = [...htmlForPage , this.getPaginationItem(<ArrowElement side="left" />,prePage)]
		}

		if(pageNumber < 4){
			for (let i = 1; i <= 4; i++){
			let content = (i === 4 && i + 1 < totalPages) ? "..." : i;
				htmlForPage = [...htmlForPage , this.getPaginationItem(content,i)]
			}
		}

		if(pageNumber >= 4){

			htmlForPage = [...htmlForPage , this.getPaginationItem("1",1)];

			htmlForPage = [...htmlForPage , 
				this.getPaginationItem("...", prePage - 1),
				this.getPaginationItem(prePage, prePage),
				this.getPaginationItem(pageNumber, pageNumber),
				];

			if(nextPage  < totalPages ){
				htmlForPage = [...htmlForPage , this.getPaginationItem(nextPage, nextPage)];
			}

			if(nextPage + 1 < totalPages && nextPage !== null ){
				htmlForPage = [...htmlForPage , this.getPaginationItem("...", nextPage + 1)];
			}
		}

		if(pageNumber <= totalPages && nextPage !== null){
			htmlForPage = [...htmlForPage , this.getPaginationItem(totalPages, totalPages)]
		}

		if(nextPage != null && pageNumber < totalPages){
			htmlForPage = [...htmlForPage , this.getPaginationItem(<ArrowElement side="right" />, nextPage)]
		}

		return htmlForPage;
	}

  render() {
	return (
		<ul className="pagination__list">
			{this.renderPagination()}
		</ul>
	)
  }
}


// PropTypes
PaginationList.propTypes = {
	pagination: PropTypes.object.isRequired,
	onChangePage: PropTypes.func.isRequired
}