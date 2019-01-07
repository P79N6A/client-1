# webpack-create-app

🚀 typescript 构建的前端 react 开发环境  
📦 基础包:webpack,react,ant-design

## 使用方式

### 下载整个包至本地,进入项目中运行

```npm
   yarn install
```

### 可用的命令

```npm
    yarn start  [启动命令]
    yarn build  [文件打包]
```

### 自行配置选项

1. 🌟 自行配置：[自动上传打包文件至阿里云](https://github.com/mfylee/webpack-aliyun-oss-plugin#readme)
2. 公共文件独立 请至 config/webpack.prod.ts 文件下配置

## 实现功能

- webpack 环境
- server 开发环境
- Html 自动依赖
- 热更新

- css 编译及提取打包
- 字体等文件处理

- 代码切割
- 代码压缩
- splitChunks(默认)：（react|react-dom）
- auto-dll

- tslint 规则
- prettier 美化代码

# 待办事项

- 优化文件结构
- 增强文件打包控制台输出体验
- 配置代码优化
- 优化配置代码注释
