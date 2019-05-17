const {productsConfig} = require("./constants");

/**
 * Function to validate Query Parameters
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const validateQueryParameters = (req, res, next) => {

	const {queryAllowed, queryConfiguration} = productsConfig.query;

	//Filter Noise Data && Initial Validation
	Object.keys(req.query).forEach(key => { 

		if(queryAllowed.includes(key)){
			req[key] = queryConfiguration[key].validate(req.query[key]);
		} else {
			delete req.query(key)
		}
		
	});

	next();
}

module.exports.validateQueryParameters = validateQueryParameters;