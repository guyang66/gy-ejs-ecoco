import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import advantage from '@/component/advantages/n-3-b'
import core from '@/component/core/layout-fade'
import apply from '@/component/apply/layout_tabs'
import history from '@/component/history/layout-slide'
import cases from '@/component/case/layout-3'

import bannerData from "@/data/product/fruits/orange/banner";
import advantageData from "@/data/product/fruits/orange/advantage";
import coreData from "@/data/product/fruits/kiwi/core";
import applyData from "@/data/product/fruits/kiwi/apply";
import historyData from "@/data/product/fruits/kiwi/history";
import caseData from "@/data/product/fruits/kiwi/case";

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
  key: 'peach',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});