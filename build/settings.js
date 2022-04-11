const path =  require('path');
const routers = require('../src/config/router'); // 静态路由
const articleList = require('../src/data/about/news/list')

// 配置项
const settings = {
  context: path.resolve(__dirname, '../src/'),  // 开发基础目录
  pathContentBase: path.resolve(__dirname, '../src/page'), // devser内容来源
  pathEntry: paths=> path.resolve(__dirname, `../src/${paths}/main`),  // 入口文件路径
  pathTemplate: paths=> path.resolve(__dirname, `../src/${paths}/index`),  // 页面模板路径
  pathStaticCopy: ['src/assets', 'assets'], // 打包时静态文件copy路径
  pathDist: path.resolve(__dirname, '../dist'), // 打包后文件公共目录
  filename_js: "js/[name].[fullhash:8].js", // 打包后js文件路径和名称
  filename_css: "css/[name].[fullhash:8].css", // 打包后css文件路径和名称
  resolveAlias: { // 别名配置
    '@': path.join(__dirname, '../src'),
    '@mock': path.join(__dirname, '../mock')
  },
  routers, // 路由也挂到settings上
  articleList
};

module.exports = settings;
