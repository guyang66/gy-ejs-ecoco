import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'

import bannerData from "@/data/service/resource/banner";
import newsData from "@/data/service/resource/news";
import downloadData from "@/data/service/resource/download";

const tabsData = [];
const formView = form()

const container = template({
  formView,
  newsData,
  downloadData
});
export default htmlRender({
  key: 'resource',
  navKey: 'service', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});