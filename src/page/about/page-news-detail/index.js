import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form';
import articleList from '@/data/about/news/list';
import tagList from '@/data/about/tag/tag';
import searchHot from '@/data/about/news/search';
const tabsData = [];

const formView = form();
const container = template({
  formView,
  articleList,
  tagList,
  searchHot,
});
export default htmlRender({
  key: 'news-detail',
  navKey: 'about', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  hasBanner: false,
  tabsData,
});
