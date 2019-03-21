const webpack = require("webpack");
const merge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  optimization: {
    minimizer: [],
    removeAvailableModules: true,
    removeEmptyChunks: true
  },

  plugins: [
    // 打包进度
    new WebpackBar({
      name: "build"
    }),
    // moment.js 语言包过滤
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh/),
    // 包分析
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
  ]
});
