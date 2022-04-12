import './style';
import articleList from "@/data/about/news/list";
import cell from './cell'

$(function() {
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

    $('.news-wrap .news-view .article-view').empty()
    articleList.forEach(item=>{
      if(item.type === key || key === 'all'){
        $($('.news-wrap .news-view .article-view')).append(cell({news: item}))
      }
    })
  })

})
