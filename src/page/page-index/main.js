import './style';
import Swiper from 'swiper';

$(function () {
  if ($(document).scrollTop() > 535 - 95 - 64) {
    $('.header-bg').css('opacity', 1);
  }

  $(window).scroll(function () {
    if ($(document).scrollTop() > 535 - 95 - 64) {
      $('.header-bg').css('opacity', 1);
    } else {
      $('.header-bg').css('opacity', 0.4);
    }
  });
});
