import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form';
import quick from './module.quick';
import common from './module.common';

import bannerData from '@/data/service/help/banner';
import quickData from '@/data/service/help/quick';
import commonData from '@/data/service/help/common';

const tabsData = [
  {
    name: '快速导航',
    anchor: 'quick',
  },
  {
    name: '常见问题',
    anchor: 'common',
  },
];

const formView = form();
const quickView = quick({
  quickData,
});
const commonView = common({
  commonData,
});

const container = template({
  formView,
  quickView,
  commonView,
});
export default htmlRender({
  key: 'help',
  navKey: 'service', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
