import './style';
import Swiper from 'swiper';
import downloadData from "@/data/service/resource/download";
import cell from './cell'

$(function() {
  var swiper = new Swiper('.news-slide-container', {
    autoplay: 5000,
    effect : 'fade',
    pagination: '.news-pagination',
    paginationClickable :true,
  });

  $(".news-pagination .swiper-pagination-bullet").on("click",function(){
    let index = $(this).index();
    swiper.slideTo(index + 1);
  })

  // 初始化分页
  initPagination(downloadData.content)

  $('.resource-view .tabs-view .tab-item').on('click',function (){
    let index = $(this).index()
    let viewLeftPadding = 20
    let firstNodeWidth = 34
    if(index === 0){
      $('.resource-view .tab-line').css({left: viewLeftPadding + 'px', width: firstNodeWidth + 'px'})
    } else {
      let target = viewLeftPadding
      let cellMargin = 20 + 20
      for(let i = 0; i < index; i++){
        target = target + $('.resource-view .tabs-view .tab-item').eq(i).width() + cellMargin
      }
      $('.resource-view .tab-line').css({left: target + 'px',width:$(this).width()})
    }
    let key = $(this).attr('key')
    $('.resource-view .tabs-view').attr('key', key)
    $('#resource-list').empty()
    let html = ''
    let filterList = downloadData.content.filter(function (v){
      return v.key === key || key === 'all'
    })
    filterList.slice(0,10).forEach(item=>{
      html = html + cell({item: item})
    })
    $('#resource-list').append(html)
    initPagination(filterList)
    $('.resource-view .search-view').find('.input').val('')
    $('.download-sort').attr('download','')
    $('.download-sort').children('.download-icon').attr('src','/assets/images/common/paixu-n.svg')
    $('.download-sort').children('.download-icon').css({transform: 'rotateZ(0deg)'})
  })

  $('.resource-view .search-view').find('.search-icon').on('click',function (){
    searchAction()
  })
  $(".resource-view .search-view").find('.input').keyup(function (e){
    // 监听回车
    if (e.keyCode === 13) {
      searchAction()
    }
  })

  $('.download-sort').on('click',function (){

    let downloadSort = $(this).attr('download')
    let origin = [...downloadData.content]
    if(!downloadSort || downloadSort === ''){
      // 升序
      $(this).attr('download','asc')
      $(this).children('.download-icon').attr('src','/assets/images/common/paixu-h.svg')
      $(this).children('.download-icon').css({transform: 'rotateZ(180deg)'})
      origin.sort(function (a,b) {
        return b.download - a.download
      })
      let key = $('.resource-view .tabs-view').attr('key') || 'all'
      let html = ''
      origin.slice(0,10).forEach(item=>{
        if(item.key === key || key === 'all'){
          html = html + cell({item: item})
        }
      })
      $('#resource-list').empty()
      $('#resource-list').append(html)
      initPagination(origin)
    } else if(downloadSort === 'asc'){
      $(this).attr('download','desc')
      $(this).children('.download-icon').css({transform: 'rotateZ(0deg)'})
      origin.sort(function (a,b) {
        return a.download - b.download
      })
      let key = $('.resource-view .tabs-view').attr('key') || 'all'
      let html = ''
      origin.slice(0,10).forEach(item=>{
        if(item.key === key || key === 'all'){
          html = html + cell({item: item})
        }
      })
      $('#resource-list').empty()
      $('#resource-list').append(html)
      initPagination(origin)
    } else if (downloadSort === 'desc'){
      $(this).attr('download','')
      $(this).children('.download-icon').attr('src','/assets/images/common/paixu-n.svg')
      $(this).children('.download-icon').css({transform: 'rotateZ(0deg)'})

      let key = $('.resource-view .tabs-view').attr('key') || 'all'
      let html = ''
      downloadData.content.slice(0,10).forEach(item=>{
        if(item.key === key || key === 'all'){
          html = html + cell({item: item})
        }
      })
      $('#resource-list').empty()
      $('#resource-list').append(html)
      initPagination(downloadData.content)
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
      $('#resource-list').empty()
      let html = ''
      let start = index - 1 === 0 ? 0 : (index - 1) + '0'
      let end = index + '0'

      list.slice(+start, +end).forEach(function(item){
        html += cell({item: item})
      })
      $('#resource-list').append(html)
      document.body.scrollTop = document.documentElement.scrollTop = 424 + 380
    }
  });

  $('.search-text .search-item').on('click',function (){
    let searchKey = $(this).text()
    $(".search-view").find('.input').val(searchKey)
    searchAction()
  })

}

function searchAction () {
  let searchString = $('.resource-view .search-view').find('.input').val()
  console.log(searchString)
  let filterList = downloadData.content.filter(function (v){
    return v.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      v.desc.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      v.date.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
      (v.tag && v.tag.includes(searchString))
  })

  $('#resource-list').empty()
  let key = $('.resource-view .tabs-view').attr('key') || 'all'
  let html = ''
  filterList.slice(0,10).forEach(item=>{
    if(item.key === key || key === 'all'){
      html = html + cell({item: item})
    }
  })
  $('#resource-list').append(html)
  initPagination(filterList)
}
