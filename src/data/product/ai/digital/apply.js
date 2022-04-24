import a1 from '@/assets/images/product/ai/digital/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/digital/apply/a2.png';

import p1 from '@/assets/images/product/logo/ai/qiyeyun.svg';
import p2 from '@/assets/images/product/logo/ai/suanfa.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '数字化改革',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '数字化改革',
      desc: '数字信号处理电路简单。它没有模拟电路里的各种调整，因而电路工作稳定、技术人员能够从日常的调整工作中解放出来。例如，在模拟摄像机里，需要使用100个以上的可变电阻。在有些地方调整这些可变电阻的同时，还需要调整摄像机的摄像特性。各种调整彼此之间又相互有微妙的影响，需要反复进行调整，才能够使摄像机接近于完善的工作状态。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '数字信号本身与模拟信号相比，确实受外部杂波的影响较小，但是它对被变换成数字信号的模拟信号本身的杂波却无法识别',
        '技术需要解决的难题，同时也是数字信号的基本问题',
        '就其容量而言，对集成电路来说，也是难于处理的',
      ],
      products: [
        {
          name: '企业云',
          icon: p1,
          key: 'enterprise',
          alt: '企业云',
          href: '/product/ai/enterprise.html',
        },
      ],
    },
    {
      image: a2,
      alt: '数字化上云',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '数字化上云',
      desc: '在传统信息系统中，数据安全主要关注数据的加密存储和传输、安全审计和容灾备份；而在云中， 除了要关注上述内容外，还有更多关注，云计算的特点决定了要实现集中式的数据存储，必须确保不同用户数据的安全隔离；云端的服务器可能会“宕机”，在这种情况下，如何高效地进行数据安全地迁移很关键；云计算采用租赁方式向用户提供资源，这意味着一个用户使用过的存储区域会被其他用户使用，因而必须解决好数据残留问题。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '在传统的信息系统中，一般采用加密方式来确保存储数据的安全性和隐私性',
        '在基础设施即服务云模式中，由于授权给用户使用的虚拟资源可以被用户完全控制视',
        '加密，数据无法处理；不加密，数据的安全性和隐私性得不到保证．',
      ],
      products: [
        {
          name: 'AI算法',
          icon: p2,
          key: 'algorithm',
          alt: 'AI算法',
          href: '/product/ai/algorithm.html',
        },
      ],
    },
  ],
};

export default data;
