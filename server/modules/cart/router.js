const express = require("express");
const router = express.Router();

const utils = require("./../../helpers/utils");


const cartController = require("./controller");


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
