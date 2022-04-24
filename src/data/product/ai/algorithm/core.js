import a1 from '@/assets/images/product/ai/algorithm/core/c1.svg';
import a2 from '@/assets/images/product/ai/algorithm/core/c2.svg';
import a3 from '@/assets/images/product/ai/algorithm/core/c3.svg';
import a4 from '@/assets/images/product/ai/algorithm/core/c4.svg';

const core = {
  title: '核心功能',
  bg: '#F4F4F4',
  content: [
    {
      title: '基于规则',
      text: '同时采用多种推荐技术给出多种推荐结果，为用户提供参考,根据问题背景和实际情况或要求决定变换采用不同的推荐技术',
      icon: a1,
      alt: '基于规则',
    },
    {
      title: '协同过滤',
      text: '图像识别可能是以图像的主要特征为基础的。每个图像都有它的特征,如字母A有个尖,P有个圈、而Y的中心有个锐角等',
      icon: a2,
      alt: '协同过滤',
    },
    {
      title: '基于效用',
      text: '组合推荐的一个最重要原则就是通过组合来避免或弥补各自推荐技术的弱点，但在某一具体问题中并不见得都有效',
      icon: a3,
      alt: '基于效用',
    },
    {
      title: '基于知识',
      text: '由于各种推荐方法都有优缺点，所以在实际中，组合推荐（Hybrid Recommendation）经常被采用。研究和应用最多的是内容推荐和协同过滤推荐的组合',
      icon: a4,
      alt: '基于知识',
    },
  ],
};
export default core;
