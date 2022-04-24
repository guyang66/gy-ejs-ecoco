import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form';
import logoData from '@/data/form/logo';

const tabsData = [];

const container = template({
  logoData,
});
export default htmlRender({
  key: 'form',
  hasBanner: false,
  hasFooter: false,
  hasSideMenu: false,
  navKey: 'form', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  tabsData,
});
