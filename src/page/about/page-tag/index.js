import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import articleList from "@/data/about/news/list";
import resourceList from "@/data/service/resource/download";
import tagList from "@/data/about/tag/tag";
import recommendData from "@/data/case/recommend";

const tabsData = [];

const formView = form()
const container = template({formView, articleList, resourceList, tagList, recommendData});
export default htmlRender({
  key: 'tag',
  hasBanner: false,
  navKey: 'about', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  tabsData,
});
