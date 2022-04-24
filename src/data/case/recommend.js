import p5 from '@/assets/images/product/logo/ai/wurenji.svg';
import p6 from '@/assets/images/product/logo/ai/qingshui.svg';
import p7 from '@/assets/images/product/logo/ai/shibie.svg';
import p8 from '@/assets/images/product/logo/ai/yuyin.svg';

const data = {
  content: [
    {
      key: 'product',
      title: '相关产品',
      desc: '',
      data: [
        {
          name: '企业的好帮手——AI语音',
          icon: p8,
          key: 'yuyin',
          alt: 'AI语音',
          href: '/product/ai/speech.html',
        },
        {
          name: '中国好生意——AI识别',
          icon: p7,
          key: 'shibie',
          alt: 'AI识别',
          href: '/product/ai/discriminate.html',
        },
        {
          name: '智能在线助手——清水',
          icon: p6,
          key: 'qingshui',
          alt: '清水',
          href: '/product/ai/qingshui.html',
        },
        {
          name: '智能辅助办公——智能无人机',
          icon: p5,
          key: 'uav',
          alt: '智能无人机',
          href: '/product/ai/uav.html',
        },
      ],
    },

    {
      key: 'solution',
      title: '行业解决方案',
      desc: '',
      data: [
        {
          name: '教育行业解决方案',
          href: '/solution/education.html',
        },
        {
          name: '游戏行业解决方案',
          href: '/solution/game.html',
        },
        {
          name: '大数据行业解决方案',
          href: '/solution/bigdata.html',
        },
      ],
    },
  ],
};
export default data;
