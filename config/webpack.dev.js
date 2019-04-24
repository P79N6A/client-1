const webpack = require("webpack");
const merge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const common = require("./webpack.common.js");

/**
 * TODO [HMR]控制台输出删除
 * @description 功能
 * 1. 开发服务器设置
 * 2. 热更新设置
 * 3. 友好的错误输出提示
 */
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    clientLogLevel: "none",
    quiet: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: "8080",
    // 路由配置
    historyApiFallback: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["开发服务器已启动 http://localhost:8080"]
      },
      clearConsole: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
