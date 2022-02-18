import template from './template';
import htmlRender from '@/layouts/index';

const bannerData = {
  title: '西瓜',
  text: '西瓜是一种水果，西瓜是一种水果，西瓜是一种水果，西瓜是一种水果，西瓜是一种水果，西瓜是一种水果。',
  button: true,
}

const tabsData = [{
  name: 'tabs1',
  anchor: 'tabs1',
},{
  name: 'tabs2',
  anchor: 'tabs2',
},{
  name: 'tabs3',
  anchor: 'tabs3',
},{
  name: 'tabs4',
  anchor: 'tabs5',
}];

const container = template();

export default htmlRender({
  key: 'index',
  container,
  bannerData,
  tabsData,
});
