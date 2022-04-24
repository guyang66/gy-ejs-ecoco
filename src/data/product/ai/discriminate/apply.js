import a1 from '@/assets/images/product/ai/discriminate/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/discriminate/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/ai/colgi.svg';
import p3 from '@/assets/images/product/logo/ai/titi.svg';
import p4 from '@/assets/images/product/logo/ai/puti.svg';
import p5 from '@/assets/images/product/logo/ai/wurenji.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '数字化改革',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '机器智能识别',
      desc: '物体的识别主要指的是对三维世界的客体及环境的感知和认识，属于高级的计算机视觉范畴。它是以数字图像处理与识别为基础的结合人工智能、系统学等学科的研究方向，其研究成果被广泛应用在各种工业及探测机器人上。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '图像识别问题的数学本质属于模式空间到类别空间的映射问题',
        '统计模式识别、结构模式识别、模糊模式识别',
        '至今借助于各种理论提出了数以千计的分割算法，而且这方面的研究仍然在积极地进行',
      ],
      products: [
        {
          name: 'colgi',
          icon: p1,
          key: 'colgi',
          alt: 'colgi',
          href: '/product/ai/colgi.html',
        },
      ],
    },
    {
      image: a2,
      alt: '数字化上云',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '人脸画像识别',
      desc: '人的图像识别能力是很强的。图像距离的改变或图像在感觉器官上作用位置的改变，都会造成图像在视网膜上的大小和形状的改变。即使在这种情况下，人们仍然可以认出他们过去知觉过的图像。甚至图像识别可以不受感觉通道的限制,当别人在他背上写字时，他也可认出这个字来。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '图像识别问题的数学本质属于模式空间到类别空间的映射问题',
        '研究已经有几十年的历史，一直都受到人们的高度重视',
        '至今借助于各种理论提出了数以千计的分割算法，而且这方面的研究仍然在积极地进行着',
      ],
      products: [
        {
          name: 'titi',
          icon: p3,
          key: 'titi',
          alt: 'titi',
          href: '/product/ai/titi.html',
        },
        {
          name: '菩提',
          icon: p4,
          key: 'puti',
          alt: '菩提',
          href: '/product/ai/puti.html',
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
  ],
};

export default data;
