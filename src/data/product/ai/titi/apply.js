import a1 from '@/assets/images/product/ai/titi/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/titi/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/ai/colgi.svg';
import p2 from '@/assets/images/product/logo/ai/shibie.svg';
import p3 from '@/assets/images/product/logo/ai/xiyu.svg';
import p4 from '@/assets/images/product/logo/ai/qingshui.svg';
import p5 from '@/assets/images/product/logo/ai/suanfa.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '守望者女猎流',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '守望者女猎流',
      desc: '战术体系思想：纯女猎流从ROC起就广为流传，但TFT由于甲的更改，HT的天敌逐渐增多，幸好在初期，HT还是最强的初级兵种，远程的肉搏近战攻击（对农民可是加成伤害的噢），能接受虎妞的光环。作为NE玩家，女猎流应该是最基本的战术了吧，配合不同的英雄，风格迥异。好了，我就专门讲一下如何发展。游戏开始后，4W采金，1W造祭坛。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '那就是科技流还是暴兵流了。科技流的话就再补一个月井，然后第一时间升2本',
        '暴兵流的话就再补一个BR若干BM月井若干小精灵（到处放）',
        '没HP就隐身。如果是HUM速矿的话，把HT分成2队',
      ],
      products: [
        {
          name: 'colgi',
          icon: p1,
          key: 'colgi',
          alt: 'colgi',
          href: '/product/ai/colgi.html',
        },
        {
          name: 'AI识别',
          icon: p2,
          key: 'discriminate',
          alt: 'discriminate',
          href: '/product/ai/discriminate.html',
        },
      ],
    },
    {
      image: a2,
      alt: 'AC流',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: 'AC流',
      desc: 'AC严格意义上说不算战术，在雇佣兵遇到难度的时候，AC就是NE玩家最喜欢的过度兵种，而AC的存活率也侧面反映了一个玩家的水平，利用好AC的隐身，对战局也是至关重要的。而真正把AC作为主力RUSH的还是娜迦AC流。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '和普通的中立开局一样，兵营-月井-祭坛-月井',
        '只是又补一个兵营，当NAGA出来之后，轻巧的MF，升到2级，这时的AC数量已小具规模',
        '压制，是不二选择，冰箭减速加AC齐射可以点倒任意一个单',
        '叉型闪电的威力也不容小视，小精灵可以在对手基地附近造起古树商店，给对手以压迫式的感觉，一举将对手扼杀在前期',
      ],
      products: [
        {
          name: '细雨',
          icon: p3,
          key: 'xiyu',
          alt: '细雨',
          href: '/product/ai/xiyu.html',
        },
        {
          name: '清水',
          icon: p4,
          key: 'qinghsui',
          alt: '清水',
          href: '/product/ai/qinghsui.html',
        },
        {
          name: 'AI算法',
          icon: p5,
          key: 'uaalgorithmv',
          alt: 'algorithm',
          href: '/product/ai/algorithm.html',
        },
      ],
    },
  ],
};

export default data;
