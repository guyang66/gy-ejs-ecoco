import a1 from '@/assets/images/product/fruits/apple/apply/a1.jpg';

import p18 from '@/assets/images/product/logo/fruits/wuhuaguo.svg';
import p17 from '@/assets/images/product/logo/fruits/xiangjiao.svg';
import p20 from '@/assets/images/product/logo/fruits/youzi.svg';
import p21 from '@/assets/images/product/logo/fruits/zao.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '圣诞树装扮',
      height: 760,
      imageWidth: 712,
      imageHeight: 744,
      framework: null,
      title: '甘地红油桃',
      desc: '高州矮香蕉属矮干型香牙蕉，是高州市地方品种之一。植株假茎矮而粗壮，假茎高150～170厘米；叶宽大、叶柄短、叶鞘距密；果槽短，果梳距密、果指数多、果型稍小、果指长16～20厘米，果实品质较优良。',
      buttonText: '联系我们',
      href: '/banana.html',
      scenes: [
        '防治病害首先要做好冬季清园工作，结合冬季修剪及时清除病枝',
        '夏季以疏除副主枝上抽生的直立性徒长枝和过密枝为主',
      ],
      solutions: [
        '选择排水良好、土层深厚、PH值5.5～6.5微酸性砂壤或砂砾壤土，进行挖大穴定植。',
        '发病初期使用柔水通3000倍+70%纳米欣700倍+80%大生500倍连续喷施2～3次（可兼防叶斑病）。',
        '发病中期使用12%腈菌唑800倍+24%应得1000倍+50%甲基托布津（水剂）600倍喷雾2～3次，每7天一次。',
      ],
      products: [
        {
          name: '柚子',
          icon: p20,
          key: 'shaddock',
          alt: '柚子',
          href: '/product/fruits/shaddock.html',
        },
        {
          name: '青枣',
          icon: p21,
          key: 'jujube',
          alt: '青枣',
          href: '/product/fruits/jujube.html',
        },
        {
          name: '香蕉',
          icon: p17,
          key: '香蕉',
          alt: '无花果',
          href: '/product/fruits/banana.html',
        },
        {
          name: '火龙果',
          icon: p18,
          key: 'piyata',
          alt: '火龙果',
          href: '/product/fruits/piyata.html',
        },
      ],
    },
  ],
};

export default data;
