import a1 from '@/assets/images/product/ai/algorithm/advantage/a1.svg';
import a2 from '@/assets/images/product/ai/algorithm/advantage/a2.svg';
import a3 from '@/assets/images/product/ai/algorithm/advantage/a3.svg';
import a4 from '@/assets/images/product/ai/algorithm/advantage/a4.svg';
import cover from '@/assets/images/product/ai/algorithm/advantage/main.jpg';

const ad = {
  title: '产品优势',
  cover: cover,
  content: [
    {
      title: '确切性',
      desc: null,
      text: '算法（Algorithm）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，算法代表着用系统的方法描述解决问题的策略机制',
      icon: a1,
      alt: '确切性',
    },
    {
      title: '有穷性',
      desc: null,
      text: '算法的有穷性是指算法必须能在执行有限个步骤之后终止，算法的每一步骤必须有确切的定义',
      icon: a2,
      alt: '有穷性',
    },
    {
      title: '可行性',
      desc: null,
      text: '一个算法有0个或多个输入，以刻画运算对象的初始情况，所谓0个输入是指算法本身定出了初始条件',
      icon: a3,
      alt: '可行性',
    },
    {
      title: '输出项',
      desc: null,
      text: '算法中执行的任何计算步骤都是可以被分解为基本的可执行的操作步骤，即每个计算步骤都可以在有限时间内完成（也称之为有效性）',
      icon: a4,
      alt: '输出项',
    },
  ],
};
export default ad;
