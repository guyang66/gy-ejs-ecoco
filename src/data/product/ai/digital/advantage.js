import a1 from '@/assets/images/product/ai/digital/advantage/a1.svg';
import a2 from '@/assets/images/product/ai/digital/advantage/a2.svg';
import a3 from '@/assets/images/product/ai/digital/advantage/a3.svg';
import a4 from '@/assets/images/product/ai/digital/advantage/a4.svg';
import cover from '@/assets/images/product/ai/digital/advantage/main.jpg';

const ad = {
  title: '产品优势',
  cover: cover,
  content: [
    {
      title: '数字信号',
      desc: null,
      cellHeight: 112,
      text: '数字信号与模拟信号相比，前者是加工信号。加工信号对于有杂波和易产生失真的外部环境和电路条件来说，具有较好的稳定性',
      icon: a1,
      alt: '技术顶尖',
    },
    {
      title: '易于压缩',
      desc: null,
      cellHeight: 112,
      text: '数字信号易于进行压缩。这一点对于数字化摄像机来说，是主要的优点',
      icon: a2,
      alt: '直流信号',
    },
    {
      title: '处理简单',
      desc: null,
      cellHeight: 112,
      text: '数字信号处理电路简单。它没有模拟电路里的各种调整，因而电路工作稳定、技术人员能够从日常的调整工作中解放出来',
      icon: a3,
      alt: '处理简单',
    },
    {
      title: '完善工作',
      desc: null,
      cellHeight: 112,
      text: '如果摄像机100%的数字化，就可以不需要调整了。对厂家来说，不需要熟练的工程师，还缩短了节目制作时间',
      icon: a4,
      alt: '高频率分辨',
    },
  ],
};
export default ad;
