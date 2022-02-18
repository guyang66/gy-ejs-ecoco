import template from './template';
import htmlRender from '@/layouts/index';

const bannerData = {
  title: '西瓜',
  text: '西瓜是一种水果，西瓜是一种水果，西瓜是一种水果，西瓜是一种水果，西瓜是一种水果，西瓜是一种水果。',
  button: true,
}

const tabsData = [{
}];

const container = template();

export default htmlRender({
  key: 'index',
  container,
  bannerData,
  tabsData,
});
