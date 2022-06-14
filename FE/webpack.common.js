const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"],
		alias: { "@": path.resolve(__dirname, "src/") },
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						[
							"@babel/preset-env",
							{
								targets: { browsers: ["> 0.2% in KR, not dead"] },
								debug: true,
								modules: false,
								useBuiltIns: "usage",
								corejs: 3,
							},
						],
						["@babel/preset-react", { runtime: "automatic" }],
						"@babel/preset-typescript",
					],
					plugins: ["react-refresh/babel", "babel-plugin-styled-components"],
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpe?g|gif|ico|woff|woff2|eot|ttf|otf)&/i,
				type: "asset/inline",
			},
		],
	},
	entry: {
		app: path.join(__dirname, "src", "index.tsx"),
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
	],
};
