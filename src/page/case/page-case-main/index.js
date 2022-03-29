import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import bannerData from "@/data/case/banner";
import tagData from "@/data/case/tag";
import casesData from "@/data/case/cases";

const tabsData = [];

const formView = form()
const container = template({formView, tagData, casesData});
export default htmlRender({
  key: 'case',
  navKey: 'case', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
