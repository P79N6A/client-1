const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPresets
} = require("customize-cra");

module.exports = override(
  // @emotion插件，简化书写
  ...addBabelPresets("@emotion/babel-preset-css-prop"),
  // antd 按需引入
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    // antd 主题配置
    modifyVars: {
      "@layout-header-background": "transparent",
      "@layout-sider-background": "transparent",
      "@text-color": "#4e5b6a",
      "@heading-color": "#020814"
    }
  })
);
