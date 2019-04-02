const webpack = require("webpack");
const merge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    clientLogLevel: "none",
    quiet: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    port: "8080",
    // 路由配置
    historyApiFallback: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["开发服务器已启动 http://localhost:8080"],
        notes: ["局域网访问地址 http://[本机ip地址]:8080"]
      },
      clearConsole: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
