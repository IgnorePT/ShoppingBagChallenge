exports.productsConfig = {
	query:{
		queryAllowed: [ "order", "page", "brand" ],
		queryConfiguration: {
			order: {
				allowedParams: [0, 1, 2],
				convertTo: (value) => Number(value),
				validate: function(value){ 
					return (this.allowedParams.includes(this.convertTo(value)) && value ) ? this.convertTo(value) : 0
				}
			},
			brand:{
				convertTo: (value) => Number(value),
				validate: function(value){ 
					return (value) ? this.convertTo(value) : null
				}
			},
			page:{
				convertTo: (value) => Number(value),
				validate: function(value){ 
					return (value) ? this.convertTo(value) : 1
				},
			}
	}

	}
	
}