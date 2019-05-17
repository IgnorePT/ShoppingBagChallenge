const express = require("express");
const router = express.Router();


const brandController = require("./controller");

/**
 * Route to Get Brands
 */
router.get("/brands", brandController.getBrands);

module.exports = router;

