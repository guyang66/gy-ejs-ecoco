import a1 from '@/assets/images/product/ai/speech/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/speech/apply/a2.png';

import p1 from '@/assets/images/product/logo/ai/qingshui.svg';
import p2 from '@/assets/images/product/logo/ai/shibie.svg';
import p3 from '@/assets/images/product/logo/ai/suanfa.svg';
import p4 from '@/assets/images/product/logo/ai/tianyan.svg';

const data = {
  content: [
    {
      image: a1,
      alt: 'QJ语音',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: 'QJ语音',
      desc: '因FFT是为时序电路而设计的，因此，控制信号要包括时序的控制信号及存储器的读写地址，并产生各种辅助的指示信号。同时在计算模块的内部，为保证高速，所有的乘法器都须始终保持较高的利用率。这意味着在每一个时钟来临时都要向这些单元输入新的操作数，而这一切都需要控制信号的紧密配合。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '为了实现FFT的流形运算，在运算的同时，存储器也要接收数据',
        '这可以采用乒乓RAM的方法来完成。这种方式决定了实现FFT运算的最大时间',
        '其接收时间为4096个数据周期,这样FFT的最大运算时间就是4096个数据周期',
      ],
      products: [
        {
          name: 'AI算法',
          icon: p3,
          key: 'algorithm',
          alt: 'AI算法',
          href: '/product/ai/algorithm.html',
        },
        {
          name: 'AI识别',
          icon: p2,
          key: 'discriminate',
          alt: 'AI识别',
          href: '/product/ai/discriminate.html',
        },
        {
          name: '清水',
          icon: p1,
          key: 'qingshui',
          alt: '清水',
          href: '/product/ai/qingshui.html',
        },
      ],
    },
    {
      image: a2,
      alt: '极速语音',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '极速语音',
      desc: '傅立叶变换是一种分析信号的方法，它可分析信号的成分，也可用这些成分合成信号。许多波形可作为信号的成分，比如正弦波、方波、锯齿波等，傅立叶变换用正弦波作为信号的成分。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '复数乘法器就可完成这三个复数乘法，大大节省了硬件资源',
        '根据旋转因子的对称性和周期性，在利用ROM存储旋转因子时',
        '实际上只需做三个复数乘法运算，即只须计算BWk1、CWk2和DWk3的值即可',
      ],
      products: [
        {
          name: '天眼杀',
          icon: p4,
          key: 'tianyan',
          alt: '天眼杀',
          href: '/product/ai/tianyan.html',
        },
      ],
    },
  ],
};

export default data;
