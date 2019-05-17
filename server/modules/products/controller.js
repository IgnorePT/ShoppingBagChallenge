const utils = require("./../../helpers/utils");

const getProducts = async (req,res) => {

	const order = req.order;

	const requestConfiguration = {
		responseType: "JSON"
	}

	let products = utils.readFile("./server/data/products.json", requestConfiguration);

	products = utils.sortProducts(products, order);

	if(req.brand){
		products = products.filter(product => product.brandId === req.brand);
	}

	let paginateConfig = {
		data: products
	}

	paginateConfig = {...paginateConfig, page: req.page}


	const response = utils.paginateArray(paginateConfig);

	return res.status(200).send(response);
}

module.exports.getProducts = getProducts;