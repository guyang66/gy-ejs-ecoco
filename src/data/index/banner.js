import a1 from '@/assets/images/banner/index/1.png';
import a2 from '@/assets/images/banner/index/2.png';
import a3 from '@/assets/images/banner/index/3.png';
import a4 from '@/assets/images/banner/index/4.png';
import a5 from '@/assets/images/banner/index/5.png';

const data = {
  content: [
    {
      title: 'yy科技官网',
      key: 'banner_yy',
      desc: [
        '本网站所有图片素材均来自阿里巴巴矢量图标库或者淘宝、某图网购买，仅做个人学习使用。如有侵权请联系13588295865@163.com删除，欢迎大家一起学习进步',
      ],
      btnText: '查看视频',
      alt: 'yy科技官网',
      action: 'product-video',
      button: true,
      style: 'black',
      target: '_blank',
      backgroundImg: a1,
    },
    {
      title: '知识付费',
      key: 'banner_t1',
      desc: [
        'iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开发的便捷工具',
      ],
      btnText: '查看视频',
      action: 'product-video',
      alt: '知识付费',
      button: true,
      type: 'black',
      target: '_blank',
      backgroundImg: a2,
    },
    {
      title: '奈门摩尔',
      key: 'nevermore',
      desc: [
        '夜魇军团敏捷英雄',
        '影魔前期就能打出超高的魔法爆发，而后期的物理输出也相当不错',
      ],
      btnText: '立即加入',
      button: true,
      alt: '奈门摩尔',
      type: 'black',
      target: '_blank',
      href: '/form.html',
      backgroundImg: a3,
    },
    {
      title: '伊泽瑞尔',
      key: 'banner_t2',
      desc: [
        '如果我不懂规矩，那要我如何打破规矩',
        '伊泽瑞尔是一名非常灵活飘逸的英雄，双加成的技能使他不但可以走AD路线',
      ],
      button: true,
      alt: '伊泽瑞尔',
      href: '/about/news/9.html',
      btnText: '查看更多',
      type: 'white',
      target: '_blank',
      backgroundImg: a4,
    },
    {
      title: '《傲慢与偏见》',
      key: 'pride_prejudice',
      desc: [
        '根据简·奥斯汀的同名小说改编，该片讲述了19世纪初期英国的乡绅之女伊丽莎白·班内特五姐妹的爱情与择偶的故事',
      ],
      btnText: '立即购买',
      button: true,
      alt: '畅销小说',
      nofollow: true,
      href: '/about/news/13.html',
      target: '_blank',
      type: 'black',
      backgroundImg: a5,
    },
  ],
};

export default data;
