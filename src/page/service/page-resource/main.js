import './style';
import Swiper from 'swiper';

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
})
