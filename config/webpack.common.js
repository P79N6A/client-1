const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    // Automatically resolve certain extensions
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /(node_modules|bower_components)/,
        include: /(src)/,
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
    // css extract
    new MiniCssExtractPlugin({
      filename: "common.[chunkhash].css"
    }),
    // auto generate html  and binging src
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
