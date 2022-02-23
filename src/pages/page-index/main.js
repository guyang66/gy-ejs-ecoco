import './style';
import Swiper from 'swiper';
$(function() {
  var bannerSwiper = new Swiper('.swiper-container', {
    autoplay : 3000,
    speed: 500,
    loop: true,
    mousewheelControl : true,
  });
})


$(function() {
  if($(document).scrollTop() > 400){
    $('.header-bg').css('opacity', 1)
  }

  $(window).scroll(function (){
    if($(document).scrollTop() > 400){
      $('.header-bg').css('opacity', 1)
    } else {
      $('.header-bg').css('opacity', 0.4)
    }
  })
})
