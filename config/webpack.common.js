const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  }
};
