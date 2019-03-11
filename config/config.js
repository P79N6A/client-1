// ref: https://umijs.org/config/
export default {
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
    },
  },
  targets: {
    ie: 9,
  },
  treeShaking: true,
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
        dll: true,

        routes: {
          exclude: [/models\//, /services\//, /model\.(t)sx?$/, /service\.(t)sx?$/, /components\//],
        },
      },
    ],
  ],
};
