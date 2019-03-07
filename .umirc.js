// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  targets: {
    ie: 9,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer:true
      },
      dynamicImport: { webpackChunkName: true },
      title: 'admin',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

