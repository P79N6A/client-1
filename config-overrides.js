const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPresets
} = require("customize-cra");

module.exports = override(
  ...addBabelPresets("@emotion/babel-preset-css-prop"),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@layout-header-background": "transparent",
      "@layout-sider-background": "transparent",
      "@text-color": "#4e5b6a",
      "@heading-color": "#020814"
    }
  })
);
