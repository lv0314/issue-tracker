const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		host: "localhost",
		port: 3000,
		open: true,
		historyApiFallback: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
});
