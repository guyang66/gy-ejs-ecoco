import template from './template';
import htmlRender from '@/layouts/index';
import form from '@/components/form'
import advantage from '@/components/advantages/layout-between'
import core from '@/components/core/layout-fade'
import apply from '@/components/apply/layout_tabs'
import history from '@/components/history/layout-slide'
import cases from '@/components/case/layout-3'

import bannerData from "@/datas/product/fruits/kiwi/banner";
import advantageData from "@/datas/product/fruits/kiwi/advantage";
import coreData from "@/datas/product/fruits/kiwi/core";
import applyData from "@/datas/product/fruits/kiwi/apply";
import historyData from "@/datas/product/fruits/kiwi/history";
import caseData from "@/datas/product/fruits/kiwi/case";

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
