import template from './template';
import htmlRender from '@/layouts/index';
import form from '@/components/form'
import advantage from '@/components/advantages/n-3-b'
import core from '@/components/core/n-3'
import apply from '@/components/apply/layout_tabs'
import history from '@/components/history/layout-slide'
import cases from '@/components/case/layout-one'

import bannerData from "@/datas/product/fruits/peach/banner";
import advantageData from "@/datas/product/fruits/peach/advantage";
import coreData from "@/datas/product/fruits/peach/core";
import applyData from "@/datas/product/fruits/peach/apply";
import historyData from "@/datas/product/fruits/peach/history";
import caseData from "@/datas/product/fruits/peach/case";

const tabsData = [{
  name: '产品特性',
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
