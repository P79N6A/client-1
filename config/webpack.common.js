const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * TODO antd-icon 问题(https://github.com/ant-design/ant-design/issues/12011)
 * @description 功能
 * 1. 文件编译入口
 * 2. 文件后缀解析
 * 3. 模块解析 （tsx,css，graphql及antd-icon提取异步加载）
 * 4. HTML模板自动生辰添加链接
 */
module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: {
                "@layout-header-background": "transparent",
                "@layout-sider-background": "transparent",
                "@text-color": "#4e5b6a",
                "@heading-color": "#020814"
              }
            }
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        loader: "graphql-tag/loader"
      },
      {
        loader: "webpack-ant-icon-loader",
        enforce: "pre",
        include: [path.resolve("node_modules/@ant-design/icons/lib/dist")]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
