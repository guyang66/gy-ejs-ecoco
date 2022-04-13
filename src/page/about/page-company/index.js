import template from './template';
import htmlRender from '@/layout/index';
import form from '@/component/form'
import us from './module.us'
import team from './module.team'
import value from './module.value'
import life from './module.life'
import history from './module.history'
import prize from './module.prize'

import bannerData from "@/data/about/company/banner";
import usData from "@/data/about/company/us";
import teamData from "@/data/about/company/team";
import valueData from "@/data/about/company/value";
import lifeData from "@/data/about/company/life";
import historyData from "@/data/about/company/history";
import prizeData from "@/data/about/company/prize";

const tabsData = [{
  name: '关于我们',
  anchor: 'us',
},{
  name: '创始团队',
  anchor: 'team',
},{
  name: '公司文化',
  anchor: 'value',
},{
  name: '生活节奏',
  anchor: 'life',
},{
  name: '成长轨迹',
  anchor: 'history',
},{
  name: '荣誉资质',
  anchor: 'prize',
}];

const formView = form()
const usView = us({usData})
const teamView = team({teamData})
const valueView = value({valueData})
const lifeView = life({lifeData})
const historyView = history({historyData})
const prizeView = prize({prizeData})

const container = template({formView, usView, teamView, valueView, lifeView, historyView, prizeView});
export default htmlRender({
  key: 'company',
  navKey: 'about', // 用于导航栏item active判断，即属于哪一个导航栏模块
  container,
  bannerData,
  tabsData,
});
