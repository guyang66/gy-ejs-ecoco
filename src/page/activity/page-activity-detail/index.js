import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'

import bannerData from "@/data/activity/banner";
import advantageData from "@/data/product/ai/digital/advantage";

const tabsData = [{
  name: '产品活动',
  anchor: 'favorite',
},{
  name: '品牌活动',
  anchor: 'brand',
},{
  name: '课程活动',
  anchor: 'apply',
}];

const formView = form()
const container = template({formView});
export default htmlRender({
  key: 'digital',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
