const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports(
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    },
    {
      libraryName: "@material-ui/core",
      libraryDirectory: "", // default: lib
      camel2DashComponentName: false // default: true
    },
    {
      libraryName: "antd-mobile",
      style: "css"
    }
  ),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#3f51b5" }
  }),
  addWebpackAlias({
    "@ant-design/icons/lib/dist$": path.resolve(
      __dirname,
      "./src/layout/icons.tsx"
    )
  })
);
