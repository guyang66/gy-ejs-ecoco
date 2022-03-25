import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import advantage from '@/component/advantages/layout-n-4'
import core from '@/component/core/layout-fade'
import apply from '@/component/apply/layout_float'
import cases from '@/component/case/layout-one'

import bannerData from "@/data/product/dataserver/recommend/banner";
import advantageData from "@/data/solution/education/pain";
import coreData from "@/data/product/dataserver/recommend/core";
import applyData from "@/data/solution/education/value";
import caseData from "@/data/product/dataserver/recommend/case";

const tabsData = [{
  name: '产品优势',
  anchor: 'advantage',
},{
  name: '核心功能',
  anchor: 'core',
},{
  name: '应用场景',
  anchor: 'apply',
},{
  name: '客户案例',
  anchor: 'case',
}];

const formView = form()
const advantageView = advantage({advantageData})
const coreView = core({coreData})
const applyView = apply({applyData})
const caseView = cases({caseData})
const container = template({formView, advantageView, coreView, applyView, caseView});
export default htmlRender({
  key: 'banana',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
