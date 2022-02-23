/**
 * 多页面路由配置
 * @param {name} 页面独立key
 * @param {path} 页面路径
 * @param {title} 页面标题
 */
module.exports = [
  // 首页
  {
    name: 'index',
    path: 'pages/page-index',
    title: '首页'
  },

  // 产品
  // 产品-水果
  {
    name: 'banana',
    path: 'pages/product/fruits/page-banana',
    title: '香蕉'
  }
];
