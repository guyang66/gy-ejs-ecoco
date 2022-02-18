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
