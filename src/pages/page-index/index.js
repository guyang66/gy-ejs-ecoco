import template from './template';
import htmlRender from '@/layouts/index';
import form from '@/components/form'
import banner from './module-banner'
import logo from './module-logo'
import product from './module-product'
import statics from './module-statics'
import customer from './module-customer'
import solution from './module-solution'

import bannerData from '@/datas/index/banner'
import columnData from '@/datas/index/column'
import productData from '@/datas/index/product'
import logoData from '@/datas/index/logo'
import staticsData from '@/datas/index/statics'
import customerData from '@/datas/index/customer'
import solutionData from '@/datas/index/solution'

const bannerView = banner({bannerData, columnData})
const logoView = logo({logoData})
const productView = product({productData})
const staticsView = statics({staticsData})
const customerView = customer({customerData})
const solutionView = solution({solutionData})
const formView = form()
const container = template({formView, bannerView, productView, staticsView, customerView, solutionView, logoView});
const hasBanner = false
export default htmlRender({
  key: 'index',
  container,
  bannerData,
  hasBanner,
});
