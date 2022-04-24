import a1 from '@/assets/images/product/vegetables/bilter/apply/a1.jpg';
import a2 from '@/assets/images/product/vegetables/bilter/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/vegetables/baicai.svg';
import p2 from '@/assets/images/product/logo/vegetables/caitai.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '浸种催芽',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '浸种催芽',
      desc: '先将种子用50-60℃的热水烫种，可把盆中水温调至50-60℃，再把种子慢慢倒入水中，边倒边搅拌，使种子受热均匀，又不烫伤，直至水温降至30℃左右时，停止搅拌，继续浸泡7-8小时，充分吸足水分，然后淘洗几遍，将种子表面的粘液污物洗去，沥干水分，用纱布或毛巾包好，放于恒温或其它温暖处。',
      buttonText: '联系我们',
      href: '/banana.html',
      solutions: [
        '保持在30-35℃催芽。催芽期间，每天用30-35℃温水清',
        '面沾污物，使水分和氧气容易透进，加快萌芽速度，这样经过3-4天，大部分种子',
        '点播即可。但为了防止种子带菌',
      ],
      products: [
        {
          name: '白菜',
          icon: p1,
          key: 'baicai',
          alt: '白菜',
          href: '/product/vegetables/cabbage.html',
        },
      ],
    },
    {
      image: a2,
      alt: '营养钵育苗',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '营养钵育苗',
      desc: '首先将装好营养土的营养钵排放在苗床上，再浇足底水，待水渗下后，撒上一薄层（0.5-1厘米）干的营养土，然后将萌芽的种子播入钵内，每钵播一粒，播后覆盖营养土2厘米，最后用塑料薄膜盖严，提高床温，使其能维持在25-30℃。出苗后略通风降温，保持在20-25℃，晴天气温在20℃以上种。',
      buttonText: '申请试用',
      href: '/banana.html',
      solutions: [
        '即生势较旺，侧枝较多，生育期较长，必须有一个良好的群体结构应',
        '薄膜覆盖，实行膜下水肥一体化灌溉技术',
        '植植期一般为7-8月，此期气候适宜，易管理，采收损',
      ],
      products: [
        {
          name: '菜苔',
          icon: p2,
          key: 'bolt',
          alt: '菜苔',
          href: '/product/vegetables/bolt.html',
        },
      ],
    },
  ],
};

export default data;
