const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  // change how modules are resolved.
  resolve: {
    // Automatically resolve certain extensions
    extensions: [".tsx", ".ts", ".js"],
    // splitting antd icon
    alias: {
      // "@ant-design/icons/lib/dist$": path.resolve(
      //   __dirname,
      //   "../public/icon.js"
      // )
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: {
                "@layout-header-background": "transparent",
                "@layout-sider-background": "transparent"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // css extract
    new MiniCssExtractPlugin({
      filename: "common.[chunkhash].css"
    }),
    // auto generate html  and binging src
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
