


/**
 * Helper funtion to check if element exist on the wishlist
 * @param {Array} wishlist 
 * @param {Number} productId 
 * Todo: Convert this function to accept any array an any element to filter
 */
var existOnWhishlist = (wishlist, productId) => {
	let existsOnWishlist = wishlist.filter(function(element) {
		return element["id"] === productId;
   });

   return (existsOnWishlist.length > 0) ? true : false;
}
   
exports.existOnWhishlist = existOnWhishlist;

/**
 * Helper funtion to check if element exist on the wishlist
 * @param {Array} wishlist 
 * @param {Number} productId 
 * Todo: Merge this function with existOnWhishlist
 */
var existOnCart= (cart, productId) => {
	let existOnCart = cart.filter(function(element) {
		return element["id"] === productId;
   });

   return (existOnCart.length > 0) ? true : false;
}
   
exports.existOnCart = existOnCart;