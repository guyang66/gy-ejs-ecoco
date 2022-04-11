import './style';
import '@/styles/article.styl'
import detail from './module.detail'
$(function() {
  let id = 12
  let html = detail({})
  $(".news-box").prepend(html)
  // 这里变成了ajax加载，不是我想要的，但是模板只有一个，没办法动态加载渲染更新，或者说是编译的时候动态导入内容，要找其他办法处理
  // $("#article-detail").prepend(h)
  $("#article-detail").load('/assets/news/' + id + '.html')
})
