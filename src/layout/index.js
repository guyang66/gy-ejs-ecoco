import layout from './layout';
import header from './header';
import footer from './footer';

import banner from '@/component/banner';
import tabs from '@/component/tabs';
import menus from '@/data/menu'

import configs from '@/config';
import { arrayToObj } from '@/utils/utils';

import footerData from '@/data/menu/footer'
const { router, name, logo, telicon } = configs;
const routerMaps = arrayToObj(router, 'name');


/**
 *
 * @param {key} 单个页面的独立key, 用户解析页面的title或者其它私有内容
 * @param {hasFooter} 是否开启footer组件
 * @param {container} 页面主区域内容
 * @param {bannerData} 页面主banner图内容
 * @param {tabsData} 页面内tabs页锚点标题
 */

const htmlRender = ({
  key,
  hasBanner = true,
  hasFooter = true,
  container,
  bannerData = {},
  tabsData = [],
}) => {
  return layout({
    key, // 页面独立key
    tabsData,
    ...configs,
    title: `默认标题`, // 页面标题
    header: header({ key, logo, menus, telicon, hasBanner}),
    banner: hasBanner ? banner({bannerData}) : '',
    tabs: tabs({tabsData}),
    container: container || '',
    footer: hasFooter ? footer({footerData, logo}) : ''
  });
}

export default htmlRender;
