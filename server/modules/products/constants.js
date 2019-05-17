exports.productsConfig = {
	query:{
		queryAllowed: [ "order", "page", "brand" ],
		queryConfiguration: {
			order: {
				allowedParams: [0, 1, 2],
				validate: function(value){ (this.allowedParams.includes(value)) ? this.convertTo(value) : 1},
				convertTo: (value) => Number(value)
			},
			brand:{
				convertTo: (value) => Number(value)	},
			page:{
				convertTo: (value) => Number(value)
			}
	}

	}
	
}