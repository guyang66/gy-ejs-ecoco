import a1 from '@/assets/images/product/vegetables/cabbage/apply/a1.jpg';

import p1 from '@/assets/images/product/logo/vegetables/baicai.svg';
import p15 from '@/assets/images/product/logo/vegetables/xianggu.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '白菜猪肉饺子',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '白菜猪肉饺子',
      desc: '白菜猪肉饺子，把白菜洗净控干水份。白菜馅最怕的就是出水，所以控干水份也很重要。2，把白菜剁碎，在剁白菜的时候我们要尽量剁得细一些。然后加少许盐拌匀，这样处理是为了把白菜的水份煞出来。',
      buttonText: '联系我们',
      href: '/banana.html',
      solutions: [
        '白菜碎和猪肉馅拌匀馅就调好了利',
        '时蓉放到猪肉馅里，然后加入酱油，花椒粉，鸡粉，盐，再加入少量的植物油，将肉馅拌匀，要朝一个方向将肉馅搅上劲',
        '并含少量蛋白质、磷、钙、铁等；瘦肉主要含蛋白质',
      ],
      products: [
        {
          name: '白菜',
          icon: p1,
          key: 'baicai',
          alt: '白菜',
          href: '/product/vegetables/cabbage.html',
        },
        {
          name: '香菇',
          icon: p15,
          key: 'mushroom',
          alt: '香菇',
          href: '/product/vegetables/mushroom.html',
        },
      ],
    },
  ],
};

export default data;
