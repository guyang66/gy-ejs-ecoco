import './style';
import Swiper from 'swiper';
$(function() {
  let historySwiper = new Swiper('.history-swiper-container', {
    autoHeight: true,
    effect: 'fade'
  });

  $('.history-view .tabs-view .tab-cell').on('click',function (){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    let index = $(this).index()
    historySwiper.slideTo(index)
  })

  let prizeSwiper = new Swiper('.prize-swiper-container', {
    autoHeight: true,
    prevButton:'.arrow-left',
    nextButton:'.arrow-right',
  });

})
