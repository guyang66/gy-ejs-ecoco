import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import env from './module.env'

import bannerData from "@/data/about/joinus/banner";
import envData from "@/data/about/joinus/env";
const tabsData = [{
  name: '工作环境',
  anchor: 'env',
},{
  name: '工作福利',
  anchor: 'welfare',
},{
  name: '简历投递',
  anchor: 'resume',
}];

const formView = form()
const envView = env({envData})
const container = template({formView, envView});
export default htmlRender({
  key: 'joinus',
  navKey: 'about', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
