const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    mainFields: ["browser", "main", "module"],
    extensions: [".tsx", ".ts", ".js", ".gql", ".graphql"],
    symlinks: false,
    alias: {
      "@ant-design/icons/lib/dist$": path.resolve(
        __dirname,
        "../public/icons.js"
      )
    }
  },

  stats: "errors-only",

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: ["graphql-tag/loader"]
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
