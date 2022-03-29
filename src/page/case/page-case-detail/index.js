import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import detailData from "@/data/case/example";
import recommendData from "@/data/case/recommend";

const tabsData = [];

const formView = form()
const container = template({formView, detailData, recommendData});
export default htmlRender({
  key: 'digital',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  hasBanner: false,
  tabsData,
});
