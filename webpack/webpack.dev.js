const webpack = require("webpack");
const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");

module.exports = merge(commonWebpack, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    contentBase: "./"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
