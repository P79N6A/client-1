import webpack from "webpack";
import merge from "webpack-merge";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import common from "./webpack.common";

/**
 *  webpack 开发环境下配置
 */
module.exports = merge(common, {
  /**
   *  webpack 运行模式
   */
  mode: "development",

  /**
   * 生成文件地推，便于查找错误
   */
  devtool: "inline-source-map",

  /**
   * webpack 本地Web服务器
   */
  devServer: {
    contentBase: false,
    quiet: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    host: "0.0.0.0",
    port: "8000"
  },


  /**
   * 开发环境下拓展功能
   * 优化错误输出
   * 热更新
   */
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["开发服务器已启动 http://localhost:8000"],
        notes: ["局域网访问地址 http://[本机ip地址]:8000"]
      },
      clearConsole: true
    })
  ]
});
