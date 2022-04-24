import a1 from '@/assets/images/product/fruits/litchi/apply/a1.jpg';
import a2 from '@/assets/images/product/fruits/litchi/apply/a2.jpg';

import p2 from '@/assets/images/product/logo/fruits/hamigua.svg';
import p3 from '@/assets/images/product/logo/fruits/huolongguo.svg';
import p11 from '@/assets/images/product/logo/fruits/pingguo.svg';
import p12 from '@/assets/images/product/logo/fruits/pipa.svg';
import p13 from '@/assets/images/product/logo/fruits/putao.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '克塞音',
      height: 760,
      imageWidth: 712,
      imageHeight: 744,
      framework: null,
      title: '克塞音',
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
          name: '苹果',
          icon: p11,
          key: 'apple',
          alt: '苹果',
          href: '/product/fruits/apple.html',
        },
        {
          name: '枇杷',
          icon: p12,
          key: 'loquat',
          alt: '枇杷',
          href: '/product/fruits/loquat.html',
        },
        {
          name: '葡萄',
          icon: p13,
          key: 'grape',
          alt: '葡萄',
          href: '/product/fruits/grape.html',
        },
      ],
    },
    {
      image: a2,
      alt: '神奇小子',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      framework: null,
      title: '神奇小子',
      desc: '植株高大、假茎高260～300厘米，梳形整齐、果指数较多，通常每果穗有果10梳，果指200多个，果指长15～21厘米；果实品质柔滑香甜。品质好；在一般栽培条件下单株产量为20～40千克，个别高产单株达50千克。该品种产量高，品质好十分适宜高温多湿及肥水充足的地区栽种。',
      buttonText: '申请试用',
      href: '/banana.html',
      solutions: [
        '改良土壤，增施有机肥（如沤熟的人畜粪便，腐殖酸和氨基酸等）。',
        '经常翻土晒地，通过农事操作和阳光直照破坏地下虫卵。',
        '药剂防治：在发病初期或每年3、4月和10、11月份1.8%阿维菌素3000倍+40%辛硫磷600灌根或3%地虫杀星（每亩4千克）撒施。',
      ],
      products: [
        {
          name: '哈密瓜',
          icon: p2,
          key: 'hami',
          alt: '哈密瓜',
          href: '/product/fruits/hami.html',
        },
        {
          name: '火龙果',
          icon: p3,
          key: 'piyata',
          alt: '火龙果',
          href: '/product/fruits/piyata.html',
        },
      ],
    },
  ],
};

export default data;
