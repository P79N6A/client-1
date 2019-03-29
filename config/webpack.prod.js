const path = require("path");
const merge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");

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
          test: /[\\/]node_modules[\\/]/,
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
    // 包分析
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
  ],

  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  }
});
