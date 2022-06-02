import './style';
import '@/styles/article.styl';
import Swiper from 'swiper';
import tagList from '@/data/about/tag/tag';

$(function () {
  let tag = getQueryVariable('tag');
  if (tag && tag !== '') {
    let target = tagList[0];
    for (let i = 0; i < tagList.length; i++) {
      if (tag === tagList[i].key) {
        target = tagList[i];
        break;
      }
    }

    $('.tag-view .title-wrap .tit').text(target.text);
    $('.tag-view .title-wrap .desc').text(target.desc);
    $('.tag-view').find('.tag-title').text(target.text);
  }
});

function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}
