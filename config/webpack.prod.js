const webpack = require("webpack");
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
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all"
        },
        material: {
          test: /[\\/]node_modules[\\/](@material-ui|jss)[\\/]/,
          name: "material",
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
    // moment.js 语言包过滤
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh/),
    // 包分析
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
  ]
});
