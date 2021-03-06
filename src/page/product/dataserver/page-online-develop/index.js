import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form';
import advantage from '@/component/advantages/layout-n-4';
import core from '@/component/core/layout-fade';
import apply from '@/component/apply/layout_tabs';
import history from '@/component/history/layout-slide';
import cases from '@/component/case/layout-one';

import bannerData from '@/data/product/dataserver/online-develop/banner';
import advantageData from '@/data/product/dataserver/online-develop/advantage';
import coreData from '@/data/product/dataserver/online-develop/core';
import applyData from '@/data/product/dataserver/online-develop/apply';
import historyData from '@/data/product/dataserver/online-develop/history';
import caseData from '@/data/product/dataserver/online-develop/case';

const tabsData = [
  {
    name: '产品优势',
    anchor: 'advantage',
  },
  {
    name: '核心功能',
    anchor: 'core',
  },
  {
    name: '应用场景',
    anchor: 'apply',
  },
  {
    name: '客户案例',
    anchor: 'case',
  },
  {
    name: '产品动态',
    anchor: 'history',
  },
];

const formView = form();
const advantageView = advantage({
  advantageData,
});
const coreView = core({
  coreData,
});
const applyView = apply({
  applyData,
});
const historyView = history({
  historyData,
});
const caseView = cases({
  caseData,
});
const container = template({
  formView,
  advantageView,
  coreView,
  applyView,
  historyView,
  caseView,
});
export default htmlRender({
  key: 'onlinedevelop',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
