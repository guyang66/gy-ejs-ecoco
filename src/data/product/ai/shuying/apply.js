import a1 from '@/assets/images/product/ai/shuying/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/shuying/apply/a2.jpg';
import a3 from '@/assets/images/product/ai/shuying/apply/a3.jpg';

import p1 from '@/assets/images/product/logo/ai/tianyan.svg';
import p2 from '@/assets/images/product/logo/ai/xiyu.svg';
import p3 from '@/assets/images/product/logo/ai/yuyin.svg';
import p4 from '@/assets/images/product/logo/ai/shibie.svg';
import p5 from '@/assets/images/product/logo/ai/wurenji.svg';
import p6 from '@/assets/images/product/logo/ai/puti.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '人机对抗',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '人机对抗',
      desc: '当计算机出现后，人类开始真正有了一个可以模拟人类思维的工具，在以后的岁月中，无数科学家为这个目标努力着。如今人工智能已经不再是几个科学家的专利了，全世界几乎所有大学的计算机系都有人在研究这门学科，学习计算机的大学生也必须学习这样一门课程，在大家不懈的努力下，如今计算机似乎已经变得十分聪明了。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '90年代，人工智能研究发展出复杂的数学工具来解决特定的分支问题',
        '智能AGENT范式智能AGENT是一个会感知环境并作出行',
        '范式同时也给研究者提供一个与其他领域沟通的共同语言',
      ],
      products: [
        {
          name: '天眼杀',
          icon: p1,
          key: 'tianyan',
          alt: '天眼杀',
          href: '/product/ai/tianyan.html',
        },
        {
          name: '细雨',
          icon: p2,
          key: 'xiyu',
          alt: '细雨',
          href: '/product/ai/xiyu.html',
        },
      ],
    },
    {
      image: a2,
      alt: '即时学习api',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '即时学习api',
      desc: '即时学习api的人工智能如今不断地迅猛发展，尤其是2008年经济危机后，美日欧希望借机器人等实现再工业化，工业机器人以比以往任何时候更快的速度发展，更加带动了弱人工智能和相关领域产业的不断突破，很多必须用人来做的工作如今已经能用机器人实现。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '工智能就其本质而言，是对人的思维的信息过程的模拟',
        '智能是否可以使用高级符号表达，如词和想法',
        '而强人工智能则暂时处于瓶颈，还需要科学家们和人类的努力',
      ],
      products: [
        {
          name: 'AI语音',
          icon: p3,
          key: 'yuyin',
          alt: 'AI语音',
          href: '/product/ai/speech.html',
        },
        {
          name: 'AI识别',
          icon: p4,
          key: 'shibie',
          alt: 'AI识别',
          href: '/product/ai/discriminate.html',
        },
        {
          name: '智能无人机',
          icon: p5,
          key: 'uav',
          alt: '智能无人机',
          href: '/product/ai/uav.html',
        },
      ],
    },
    {
      image: a3,
      alt: '智能质壁分离',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '智能质壁分离',
      desc: '质壁分离是植物生活细胞所具有的一种特性（细胞体积大，成熟的细胞才能发生质壁分离）。当外界溶液的浓度比细胞液的浓度高时，细胞液的水分就会穿过原生质层向细胞外渗出，液泡的体积缩小，由于细胞壁的伸缩性有限，而原生质体的伸缩性较大，所以在细胞壁停止收缩后，原生质体继续收缩。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '细胞泡液的浓度<外界溶液浓度',
        '细胞质、细胞膜和液泡膜组成的原生质膜是半渗透的，具有选择透过性，相当于一层半透膜',
        '原生质层比细胞壁的伸缩性大',
        '细胞壁具有全渗透性',
      ],
      products: [
        {
          name: '菩提',
          icon: p6,
          key: 'puti',
          alt: '菩提',
          href: '/product/ai/puti.html',
        },
      ],
    },
  ],
};

export default data;
