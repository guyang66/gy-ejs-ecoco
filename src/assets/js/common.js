$(function() {
  scrollEvent();
});

function scrollEvent(){
  const tabsEle = $('.tabs-wrap .tabs-content li');
  getTabsOffsetActive()
  // 获取激活tabs
  function getTabsOffsetActive() {
    var tabsLen = tabsEle.length;
    var contH = $('.header-wrap').height() + ($(".banner-wrap").height()) - 50;
    var hideTop = $(document).scrollTop();
    var num = hideTop / contH;

    // 导航切换
    if (num >= 1) {
      $(".tabs-wrap").addClass('fixed');
    } else {
      $(".tabs-wrap").removeClass('fixed');
    };

    if (hideTop >= num) {
      tabsEle.removeClass('active')
      tabsEle.eq(0).addClass('active')
    }

    for(let i = 1; i < tabsLen; i++) {
      const contentLen = $('.tabs-content-wrap').eq(i).offset().top - 50
      if (hideTop >= contentLen) {
        tabsEle.removeClass('active')
        tabsEle.eq(i).addClass('active')
      }
    }
  }

  $(window).on('scroll', function(event) {
    event.preventDefault();
    getTabsOffsetActive();
  });

  tabsEle.on('click', function(event) {
    event.preventDefault();
    var i = $(this).index();
    tabsEle.removeClass('active');
    $(this).addClass('active');
    var offTop = $(".tabs-content-wrap").eq(i).offset().top - 50;
    $('html, body').animate({scrollTop: offTop}, 500);
  })
}
