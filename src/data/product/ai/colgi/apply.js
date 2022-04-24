import a1 from '@/assets/images/product/ai/colgi/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/colgi/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/ai/shuziyun.svg';
import p2 from '@/assets/images/product/logo/ai/suanfa.svg';
import p3 from '@/assets/images/product/logo/ai/titi.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '双子系统',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '双子系统',
      desc: '双子系统行员库奇最爱两件事物：一是飞行，二是自己英俊的小胡子，排名不分先后。离开班德尔城以后，他在皮尔特沃夫安家，从此爱上了这里奇异壮观的各式机器。他决定投身于飞行装置的开发事业，带领一群老练飞行员组成了一只空中防御力量。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '炸弹越大越好，引线越短越好，带着这种喜好的约德尔人吉格斯就是天生的爆炸狂人',
        '他曾是皮尔特沃夫一位发明家的助手，不过因为自己千篇一律的生活而感到无聊，后来和一个名为金克丝的蓝头发小疯子交上了朋友',
        '恐吓一直伴随着炼金男爵和普通市民之流',
      ],
      products: [
        {
          name: '数字云',
          icon: p1,
          key: 'digital',
          alt: 'digital',
          href: '/product/ai/digital.html',
        },
        {
          name: 'AI算法',
          icon: p2,
          key: 'algorithm',
          alt: 'algorithm',
          href: '/product/ai/algorithm.html',
        },
      ],
    },
    {
      image: a2,
      alt: '能量守恒系统',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '能量守恒系统',
      desc: '就是她云游符文之地的伙伴。璐璐可以突发奇想地重塑现实，改变世界的本质结构，改造这个平凡的物质领域中任何让她感觉是限制的东西。虽然其他人对她的魔法颇有微词，往好听了说是一种异象，往难听了说是一种危害。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '均衡教派中，有一位资历最老的成员——约德尔人凯南',
        '于魔法的约德尔巫师。几乎没有哪个凡人敢碰的恐',
        '至今数授是一个才华横溢但古怪反常的约德尔科学家',
      ],
      products: [
        {
          name: 'titi',
          icon: p3,
          key: 'titi',
          alt: 'titi',
          href: '/product/ai/titi.html',
        },
      ],
    },
  ],
};

export default data;
