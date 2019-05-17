const express = require("express");
const router = express.Router();


const productsController = require("./controller");
const productsMiddleware = require("./middleware");


/**
 * Route to Get Products
 */
router.get("/products",productsMiddleware.validateProductsQuery, productsController.getProducts);

module.exports = router;
