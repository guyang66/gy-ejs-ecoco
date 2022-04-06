import './style';
import Swiper from 'swiper';
$(function() {
  var resumeSwiper = new Swiper('.resume-slide-container', {
    speed: 500,
    prevButton:'.left-btn',
    nextButton:'.right-btn',
    // effect : 'fade',
    autoHeight: true,
  });

  $('.resume-wrap .resume-view .tab-view .tab-cell').on('click',function (){
    let r = $(this).index()
    resumeSwiper.slideTo(r)
  })
})
