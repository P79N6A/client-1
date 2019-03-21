const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.tsx"),

  devtool: "inline-source-map",
  devServer: {
    quiet: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: "8000",
    // 路由配置
    disableHostCheck: true,
    compress: true, //gzip压缩
    historyApiFallback: true
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["开发服务器已启动 http://localhost:8000"],
        notes: ["局域网访问地址 http://[本机ip地址]:8000"]
      },
      clearConsole: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
