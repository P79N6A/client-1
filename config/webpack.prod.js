const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");

/**
 * @description 功能
 * 1. 代码拆分打包
 * 2. 包分析
 */
module.exports = merge(common, {
  mode: "production",

  stats: "errors-only",

  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/](react|react-dom|immer|apollo-boost|graphql|react-apollo|react-redux|react-router-dom|redux)[\\/]/,
          name: "common",
          chunks: "all"
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    // 打包进度
    new WebpackBar({
      name: "build"
    }),
    // 优化moment包大小
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    // 包分析
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
  ],

  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  }
});
