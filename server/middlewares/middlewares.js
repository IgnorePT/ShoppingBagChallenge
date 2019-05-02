/**
 * Middlewares
 */

 
/**
 * Allow Cross Origin Requests
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const allowCORS = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	next();
}

exports.allowCORS = allowCORS;