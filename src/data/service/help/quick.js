import a1 from '@/assets/images/service/help/quick/a1.svg';
import a2 from '@/assets/images/service/help/quick/a2.svg';
import a3 from '@/assets/images/service/help/quick/a3.svg';

const data = {
  content: [
    {
      index: 0,
      key: 'contents',
      title: '导航目录',
      desc: '全局搜索查询',
      icon: a1,
      alt: '导航目录',
      data: [
        '新手入门',
        '资料搜索',
        '使用手册',
        '产品手册',
        '技术指南',
        '产品更新',
      ],
      btnText: '查看更多',
    },
    {
      index: 1,
      key: 'resource',
      title: '资源整合',
      desc: '帮助企业治理问题',
      icon: a2,
      alt: '导航目录',
      data: [
        '问题反馈',
        '资料下载',
        '新闻发布',
        '产品问题解决',
        '合作伙伴邀请',
      ],
      btnText: '查看更多',
    },
    {
      index: 2,
      key: 'common',
      title: '常见功能',
      desc: '为客户提供最贴切的服务',
      icon: a3,
      alt: '常见功能',
      data: [
        '客户成交',
        '经营分析',
        '数据上云',
        '数据分析',
        '大数据指南',
        '产品续费',
      ],
      btnText: '查看更多',
    },
  ],
};

export default data;
