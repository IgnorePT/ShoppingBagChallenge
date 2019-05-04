
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/style/style.js",
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
					}, 
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			  }

		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
	
		})
	]
}