import './style';
import articleList from "@/data/about/news/list";
import cell from './cell'

$(function() {

  // 初始化
  initPagination(articleList)

  $('.news-view .tabs-view .tab-cell').on('click',function (){
    let index = $(this).index()
    let viewLeftPadding = 12,cellLeftMargin = 12,cellRightMargin = 12
    let firstNodeWidth = 28
    let cellPadding = 6 + 6
    if(index === 0){
      $('.news-view .tab-line').css({left: (viewLeftPadding + cellLeftMargin) + 'px', width: (firstNodeWidth + cellPadding) + 'px'})
    } else {
      let target = viewLeftPadding + cellLeftMargin
      for(let i = 0; i < index; i++){
        target = target + $('.news-view .tabs-view .tab-cell').eq(i).width() + cellPadding + cellLeftMargin + cellRightMargin
      }
      $('.news-view .tab-line').css({left: target + 'px',width: $(this).width() + cellPadding + 'px'})
    }

    let key = $(this).attr('key')
    $('.news-wrap .news-view .tabs-view').attr('key', key)

    $('#article-list').empty()
    let html = ''
    let filterList = articleList.filter(function (v){
      return v.type === key || key === 'all'
    })
    filterList.slice(0,10).forEach(item=>{
      html = html + cell({news: item})
    })
    $('#article-list').append(html)
    initPagination(filterList)
    $(".search-view").find('.input').val('')
  })


  $(".search-view").find('.icon').on('click',function (){
    searchAction()
  })

  $(".search-view").find('.input').keyup(function (e){
    // 监听回车
    if (e.keyCode === 13) {
      searchAction()
    }
  })
})

function initPagination (list) {
  new Pagination({
    element: '#pages',
    pageIndex: 1,
    pageSize: 10,
    total: list.length,
    jumper: true,
    singlePageHide: false,
    prevText: '上一页',
    nextText: '下一页',
    disabled: true,
    currentChange: function(index) {
      $('#article-list').empty()
      let html = ''
      let start = index - 1 === 0 ? 0 : (index - 1) + '0'
      let end = index + '0'

      list.slice(+start, +end).forEach(function(item){
        html += cell({news: item})
      })
      $('#article-list').append(html)
      document.body.scrollTop = document.documentElement.scrollTop = 424
    }
  });

  $('.search-text .search-item').on('click',function (){
    let searchKey = $(this).text()
    $(".search-view").find('.input').val(searchKey)
    searchAction()
  })

}

function searchAction () {
  let searchString = $(".search-view").find('.input').val()
  let filterList = articleList.filter(function (v){
    return v.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      v.summary.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      v.author.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      v.date.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      v.type.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      (v.tag && v.tag.includes(searchString))
  })

  $('#article-list').empty()
  let key = $('.news-view .tabs-view').attr('key') || 'all'
  let html = ''
  filterList.slice(0,10).forEach(item=>{
    if(item.type === key || key === 'all'){
      html = html + cell({news: item})
    }
  })
  $('#article-list').append(html)
  initPagination(filterList)
}
