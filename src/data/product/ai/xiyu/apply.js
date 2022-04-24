import a1 from '@/assets/images/product/ai/xiyu/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/xiyu/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/ai/qiyeyun.svg';
import p2 from '@/assets/images/product/logo/ai/wurenji.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '罗摩祖师',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '罗摩祖师',
      desc: '令人闻风丧胆的暗杀组织“黑石”一直在追踪罗摩遗体。组织内有位一等一的高手，绰号细雨，因剑伤细密如雨而得名。在一次暗杀忠良后，经武功卓绝的修行和尚以命点化，放下屠刀，退隐江湖。然而，一入江湖便身不由己。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '城北卖布的民女曾静（杨紫琼饰），在媒人的撮合下',
        '与在京城中担任驿站马夫的江阿生（郑雨盛饰）结为夫妻',
        '谁想飞来横祸，令江阿生命悬一线。原来曾静并非凡人',
      ],
      products: [
        {
          name: '企业云',
          icon: p1,
          key: 'enterprise',
          alt: 'enterprise',
          href: '/product/ai/enterprise.html',
        },
      ],
    },
    {
      image: a2,
      alt: '转轮王',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '转轮王',
      desc: '暗杀组织“黑石”的头领，一手缔造了“黑石”江湖第一杀手组织的地位。想统一江湖，遗憾的是过于自大，看不清楚江湖形势，难以实现自己的愿望。武器点评：“转轮剑”其形似剑，力道之重确有若刀劈。此外“细雨”与“绽青”的辟水剑法，也是由转轮王所传授。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '十八岁的奇女子，新婚之夜仅因为丈夫“不行”就心狠手辣刺死丈夫全家',
        '平常对世事冷冷淡淡，独来独往，不轻易出手',
      ],
      products: [
        {
          name: '智能无人机',
          icon: p2,
          key: 'uav',
          alt: '智能无人机',
          href: '/product/ai/uav.html',
        },
      ],
    },
  ],
};

export default data;
