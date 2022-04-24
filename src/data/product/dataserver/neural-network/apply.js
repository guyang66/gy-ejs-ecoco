import a1 from '@/assets/images/product/dataserver/neural-network/apply/a1.jpg';
import a2 from '@/assets/images/product/dataserver/neural-network/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/dataserver/lixiankaifa.svg';
import p2 from '@/assets/images/product/logo/dataserver/shishikaifa.svg';
import p3 from '@/assets/images/product/logo/dataserver/lixiansuanfa.svg';
import p4 from '@/assets/images/product/logo/dataserver/tuijiansuanfa.svg';
import p5 from '@/assets/images/product/logo/dataserver/julei.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '三突触',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '三突触',
      desc: '季风气候是我国气候的主要特点。季风气候是大陆性气候与海洋性气候的混合型。夏季受来自海洋的暖湿气流的影响，高温潮湿多雨，气候具有海洋性。冬季受来自大陆的干冷气流的影响，气候寒冷，干燥少雨，气候具有大陆性。在季风气候条件下，夏季潮湿多雨，冬季干燥少雨。季风气候的高温与多雨时期基本一致。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '热带雨林气候（也称赤道雨林气候）的特点是：全年高温多雨',
        '而我国的西北地区年降水量多在400毫米以下',
      ],
      products: [
        {
          name: '实时开发',
          icon: p2,
          key: 'sskf',
          alt: '实时开发',
          href: '/product/dataserver/onlinedevelop.html',
        },
        {
          name: '离线开发',
          icon: p1,
          key: 'lxkf',
          alt: '离线开发',
          href: '/product/dataserver/offlinedevelop.html',
        },
        {
          name: '离线算法',
          icon: p3,
          key: 'offlinealgorithm',
          alt: '离线算法',
          href: '/product/dataserver/offlinealgorithm.html',
        },
        {
          name: '推荐算法',
          icon: p4,
          key: 'lxkf',
          alt: 'recommend',
          href: '/product/dataserver/recommend.html',
        },
        {
          name: '聚类算法',
          icon: p5,
          key: 'cluster',
          alt: '聚类算法',
          href: '/product/dataserver/cluster.html',
        },
      ],
    },
    {
      image: a2,
      alt: '量子神经元',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '量子神经元',
      desc: '从中国夏季7月等温线图上可以看出：除了地势高的青藏高原和天山以外，大部地区平均气温在20℃以上，南方许多地方平均气温在28℃以上；新疆吐鲁番盆地7月平均气温高达32℃，是中国夏季的炎热中心。所以除青藏高原等地势高的地区外，全国普遍高温，南北气温差别不大，是中国夏季气温分布的特征。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '我国的降水主要是由东南季风带来的，因此我国的降水在地理空间上呈现“由东南沿海往西北内陆递减”的特征',
        '其形成原因有：夏季阳光直射点在北半球，中国各地获得的太阳光热普',
        '加之北方因纬度较高，白昼又比较长，获得的光热相对增多，缩短了与南方的气温差距，因而全国普遍高温',
      ],
      products: [
        {
          name: '聚类算法',
          icon: p5,
          key: 'cluster',
          alt: '聚类算法',
          href: '/product/dataserver/cluster.html',
        },
      ],
    },
  ],
};

export default data;
