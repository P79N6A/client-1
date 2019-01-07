import merge from "webpack-merge";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import common from "./webpack.common";

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  /**
   *  webpack 运行模式
   */
  mode: "production",

  /**
   *  webpack 自带优化选项
   *  外部引用的优化包：
   *  uglifyjs-webpack-plugin
   *  optimize-css-assets-webpack-plugin
   */
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    removeAvailableModules: true,
    removeEmptyChunks: true,
    splitChunks: {
      cacheGroups: {
        icons: {
          name: "icons",
          test: /(@ant-design\/icons\/)/,
          chunks: "all",
          priority: 1
        },
        commons: {
          name: "common",
          test: /(core-js)/,
          chunks: "all",
          priority: 2
        }
      }
    }
  },

  /**
   * 拓展，代码打包分析
   */
  plugins: [new BundleAnalyzerPlugin()]
});
