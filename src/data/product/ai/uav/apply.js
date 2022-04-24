import a1 from '@/assets/images/product/ai/uav/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/uav/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/ai/yuyin.svg';
import p2 from '@/assets/images/product/logo/ai/shibie.svg';
import p3 from '@/assets/images/product/logo/ai/suanfa.svg';
import p4 from '@/assets/images/product/logo/ai/qingshui.svg';
const data = {
  content: [
    {
      image: a1,
      alt: '暗隐之径',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '暗隐之径',
      desc: '暗隐之径：而整个太阳系则是相对于北极星（即紫微星）位置不变的在银河系中做螺旋运转，这就形成了因日月五星运行而造成天星之间位置关系的改变，进而改变了特定星宿对地球及地上万事万物的影响，所以古人通过夜观天象来预测吉凶。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '魔芋喜温暖湿润，适温为20～30℃，25℃为最适温度，适宜相对湿度',
        '魔芋性寒、味平，入药可消肿去毒，主治痈疮、肿毒、瘰疬等症',
        '利用价值较高的魔芋有花魔芋、白魔芋、田阳魔芋、西盟魔芋',
      ],
      products: [
        {
          name: 'AI语音',
          icon: p1,
          key: 'speech',
          alt: 'speech',
          href: '/product/ai/speech.html',
        },
        {
          name: 'AI识别',
          icon: p2,
          key: 'discriminate',
          alt: 'discriminate',
          href: '/product/ai/discriminate.html',
        },
        {
          name: 'AI算法',
          icon: p3,
          key: 'algorithm',
          alt: 'algorithm',
          href: '/product/ai/algorithm.html',
        },
      ],
    },
    {
      image: a2,
      alt: '巨量之舰',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '巨量之舰',
      desc: '巨量之舰。璐选择土层深厚、疏松的缓坡砂壤土种植，前作收后及时进行翻挖晒垡，较窄的台地和较陡的坡地可行平墒塘播或条播，平地或缓坡地行垄栽。种前每亩用生石灰25-40 kg、硫酸铜2 kg撒施土表翻挖，或在播种时用70%敌克松500倍液喷施种植沟，进行灭菌处理，并亩用2.5%的敌百虫2-2.5 kg拌药土撒施在种植沟或塘内杀灭土壤害虫。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '于魔芋展叶封行后不提倡过多的农事操作',
        '魔芋播种时已在地表覆盖了松毛、秸秆，抑制了大量杂草的生恐',
        '病害主要有软腐病、根腐病、叶枯病和白绢病',
      ],
      products: [
        {
          name: '清水',
          icon: p4,
          key: 'qingshui',
          alt: 'qingshui',
          href: '/product/ai/qingshui.html',
        },
      ],
    },
  ],
};

export default data;
