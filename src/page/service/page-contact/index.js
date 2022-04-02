import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import contact from './module.contact'
import address from './module.address'

import bannerData from "@/data/service/contact/banner";
import contactData from "@/data/service/contact/contact";
import addressData from "@/data/service/contact/address";

const tabsData = [{
  name: '联系方式',
  anchor: 'contact',
},{
  name: '公司地址',
  anchor: 'address',
}];

const formView = form()
const contactView = contact({contactData})
const addressView = address({addressData})

const container = template({formView, contactView, addressView});
export default htmlRender({
  key: 'banana',
  navKey: 'product', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
