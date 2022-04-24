import a1 from '@/assets/images/solution/manufacture/pain/p1.svg';
import a2 from '@/assets/images/solution/manufacture/pain/p2.svg';
import a3 from '@/assets/images/solution/manufacture/pain/p3.svg';
import a4 from '@/assets/images/solution/manufacture/pain/p4.svg';

const ad = {
  title: '行业痛点',
  desc: '',
  content: [
    {
      title: '审核较慢',
      desc: null,
      text: '不能保证解是最佳的。因为贪心算法总是从局部出发，并没从整体考虑',
      icon: a1,
      alt: '审核较慢',
    },
    {
      title: '代码逻辑差',
      desc: null,
      text: '算法一般用来解决求最大或最小解，思路没有完全打开，处于备用阶段的',
      icon: a2,
      alt: '代码逻辑差',
    },
    {
      title: '文档实现差',
      desc: null,
      text: '只能确定某些问题的可行性范围，最优解可能在一开始就被排除在外，无法保证',
      icon: a3,
      alt: '文档实现差',
    },
    {
      title: '不易沉淀',
      desc: null,
      text: '问题的整体最优解可通过一系列局部的最优解的选择达到，改路径并非不可替代',
      icon: a4,
      alt: '不易沉淀',
    },
  ],
};
export default ad;
