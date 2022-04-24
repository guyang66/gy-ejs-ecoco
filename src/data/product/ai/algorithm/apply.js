import a1 from '@/assets/images/product/ai/algorithm/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/algorithm/apply/a2.jpg';
import a3 from '@/assets/images/product/ai/algorithm/apply/a3.jpg';

import p1 from '@/assets/images/product/logo/ai/xiyu.svg';
import p2 from '@/assets/images/product/logo/ai/shuying.svg';
import p3 from '@/assets/images/product/logo/ai/qiyeyun.svg';
import p4 from '@/assets/images/product/logo/ai/shibie.svg';
import p5 from '@/assets/images/product/logo/ai/wurenji.svg';
import p6 from '@/assets/images/product/logo/ai/yuyin.svg';
import p7 from '@/assets/images/product/logo/ai/qingshui.svg';
const data = {
  content: [
    {
      image: a1,
      alt: '推荐系统算法',
      height: 1024,
      imageWidth: 712,
      imageHeight: 1008,
      title: '推荐系统算法',
      desc: '基于协同过滤的推荐算法（Collaborative Filtering Recommendation）技术是推荐系统中应用最早和最为成功的技术之一。它一般采用最近邻技术，利用用户的历史喜好信息计算用户之间的距离，然后利用目标用户的最近邻居用户对商品评价的加权评价值来预测目标用户对特定商品的喜好程度，从而根据这一喜好程度来对目标用户进行推荐。',
      buttonText: '联系我们',
      href: '/form.html',
      scenes: [
        '由于各种推荐方法都有优缺点，所以在实际中，组合推荐（Hybrid Recommendation）经常被采用。研究和应用最多的是内容推荐和协同过滤推荐的组合',
        '最简单的做法就是分别用基于内容的方法和协同过滤推荐方法去产生一个推荐预测结果，然后用某方法组合其结果',
      ],
      solutions: [
        '基于协同过滤的推荐算法最大优点是对推荐对象没有特殊的要求，能处理非结构化的复杂对象，如音乐、电影',
        '为一用户找到他真正感兴趣的内容的好方法是首先找到与此用户有相似兴趣的其他用户，然后将他们感兴趣的内容推荐给此用户',
        '其基本思想非常易于理解，在日常生活中，人们往往会利用好朋友的推荐来进行一些选择',
        '于协同过滤的推荐系统可以说是从用户的角度来进行相应推荐的',
      ],
      products: [
        {
          name: 'AI语音',
          icon: p6,
          key: 'yuyin',
          alt: 'AI语音',
          href: '/product/ai/speech.html',
        },
        {
          name: 'AI识别',
          icon: p4,
          key: 'shibie',
          alt: 'AI识别',
          href: '/product/ai/discriminate.html',
        },
        {
          name: '细雨',
          icon: p1,
          key: 'xiyu',
          alt: '细雨',
          href: '/product/ai/xiyu.html',
        },
        {
          name: '清水',
          icon: p7,
          key: 'qingshui',
          alt: '清水',
          href: '/product/ai/qingshui.html',
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
    {
      image: a2,
      alt: '贪心算法',
      height: 1024,
      imageWidth: 712,
      imageHeight: 1008,
      title: '贪心算法',
      desc: '贪心算法是一种对某些求最优解问题的更简单、更迅速的设计技术。贪心算法的特点是一步一步地进行，常以当前情况为基础根据某个优化测度作最优选择，而不考虑各种可能的整体情况，省去了为找最优解要穷尽所有可能而必须耗费的大量时间。贪心算法采用自顶向下，以迭代的方法做出相继的贪心选择，每做一次贪心选择，就将所求问题简化为一个规模更小的子问题，通过每一步贪心选择，可得到问题的一个最优解。虽然每一步上都要保证能获得局部最优解，但由此产生的全局解有时不一定是最优的，所以贪心算法不要回溯。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '贪心算法是一种对某些求最优解问题的更简单、更迅速的设计技术',
        '贪心算法可解决的问题通常大部分都有如下的特性',
        '至今借助于各种理论提出了数以千计的分割算法，而且这方面的研究仍然在积极地进行着',
      ],
      products: [
        {
          name: '数影',
          icon: p3,
          key: 'shuying',
          alt: '数影',
          href: '/product/ai/shuying.html',
        },
      ],
    },
    {
      image: a3,
      alt: '模拟退火算法',
      height: 1024,
      imageWidth: 712,
      imageHeight: 1008,
      title: '模拟退火算法',
      desc: '模拟退火来自冶金学的专有名词退火。退火是将材料加热后再经特定速率冷却，目的是增大晶粒的体积，并且减少晶格中的缺陷。材料中的原子原来会停留在使内能有局部最小值的位置，加热使能量变大，原子会离开原来位置，而随机在其他位置中移动。退火冷却时速度较慢，使得原子有较多可能可以找到内能比原先更低的位置。',
      buttonText: '联系我们',
      href: '/form.html',
      scenes: [
        '推荐算法已经应用到了各个领域的网站中，包括图书、音乐、视频、新闻、电影、地图等等',
        '推荐系统不止给这些互联网商家带来了巨大的附加利益，同时也提高了用户满意度，增加了用户黏性',
      ],
      solutions: [
        '第二步是计算与新解所对应的目标函数差。因为目标函数差仅由变换部分产生，所以目标函数差的计算最好按增量计算。事实表明，对大多数应用而言，这是计算目标函数差的最快方法',
        '模拟退火算法可以分解为解空间、目标函数和初始解三部分',
        '第一步是由一个产生函数从当前解产生一个位于解空间的新解',
        '模拟退火算法与初始值无关，算法求得的解与初始解状态S(是算法迭代的起点)无关',
      ],
      products: [
        {
          name: '企业云',
          icon: p2,
          key: 'enterprise',
          alt: '企业云',
          href: '/product/ai/enterprise.html',
        },
      ],
    },
  ],
};

export default data;
