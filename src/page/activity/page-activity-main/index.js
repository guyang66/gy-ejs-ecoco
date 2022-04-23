import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import favorite from "./module.favorate.ejs";
import brand from "./module.brand.ejs";
import hot from "./module.hot.ejs";

import bannerData from "@/data/activity/banner";
import favoriteData from "@/data/activity/favorite";
import brandData from "@/data/activity/brand";
import hotData from "@/data/activity/hot";

const tabsData = [{
  name: '产品活动',
  anchor: 'favorite',
}, {
  name: '热门活动',
  anchor: 'hot',
}, {
  name: '品牌活动',
  anchor: 'brand',
}];

const formView = form()
const favoriteView = favorite({
  favoriteData
})
const brandView = brand({
  brandData
})
const hotView = hot({
  hotData
})

const container = template({
  formView,
  favoriteView,
  brandView,
  hotView
});
export default htmlRender({
  key: 'activity',
  navKey: 'activity', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});