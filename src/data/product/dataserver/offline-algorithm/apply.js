import a1 from '@/assets/images/product/dataserver/offline-algorithm/apply/a1.jpg';
import a2 from '@/assets/images/product/dataserver/offline-algorithm/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/dataserver/lixiankaifa.svg';
import p2 from '@/assets/images/product/logo/dataserver/shishikaifa.svg';
import p3 from '@/assets/images/product/logo/dataserver/shenjingwangluo.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '离线分类算法',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '离线分类算法',
      desc: '然而十八路诸侯各怀异心，联盟开始分崩离析。袁绍欲谋取长沙太守孙坚手中的传国玉玺，联合刘表将孙坚杀死。同时，袁绍又在界桥之战中击败公孙瓒，成为北方最强势力。此时的曹操也广招贤才，积聚实力。群雄逐鹿的雏形初成。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '姜维继承诸葛亮遗志继续兴兵伐魏，先后九次出征中原',
        '东吴自孙权死后，内乱不止。吴主孙亮被独揽大权的孙琳所废',
        '却因为国力衰微和奸臣陷害，只能退避沓中屯田',
      ],
      products: [
        {
          name: '实时开发',
          icon: p2,
          key: 'sskf',
          alt: '实时开发',
          href: '/product/dataserver/onlinedevelop.html',
        },
        {
          name: '离线开发',
          icon: p1,
          key: 'lxkf',
          alt: '离线开发',
          href: '/product/dataserver/offlinedevelop.html',
        },
      ],
    },
    {
      image: a2,
      alt: '离线分子引擎',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '离线分子引擎',
      desc: '手性分子是指与其镜像不相同不能互相重合的具有一定构型或构象的分子。手性一词来源于希腊语“手”（Cheiro），由Cahn等提出用“手性”表达旋光性分子和其镜影不能相叠的立体形象的关系。手性等于左右手的关系，彼此不能互相重合。所有的手性分子都具有光学活性，同时所有具有光学活性的化合物的分子。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '手性是宇宙间的普遍特征，体现在生命的产生和演变过程中',
        '自然界存在的糖以及核酸、淀粉、纤维素中的糖单元，都为D-构型',
        '20世纪60年代的“反应停悲剧”就是一个突出的例子',
      ],
      products: [
        {
          name: '神经网络',
          icon: p3,
          key: 'sjwl',
          alt: '神经网络',
          href: '/product/dataserver/neuralnetwork.html',
        },
      ],
    },
  ],
};

export default data;
