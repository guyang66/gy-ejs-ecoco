import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import detailData from "@/data/service/declare/main";

const tabsData = [];

const formView = form()
const container = template({
  formView,
  detailData
});
export default htmlRender({
  key: 'declare',
  navKey: 'service', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  hasBanner: false,
  tabsData,
});