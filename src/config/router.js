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
    path: 'page/page-index',
    title: '首页'
  },

  // 产品
  // 产品-水果
  {
    name: 'product/fruits/banana',
    path: 'page/product/fruits/page-banana',
    title: '香蕉'
  },
  {
    name: 'product/fruits/peach',
    path: 'page/product/fruits/page-peach',
    title: '香蕉'
  },
  {
    name: 'product/fruits/pomegranate',
    path: 'page/product/fruits/page-pomegranate',
    title: '石榴'
  },
  {
    name: 'product/fruits/kiwi',
    path: 'page/product/fruits/page-kiwi',
    title: '猕猴桃'
  },
  {
    name: 'product/fruits/avocado',
    path: 'page/product/fruits/page-avocado',
    title: '牛油果'
  },
  {
    name: 'product/fruits/mongo',
    path: 'page/product/fruits/page-mongo',
    title: '牛油果'
  },
  {
    name: 'product/fruits/mangosteen',
    path: 'page/product/fruits/page-mangosteen',
    title: '牛油果'
  },
  {
    name: 'product/fruits/grape',
    path: 'page/product/fruits/page-grape',
    title: '牛油果'
  },
  {
    name: 'product/fruits/lemon',
    path: 'page/product/fruits/page-lemon',
    title: '牛油果'
  },
  {
    name: 'product/fruits/litchi',
    path: 'page/product/fruits/page-litchi',
    title: '牛油果'
  },
  {
    name: 'product/fruits/piyata',
    path: 'page/product/fruits/page-piyata',
    title: '火龙果'
  },
  {
    name: 'product/fruits/croissant',
    path: 'page/product/fruits/page-croissant',
    title: '羊角蜜'
  },
  {
    name: 'product/fruits/hami',
    path: 'page/product/fruits/page-hami',
    title: '哈密瓜'
  },
  {
    name: 'product/fruits/fig',
    path: 'page/product/fruits/page-fig',
    title: '无花果'
  },
  {
    name: 'product/fruits/jujube',
    path: 'page/product/fruits/page-jujube',
    title: '青枣'
  },
  {
    name: 'product/fruits/apple',
    path: 'page/product/fruits/page-apple',
    title: '苹果'
  },
  {
    name: 'product/fruits/shaddock',
    path: 'page/product/fruits/page-shaddock',
    title: '柚子'
  },
  {
    name: 'product/fruits/loquat',
    path: 'page/product/fruits/page-loquat',
    title: '枇杷'
  },
  {
    name: 'product/fruits/plum',
    path: 'page/product/fruits/page-plum',
    title: '李子'
  },
  {
    name: 'product/fruits/orange',
    path: 'page/product/fruits/page-orange',
    title: '橘子'
  },
  {
    name: 'product/fruits/cherry',
    path: 'page/product/fruits/page-cherry',
    title: '樱桃'
  },
  {
    name: 'product/fruits/persimmon',
    path: 'page/product/fruits/page-persimmon',
    title: '柿子'
  },

  // 产品
  // 产品-水果
  {
    name: 'product/vegetables/radish',
    path: 'page/product/vegetables/page-radish',
    title: '红萝卜'
  },
  {
    name: 'product/vegetables/onion',
    path: 'page/product/vegetables/page-onion',
    title: '大葱'
  },
  {
    name: 'product/vegetables/cucumber',
    path: 'page/product/vegetables/page-cucumber',
    title: '黄瓜'
  },
  {
    name: 'product/vegetables/bolt',
    path: 'page/product/vegetables/page-bolt',
    title: '菜苔'
  },
  {
    name: 'product/vegetables/amaranthus',
    path: 'page/product/vegetables/page-amaranthus',
    title: '苋菜'
  },
  {
    name: 'product/vegetables/lotus',
    path: 'page/product/vegetables/page-lotus',
    title: '藕'
  },
  {
    name: 'product/vegetables/mushroom',
    path: 'page/product/vegetables/page-mushroom',
    title: '香菇'
  },
  {
    name: 'product/vegetables/cabbage',
    path: 'page/product/vegetables/page-cabbage',
    title: '白菜'
  },
  {
    name: 'product/vegetables/peas',
    path: 'page/product/vegetables/page-peas',
    title: '豌豆'
  },
  {
    name: 'product/vegetables/bilter',
    path: 'page/product/vegetables/page-bilter',
    title: '苦瓜'
  },
  {
    name: 'product/vegetables/celery',
    path: 'page/product/vegetables/page-celery',
    title: '芹菜'
  },
  {
    name: 'product/vegetables/ginger',
    path: 'page/product/vegetables/page-ginger',
    title: '生姜'
  },
  {
    name: 'product/vegetables/eggplant',
    path: 'page/product/vegetables/page-eggplant',
    title: '茄子'
  },
  {
    name: 'product/vegetables/chili',
    path: 'page/product/vegetables/page-chili',
    title: '辣椒'
  },
  {
    name: 'product/vegetables/pumpkin',
    path: 'page/product/vegetables/page-pumpkin',
    title: '南瓜'
  },

  // 产品
  // 产品-智能引擎
  {
    name: 'product/ai/speech',
    path: 'page/product/ai/page-speech',
    title: 'AI语音'
  },
  {
    name: 'product/ai/discriminate',
    path: 'page/product/ai/page-discriminate',
    title: 'AI识别'
  },
  {
    name: 'product/ai/algorithm',
    path: 'page/product/ai/page-algorithm',
    title: 'AI算法'
  },
  {
    name: 'product/ai/enterprise',
    path: 'page/product/ai/page-enterprise',
    title: '企业云'
  },
  {
    name: 'product/ai/digital',
    path: 'page/product/ai/page-digital',
    title: '数字云'
  },
  {
    name: 'product/ai/qingshui',
    path: 'page/product/ai/page-qingshui',
    title: '清水'
  },
  {
    name: 'product/ai/puti',
    path: 'page/product/ai/page-puti',
    title: '数字云'
  },
  {
    name: 'product/ai/shuying',
    path: 'page/product/ai/page-shuying',
    title: '数字云'
  },
  {
    name: 'product/ai/tianyan',
    path: 'page/product/ai/page-tianyan',
    title: '天眼杀'
  },
  {
    name: 'product/ai/titi',
    path: 'page/product/ai/page-titi',
    title: '蹄蹄智能办公'
  },
  {
    name: 'product/ai/colgi',
    path: 'page/product/ai/page-colgi',
    title: '干预系统colgi'
  },
  {
    name: 'product/ai/xiyu',
    path: 'page/product/ai/page-xiyu',
    title: '细雨'
  },
  {
    name: 'product/ai/uav',
    path: 'page/product/ai/page-uav',
    title: '智能无人机'
  },

  // 产品
  // 产品-数据与服务
  {
    name: 'product/dataserver/cluster',
    path: 'page/product/dataserver/page-cluster',
    title: '聚类算法'
  },
  {
    name: 'product/dataserver/offlinealgorithm',
    path: 'page/product/dataserver/page-offline-algorithm',
    title: '离线算法'
  },
  {
    name: 'product/dataserver/onlinedevelop',
    path: 'page/product/dataserver/page-online-develop',
    title: '智能无人机'
  },
  {
    name: 'product/dataserver/offlinedevelop',
    path: 'page/product/dataserver/page-offline-develop',
    title: '智能无人机'
  },
  {
    name: 'product/dataserver/neuralnetwork',
    path: 'page/product/dataserver/page-neural-network',
    title: '智能无人机'
  },
  {
    name: 'product/dataserver/recommend',
    path: 'page/product/dataserver/page-recommend',
    title: '智能无人机'
  },
];
