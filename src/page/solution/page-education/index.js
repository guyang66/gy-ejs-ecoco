import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import pain from '@/component/advantages/layout-n-4'
import framework from './module-framework'
import advantage from '@/component/advantages/n-3-a'
import apply from '@/component/apply/layout_float'
import cases from '@/component/case/layout-n-2'
import recommend from '@/component/recommend/layout-3'

import bannerData from "@/data/solution/education/banner";
import painData from "@/data/solution/education/pain";
import advantageData from "@/data/solution/education/advantage";
import frameworkData from "@/data/solution/education/framework";
import applyData from "@/data/solution/education/value";
import caseData from "@/data/solution/education/case";
import recommendData from "@/data/solution/education/recommend";

const tabsData = [{
  name: '行业痛点',
  anchor: 'pain',
},{
  name: '方案架构',
  anchor: 'framework',
},{
  name: '方案优势',
  anchor: 'advantage',
},{
  name: '应用场景',
  anchor: 'apply',
},{
  name: '客户案例',
  anchor: 'case',
},{
  name: '相关推荐',
  anchor: 'recommend',
}];

const formView = form()
const painView = pain({advantageData: painData})
const advantageView = advantage({advantageData})
const frameworkView = framework({frameworkData})
const applyView = apply({applyData})
const caseView = cases({caseData})
const recommendView = recommend({recommendData})
const container = template({formView, painView, frameworkView,advantageView, applyView,recommendView, caseView});
export default htmlRender({
  key: 'banana',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
