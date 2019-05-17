const express = require("express");
const router = express.Router();

const utils = require("./../../helpers/utils");

const cartController = require("./controller");

/**
 * Route to Get The Shopping Cart
 */
router.get("/cart", cartController.getCart);

/**
 * Route to Add items to the Cart
 */
router.post("/cart", cartController.saveOnCart);

/**
 * Route to Remove items to the Cart
 */
router.delete("/cart", cartController.removeFromCart)

module.exports = router;
