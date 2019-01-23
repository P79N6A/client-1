import path from "path";
import webpack from "webpack";
import AutoDllPlugin from "autodll-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import tsImportPluginFactory from "ts-import-plugin";

const common: webpack.Configuration = {
  /**
   * webpack 程序处理入口
   * 入口文件：src/index.tsx
   */
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/index.tsx")],

  /**
   * 文件后缀解析优化
   */
  resolve: {
    extensions: [".tsx", ".js", ".ts"]
  },

  /**
   * webpack当前文件可处理模块
   * ts,js,tsx,jsx
   * less,css
   * file
   */
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory([
                    {
                      style: false,
                      libraryName: "lodash",
                      libraryDirectory: null,
                      camel2DashComponentName: false
                    },
                    {
                      libraryName: "antd",
                      libraryDirectory: "es",
                      style: true
                    }
                  ])
                ]
              }),
              compilerOptions: {
                module: "es2015"
              }
            }
          }
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src")
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: {}
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },

  /**
   * 文件输出目录
   * public/static
   */
  output: {
    path: path.resolve(__dirname, "../public/static"),
    // publicPath: "https://prodect.oss-cn-beijing.aliyuncs.com/"
  },

  /**
   * 拓展功能
   * css 打包分离
   * html文件自动插入
   * dll 分离打包
   */
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: false,
      filename: "[name].js",
      entry: {
        vendor: ["react-router-dom","react", "react-dom", "immer", "aphrodite","react-redux","styled-components","redux"]
      }
    })
  ]
};

export default common;
