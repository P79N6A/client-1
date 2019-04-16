const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        ie: "11"
      },
      modules: false,
      useBuiltIns: "usage",
      corejs: 3
    }
  ],
  ["@babel/preset-typescript"],
  ["@babel/preset-react"],
  [
    "@emotion/babel-preset-css-prop",
    {
      autoLabel: true,
      labelFormat: "[local]"
    }
  ]
];

const plugins = [
  [
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    },
    "ant"
  ],
  [
    "import",
    {
      libraryName: "antd-mobile",
      libraryDirectory: "es",
      style: "css"
    },
    "antd-mobile"
  ],
  [
    "import",
    {
      libraryName: "lodash",
      libraryDirectory: "",
      camel2DashComponentName: false
    },
    "lodash"
  ],
  ["@babel/plugin-syntax-dynamic-import"],
  ["@babel/plugin-proposal-class-properties"]
];

module.exports = { presets, plugins };
