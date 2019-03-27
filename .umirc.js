// ref: https://umijs.org/config/
export default {
  theme: {
    '@primary-color': '#2f54eb',
    '@layout-header-background': 'transparent',
    '@layout-sider-background': '#001529',
    '@layout-sider-background-light': 'transparent',
  },
  treeShaking: true,
  targets: {
    ie: 11,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: { webpackChunkName: true },
        title: 'admin',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
