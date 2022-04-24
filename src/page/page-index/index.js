import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form';
import banner from './module-banner';
import logo from './module-logo';
import product from './module-product';
import statics from './module-statics';
import customer from './module-customer';
import solution from './module-solution';
import certify from './module-certify';
import resource from './module-resource';
import news from './module-news';

import bannerData from '@/data/index/banner';
import columnData from '@/data/index/column';
import productData from '@/data/index/product';
import logoData from '@/data/index/logo';
import staticsData from '@/data/index/statics';
import customerData from '@/data/index/customer';
import solutionData from '@/data/index/solution';
import certifyData from '@/data/index/certify';
import resourceData from '@/data/index/resource';
import newsData from '@/data/index/news';

const bannerView = banner({
  bannerData,
  columnData,
});
const logoView = logo({
  logoData,
});
const productView = product({
  productData,
});
const staticsView = statics({
  staticsData,
});
const customerView = customer({
  customerData,
});
const solutionView = solution({
  solutionData,
});
const certifyView = certify({
  certifyData,
});
const resourceView = resource({
  resourceData,
});
const newsView = news({
  newsData,
});
const formView = form();
const container = template({
  formView,
  bannerView,
  productView,
  staticsView,
  customerView,
  newsView,
  certifyView,
  solutionView,
  resourceView,
  logoView,
});
const hasBanner = false;
export default htmlRender({
  key: 'index',
  navKey: 'index',
  container,
  bannerData,
  hasBanner,
});
