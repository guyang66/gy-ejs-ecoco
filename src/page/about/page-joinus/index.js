import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import env from './module.env'
import welfare from './module.welfare'
import resume from './module.resume'

import bannerData from "@/data/about/joinus/banner";
import envData from "@/data/about/joinus/env";
import welfareData from "@/data/about/joinus/welfare";
import resumeData from "@/data/about/joinus/resume";

const tabsData = [{
  name: '工作环境',
  anchor: 'env',
}, {
  name: '福利待遇',
  anchor: 'welfare',
}, {
  name: '简历投递',
  anchor: 'resume',
}];

const formView = form()
const envView = env({
  envData
})
const welfareView = welfare({
  welfareData
})
const resumeView = resume({
  resumeData
})

const container = template({
  formView,
  envView,
  welfareView,
  resumeView
});
export default htmlRender({
  key: 'joinus',
  navKey: 'about', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});