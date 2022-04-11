const settings = require('./settings');
const filters = require('../script/filter/tmp_entrys.js')

// 多入口
let entrys = {};
if(JSON.stringify(filters) === '{}' || Object.getOwnPropertyNames(filters).length === 0 || process.env.NODE_ENV === 'production'){
  // 这里是全部编译
  settings.routers.forEach(page=> {
    // 改了plugins配置，还要改下entry , 做一次替换，把about/news/detail全部分发成真实url
    if(page.name === 'about/news/detail'){
      settings.articleList.forEach(item => {
        entrys['about/news/' + item.id] = settings.pathEntry(page.path);
      })
    } else {
      entrys[page.name] = settings.pathEntry(page.path);
    }
  });
} else {
  // 条件编译
  let map = {}
  for(let key in filters){
    // 处理新闻详情
    if(key === 'about/news/detail'){
      let path = 'page/about/page-news-detail'
      settings.articleList.forEach(item => {
        map['about/news/' + item.id] = settings.pathEntry(path);
      })
    } else {
      map[key] = filters[key]
    }
  }
  entrys = map
}

console.log(entrys)
module.exports = entrys
