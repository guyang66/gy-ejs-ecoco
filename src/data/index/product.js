import a1 from '@/assets/images/index/product/a1.svg';
import a2 from '@/assets/images/index/product/a2.svg';
import a3 from '@/assets/images/index/product/a3.svg';
import a4 from '@/assets/images/index/product/a4.svg';
import a5 from '@/assets/images/index/product/a5.svg';
import a6 from '@/assets/images/index/product/a6.svg';

const data = {
  title: '产品体系',
  desc: '打造全域产品，帮助企业快速锁定业务',
  content: [
    {
      name: '水果云',
      desc: '长久以来人们对“水果之王”的争论不休。其实就各种水果的营养价值而言，很多水果的营养价值都相当高，不分伯仲',
      icon: a2,
      iconH: a1,
      alt: '水果',
      button: [
        {
          text: '了解详情',
          href: '/',
        },
      ],
    },
    {
      name: '蔬菜联盟',
      desc: '蔬菜是指可以做菜、烹饪成为食品的一类植物或菌类，蔬菜是人们日常饮食中必不可少的食物之一',
      icon: a4,
      iconH: a3,
      alt: '蔬菜联盟',
      button: [
        {
          text: '了解详情',
          href: '/',
        },
      ],
    },
    {
      name: '智能引擎',
      desc: '它采用人工智能算法——支持向量机，具备“自学习、自进化”能力，免疫90%以上的加壳和变种病毒',
      icon: a6,
      iconH: a5,
      alt: '智能引擎',
      button: [
        {
          text: '了解详情',
          href: '/',
        },
      ],
    },
  ],
};
export default data;
