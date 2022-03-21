import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import advantage from '@/component/advantages/layout-between'
import core from '@/component/core/1-4-black-white'
import apply from '@/component/apply/layout_tabs'
import history from '@/component/history/layout-slide'
import cases from '@/component/case/layout-3'

import bannerData from "@/data/product/ai/qingshui/banner";
import advantageData from "@/data/product/ai/qingshui/advantage";
import coreData from "@/data/product/ai/qingshui/core";
import applyData from "@/data/product/ai/qingshui/apply";
import historyData from "@/data/product/ai/qingshui/history";
import caseData from "@/data/product/ai/qingshui/case";

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
},{
  name: '产品动态',
  anchor: 'history',
}];

const formView = form()
const advantageView = advantage({advantageData})
const coreView = core({coreData})
const applyView = apply({applyData})
const historyView = history({historyData})
const caseView = cases({caseData})
const container = template({formView, advantageView, coreView, applyView, historyView, caseView});
export default htmlRender({
  key: 'banana',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
