const express = require("express");
const router = express.Router();

const productsRouter = require("./../modules/products/router");
const brandsRouter = require("./../modules/brands/router");
const cartRouter = require("./../modules/cart/router");

/**
 * Routes
 */
router.get("/", (req, res) => {
	res.status(200).send("The webserver is ON");
});

router.use("/", productsRouter);
router.use("/", brandsRouter);
router.use("/", cartRouter);

module.exports = router;