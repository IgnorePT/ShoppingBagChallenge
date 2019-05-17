const {productsConfig} = require("./constants");

const validateProductsQuery = (req, res, next) => {

	const {queryAllowed, queryConfiguration} = productsConfig.query;

	//Filter Noise Data
	Object.keys(req.query).forEach(key => { if(!queryAllowed.includes(key)) delete req.query(key) });

	if(req.query.hasOwnProperty("order")){
		req.order = queryConfiguration.order.convertTo(req.query.order);
	}

	if(req.query.hasOwnProperty("brand")){
		req.brand = queryConfiguration.brand.convertTo(req.query.brand);
	}

	if(req.query.hasOwnProperty("page")){
		req.page = queryConfiguration.page.convertTo(req.query.page) || 1;
	}


	next();
}

module.exports.validateProductsQuery = validateProductsQuery;