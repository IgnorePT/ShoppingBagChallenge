const express = require("express");
const router = express.Router();

const utils = require("./../helpers/utils");


/**
 * Routes
 */
router.get("/", (req, res) => {
	res.status(200).send("The webserver is ON");
});

/**
 * Route to Get Products
 */
router.get("/products", async (req,res) => {

	const order = Number(req.query.order) || 0;
	const requestConfiguration = {
		responseType: "JSON"
	}

	let products = utils.readFile("./server/data/products.json", requestConfiguration);

	products = utils.sortProducts(products, order);

	if(req.query.hasOwnProperty("brand")){
		products = products.filter(product => product.brandId === Number(req.query.brand));
	}

	let paginateConfig = {
		data: products
	}

	if(req.query.hasOwnProperty("page")){
		paginateConfig = {...paginateConfig, page: Number(req.query.page)}
	}

	const response = utils.paginateArray(paginateConfig);

	return res.status(200).send(response);
});

/**
 * Route to Get Brands
 */
router.get("/brands", (req, res) => {

	const requestConfiguration = {
		responseType: "JSON"
	}
	const brands = utils.readFile("./server/data/brands.json", requestConfiguration);

	return res.status(200).send(brands);

});

/**
 * Route to Get The Shopping Cart
 */
router.get("/cart", async (req, res) => {

	const requestConfiguration = {
		responseType: "JSON"
	}
	let subtotal = 0;

	const shoppingCart = await utils.readFile("./server/data/bag.json", requestConfiguration);

	 shoppingCart.forEach(product => {
		if(product.hasOwnProperty("priceDiscounted")) {
			subtotal += Number(product.priceDiscounted);
			
		} else {
			subtotal += Number(product.price);
		}
			 
	});

	return res.status(200).send({products:shoppingCart,subtotal: subtotal});
});

/**
 * Route to Add items to the Cart
 */
router.post("/cart", async (req, res) => {
	const requestConfiguration = {
		responseType: "JSON"
	}

	const product = req.body.product;

	let shoppingCart = utils.readFile("./server/data/bag.json", requestConfiguration);
	
	shoppingCart = [...shoppingCart, product];

	const response = await utils.writeFile("./server/data/bag.json", JSON.stringify(shoppingCart), {})

	return res.status(200).send(response);

});

/**
 * Route to Remove items to the Cart
 */
router.delete("/cart", async (req, res) => {

	const requestConfiguration = {
		responseType: "JSON"
	}

	const productId = req.body.productId;

	let shoppingCart = utils.readFile("./server/data/bag.json", requestConfiguration);
	const newShopingCart = shoppingCart.filter(product => Number(product.id) !== Number(productId));
	
	const response = await utils.writeFile("./server/data/bag.json", JSON.stringify(newShopingCart), {})
	return res.status(200).send(response);

})

module.exports = router;