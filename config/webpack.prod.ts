import merge from "webpack-merge";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import common from "./webpack.common";

module.exports = merge(common, {
  /**
   *  webpack 运行模式
   */
  mode: "production",

  /**
   * 输出统计信息信息
   */
  stats: {
    // 未定义选项时，stats 选项的备用值(fallback value)（优先级高于 webpack 本地默认值）
    all: undefined,

    // 添加资源信息
    assets: true,

    // 添加构建日期和构建时间信息
    builtAt: false,

    // 添加缓存（但未构建）模块的信息
    cached: false,

    // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
    cachedAssets: false,

    // 添加 children 信息
    children: false,

    // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
    chunks: false,

    // 添加 namedChunkGroups 信息
    chunkGroups: false,

    // 将构建模块信息添加到 chunk 信息
    chunkModules: false,

    // 添加 chunk 和 chunk merge 来源的信息
    chunkOrigins: false,

    // 显示每个模块到入口起点的距离(distance)
    depth: false,

    // 通过对应的 bundle 显示入口起点
    entrypoints: false,

    // 添加 --env information
    env: false,

    // 添加错误信息
    errors: false,

    // 添加错误的详细信息（就像解析日志一样）
    errorDetails: false,

    // 查看 excludeModules
    exclude: false,

    // 添加 compilation 的哈希值
    hash: false,

    // 设置要显示的模块的最大数量
    maxModules: 15,

    // 添加构建模块信息
    modules: false,

    // 显示警告/错误的依赖和来源（从 webpack 2.5.0 开始）
    moduleTrace: false,

    // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
    performance: true,

    // 显示模块的导出
    providedExports: false,

    // 添加 public path 的信息
    publicPath: false,

    // 添加模块被引入的原因
    reasons: false,

    // 添加模块的源码
    source: false,

    // 添加时间信息
    timings: false,

    // 显示哪个模块导出被用到
    usedExports: false,

    // 添加 webpack 版本信息
    version: false,

    // 添加警告
    warnings: false
  },

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
        commons: {
          name: "common",
          test: /(core-js)/,
          chunks: "all",
          priority: 2
        }
      }
    }
  }
});
