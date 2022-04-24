import a1 from '@/assets/images/product/ai/discriminate/advantage/a1.svg';
import a2 from '@/assets/images/product/ai/discriminate/advantage/a2.svg';
import a3 from '@/assets/images/product/ai/discriminate/advantage/a3.svg';
import a4 from '@/assets/images/product/ai/discriminate/advantage/a4.svg';
import cover from '@/assets/images/product/ai/discriminate/advantage/main.jpg';

const ad = {
  title: '产品优势',
  cover: cover,
  content: [
    {
      title: '技术顶尖',
      desc: null,
      text: '假设采样频率为Fs，信号频率F，采样点数为N。那么FFT之后结果就是一个为N点的复数。每一个点就对应着一个频率点',
      icon: a1,
      alt: '技术顶尖',
    },
    {
      title: '直流信号',
      desc: null,
      text: '样1秒时间的信号并做FFT，则结果可以分析到1Hz，如果采样2秒时间的信号并做FFT，则结果可以分析到0.5Hz。如果要提高频率分辨力',
      icon: a2,
      alt: '直流信号',
    },
    {
      title: '心跳监测',
      desc: null,
      text: '就需要增加采样点数，这在一些实际的应用中是不现实的，需要在较短的时间内完成分析。解决这个问题的方法有频率细分法',
      icon: a3,
      alt: '心跳监测',
    },
    {
      title: '高频率分辨',
      desc: null,
      text: '该点的相位即是对应该频率下的信号的相位。相位的计算可用函数atan2(b,a)计算。atan2(b,a)是求坐标为(a,b)点的角度值，范围从-pi到pi',
      icon: a4,
      alt: '高频率分辨',
    },
  ],
};
export default ad;
