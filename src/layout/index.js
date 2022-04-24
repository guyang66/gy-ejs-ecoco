import layout from './layout';
import header from './header';
import footer from './footer';

import sideMenu from '@/component/sideMenus';
import banner from '@/component/banner';
import tabs from '@/component/tabs';
import menus from '@/data/menu';

import configs from '@/config';
import { arrayToObj } from '@/utils/utils';

import footerData from '@/data/menu/footer';
const { tdkSettings, logo, telicon } = configs;
const tdkMaps = arrayToObj(tdkSettings, 'name');

const getPageTitle = (key, type) => {
  if (key === 'newsDetail') {
    // 新闻详情页没法匹配到，打包的时候再插入
    return '';
  }
  if (tdkMaps[key]) {
    return `${tdkMaps[key][type]}`;
  }
  return `${tdkMaps['default'][type]}`;
};

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
  navKey,
  hasBanner = true,
  hasFooter = true,
  hasSideMenu = true,
  container,
  bannerData = {},
  tabsData = [],
}) => {
  return layout({
    key, // 页面独立key
    navKey,
    tabsData,
    ...configs,
    sideMenu: hasSideMenu ? sideMenu() : '',
    title: getPageTitle(key, 'title'),
    keywords: getPageTitle(key, 'keywords'),
    description: getPageTitle(key, 'description'),
    header: header({key, navKey, logo, menus, telicon, hasBanner}),
    banner: hasBanner ? banner({bannerData,}) : '',
    tabs: tabs({tabsData,}),
    container: container || '',
    footer: hasFooter ? footer({footerData, logo,}) : '',
  });
};

export default htmlRender;
