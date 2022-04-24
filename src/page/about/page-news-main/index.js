import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form';

import bannerData from '@/data/about/news/banner';
import categoryData from '@/data/about/news/category';
import articleList from '@/data/about/news/list';
import tagList from '@/data/about/tag/tag';
import searchHot from '@/data/about/news/search';

const tabsData = [];
const formView = form();
const container = template({
  formView,
  categoryData,
  articleList,
  tagList,
  searchHot,
});
export default htmlRender({
  key: 'news',
  navKey: 'about', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
