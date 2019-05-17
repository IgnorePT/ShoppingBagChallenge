const utils = require("./../../helpers/utils");

const getBrands = (req, res) => {

	const requestConfiguration = {
		responseType: "JSON"
	}

	const brands = utils.readFile("./server/data/brands.json", requestConfiguration);


	return res.status(200).send(brands);

}

module.exports.getBrands = getBrands;