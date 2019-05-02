const fs = require("fs");
const path = require("path");

/**
 * Funtion to read info from file and 
 * @param {String} filepath Path of the file to read (ex: "./data/test.json")
 * @param {Object} options Optional parameters
 */
const readFile = (filepath, options) =>{

	const encoding = (options.encoding) ? options.encoding : "utf8";
	const data = fs.readFileSync(filepath, encoding);
	let response;

	(options.responseType === "text") ? response = JSON.stringify(data) :
	(options.responseType === "JSON") ? response = JSON.parse(data) :
	response = data;
	
	return response;
}

module.exports.readFile = readFile;


/**
 * Funtion to read info from file and 
 * @param {String} filepath Path of the file to read (ex: "./data/test.json")
 * @param {Object} options Optional parameters
 */
const writeFile = (filepath, data, options) =>{

	const encoding = (options.encoding) ? options.encoding : "utf8";

	return fs.writeFile(filepath, data, encoding, (err) => {
		if(err) throw err

		return "Success"
	});
}

module.exports.writeFile = writeFile;


/**
 * Paginate Array
 * @param {Object} config Object containing the configuration for the pagination
 * @returns {Object}
 * Config Objs Ex:
 * {
 * 	data: [Array] to be paginated,
 * 	elementsPerPage: elements to display on each page,
 * 	page: Corresponding page to display elements
 * }
 */
const paginateArray = (config) => {

	let info = config.data;

	let pageNumber = config.page || 1,
	elementsPerPage = config.elementsPerPage || 6,
  	offset = (pageNumber - 1) * elementsPerPage,
 
  	paginatedElements = info.slice(offset).slice(0, elementsPerPage),
	totalPages = Math.ceil(info.length / elementsPerPage);
	  
	return {
		pageNumber,
		elementsPerPage,
		prePage: pageNumber - 1 ? pageNumber - 1 : null,
		nextPage: (totalPages > pageNumber) ? pageNumber + 1 : null,
		total: info.length,
		totalPages,
		data: paginatedElements
	};
}

module.exports.paginateArray = paginateArray;

/**
 * 
 * @param {*} products 
 * @param {*} order 
 */
const sortProducts = (products, order) => {

	if(order === 0) {
		return products;
	}

	return products.sort((a, b) => {

		(a.hasOwnProperty("priceDiscounted")) ? a.sortPrice = a.priceDiscounted : a.sortPrice = a.price;
		(b.hasOwnProperty("priceDiscounted")) ? b.sortPrice = b.priceDiscounted : b.sortPrice = b.price; 

		if(order === 1){
			return a.sortPrice-b.sortPrice 
		} else {
			return b.sortPrice-a.sortPrice;
		}
	});	
}
module.exports.sortProducts = sortProducts;