import './style';
import casesList from '@/data/case/cases'
import Swiper from 'swiper';

$(function () {

  // 搜索
  function searchAction() {
    let value = $(".search-wrap .search .input").val()
    let filterList
    if (value !== null && value !== undefined && value !== '') {
      filterList = casesList.filter(function (item) {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0
      })
    } else {
      filterList = casesList
    }

    let count = Math.min(filterList.length, 9)
    let string = ''
    filterList.slice(0, count).forEach((item, index) => {
      // let icon = item.icon.slice(item.icon.indexOf('assets'),item.icon.length)
      string = string + "<div class='case-cell fn-left mar-b40" + ((index + 1) % 3 !== 0 ? " mar-r40'>" : "'>")
      // 使用手动插入html片段，src的url路径拼接有点重复问题，不影响显示，如果不喜欢，把item.icon替换成上面的icon
      string = string + "<img class='case-icon fn-left'" + " src='" + item.icon + "' alt='案例'/>"
      string = string + "<div class='case-title'>" + item.title + "</div>"
      string = string + "<div class='case-desc'>" + item.desc + "</div>"
      string = string + "<a class='case-btn'" + " href='" + item.href + "'>了解详情 ></a>"
      string = string + "</div>"
    })

    $('.case-main-wrap .case-view').empty()
    $('.case-main-wrap .case-view').append(string)
    $('.case-main-wrap .case-view').attr('count', count)
    $('.case-main-wrap .case-view').attr('search', value)
    console.log(count)
    if (count < 9) {
      // 下拉取完
      $('.expand-img-wrap').hide()
    } else {
      $('.expand-img-wrap').show()
    }
  }

  $('.search-wrap .search .icon').on('click', function () {
    searchAction()
  })

  // 监听回车
  $(".search-wrap .search").find('.input').keyup(function (e) {
    if (e.keyCode === 13) {
      let lastValue = $('.case-main-wrap .case-view').attr('search')
      let value = $(".search-wrap .search .input").val()
      if (value === lastValue) {
        // 重复的操作return
        return
      }
      searchAction()
    }
  })

  // 上拉加载更多
  $('.expand-img-wrap .expand-btn').on('click', function () {

    let value = $(".search-wrap .search .input").val()

    let filterList = casesList
    if (value !== null && value !== undefined && value !== '') {
      filterList = casesList.filter(function (item) {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0
      })
    }
    let count = $('.case-main-wrap .case-view').attr('count') - 0
    let cellViewNodes = $('.case-main-wrap .case-view .case-cell')
    let nextCount = Math.min(9, filterList.length - count)
    for (let i = 0; i < nextCount; i++) {
      // 使用clone方法来做
      let node = cellViewNodes.eq(i).clone()
      let target = filterList[i + count]
      node.children('.case-icon').attr('src', target.icon)
      node.children('.case-title').text(target.title)
      node.children('.case-desc').text(target.desc)
      $('.case-main-wrap .case-view').append(node)
    }

    $('.case-main-wrap .case-view').attr('count', count + nextCount)
    if (nextCount < 9 || nextCount + count === filterList.length) {
      // 下拉取完
      $('.expand-img-wrap').hide()
    }
  })
})