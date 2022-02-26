import template from './template';
import htmlRender from '@/layouts/index';
import form from '@/components/form'
import advantage from '@/components/advantages/layout-n-4'
import core from '@/components/core/layout-fade'
import apply from '@/components/apply/layout-float'
import history from '@/components/history/layout-slide'
import cases from '@/components/case/layout-n-2'

import bannerData from "@/datas/product/fruits/pomegranate/banner";
import advantageData from "@/datas/product/fruits/pomegranate/advantage";
import coreData from "@/datas/product/fruits/pomegranate/core";
import applyData from "@/datas/product/fruits/pomegranate/value";
import historyData from "@/datas/product/fruits/pomegranate/history";
import caseData from "@/datas/product/fruits/pomegranate/case";

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
