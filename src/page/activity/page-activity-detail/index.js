import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import detailData from "@/data/activity/example";

const tabsData = [];

const formView = form()
const container = template({formView, detailData});
export default htmlRender({
  key: 'digital',
  hasBanner: false,
  navKey: 'activity', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  tabsData,
});
