const menus = [
  {
    name: 'index',
    path: 'page/index',
    title: '首页',
    href: '/index.html',
    hasHref: true,
  },
  {
    name: 'product',
    path: 'page/product',
    title: '产品矩阵',
    viewWidth: 1040,
    viewHeight: 590,
    viewStyle: 'tabs',
    hasHref: false,
    children: [
      {
        name: '智能引擎',
        iconH: '/assets/images/menu/ai-white.svg',
        iconN: '/assets/images/menu/ai-black.svg',
        layout: 'column-wrap',
        content: [
          {
            key: 1,
            column: [
              {
                title: 'AI智能',
                data: [
                  {
                    name: 'AI语音',
                    href: '/product/ai/speech.html',
                  },
                  {
                    name: 'AI算法',
                    href: '/product/ai/algorithm.html',
                  },
                  {
                    name: 'AI识别',
                    href: '/product/ai/discriminate.html',
                  },
                ],
              },
              {
                title: '云办公',
                data: [
                  {
                    name: '数字云',
                    href: '/product/ai/digital.html',
                  },
                  {
                    name: '企业云',
                    href: '/product/ai/enterprise.html',
                  },
                ],
              },
              {
                title: '智能一体机',
                data: [
                  {
                    name: 'alpha-数影',
                    href: '/product/ai/shuying.html',
                    tags: [
                      {
                        text: 'NEW',
                        type: 'new',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 2,
            column: [
              {
                title: '智能大应用',
                data: [
                  {
                    name: '智能预判系统——清水',
                    href: '/product/ai/qingshui.html',
                  },
                  {
                    name: '智能管理系统——菩提',
                    href: '/product/ai/puti.html',
                  },
                ],
              },
              {
                title: '智能业务',
                data: [
                  {
                    name: '蹄蹄智能办公',
                    href: '/product/ai/titi.html',
                  },
                  {
                    name: '天眼杀',
                    href: '/product/ai/tianyan.html',
                  },
                ],
              },
            ],
          },
          {
            key: 3,
            column: [
              {
                title: '风控系统',
                data: [
                  {
                    name: '细雨风控系统1.0',
                    href: '/product/ai/xiyu.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '智能干预系统——colgi',
                    href: '/product/ai/colgi.html',
                  },
                ],
              },
            ],
          },
          {
            key: 4,
            column: [
              {
                title: '智能机器人',
                data: [
                  {
                    name: '智能工作无人机',
                    href: '/product/ai/uav.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '数据与服务',
        iconH: '/assets/images/menu/dashuju-white.svg',
        iconN: '/assets/images/menu/dashuju-black.svg',
        layout: 'column-wrap',
        content: [
          {
            key: 1,
            column: [
              {
                title: '算法开发',
                data: [
                  {
                    name: '离线算法',
                    href: '/product/dataserver/offlinealgorithm.html',
                  },
                  {
                    name: '智能推荐系统',
                    href: '/product/dataserver/recommend.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '聚类算法',
                    href: '/product/dataserver/cluster.html',
                  },
                  {
                    name: '神经网络',
                    href: '/product/dataserver/neuralnetwork.html',
                  },
                ],
              },
            ],
          },
          {
            key: 2,
            column: [
              {
                title: '数据开发',
                data: [
                  {
                    name: '离线开发',
                    href: '/product/dataserver/offlinedevelop.html',
                  },
                  {
                    name: '实时开发',
                    href: '/product/dataserver/onlinedevelop.html',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '水果',
        iconH: '/assets/images/menu/shuiguo-white.svg',
        iconN: '/assets/images/menu/shuiguo-black.svg',
        layout: 'column-wrap',
        content: [
          {
            key: 1, // 第一列
            column: [
              {
                title: '热带水果',
                data: [
                  {
                    name: '香蕉',
                    href: '/product/fruits/banana.html',
                  },
                  {
                    name: '水蜜桃',
                    href: '/product/fruits/peach.html',
                  },
                  {
                    name: '石榴',
                    href: '/product/fruits/pomegranate.html',
                  },
                  {
                    name: '猕猴桃',
                    href: '/product/fruits/kiwi.html',
                  },
                  {
                    name: '牛油果',
                    href: '/product/fruits/avocado.html',
                  },
                  {
                    name: '芒果',
                    href: '/product/fruits/mongo.html',
                  },
                  {
                    name: '葡萄',
                    href: '/product/fruits/grape.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                ],
              },
              {
                title: '木棉科水果',
                data: [
                  {
                    name: '柠檬',
                    href: '/product/fruits/lemon.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '荔枝',
                    href: '/product/fruits/litchi.html',
                  },
                  {
                    name: '火龙果',
                    href: '/product/fruits/piyata.html',
                  },
                ],
              },
            ],
          },
          {
            key: 2,
            column: [
              {
                title: '蔬菜水果',
                data: [
                  {
                    name: '羊角蜜',
                    href: '/product/fruits/croissant.html',
                  },
                  {
                    name: '哈密瓜',
                    href: '/product/fruits/hami.html',
                    tags: [
                      {
                        text: 'NEW',
                        type: 'new',
                      },
                    ],
                  },
                ],
              },
              {
                title: '反季节水果',
                data: [
                  {
                    name: '无花果',
                    href: '/product/fruits/fig.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '青枣',
                    href: '/product/fruits/jujube.html',
                  },
                ],
              },
            ],
          },
          {
            key: 3,
            column: [
              {
                title: '热量水果',
                data: [
                  {
                    name: '苹果',
                    href: '/product/fruits/apple.html',
                  },
                  {
                    name: '柚子',
                    href: '/product/fruits/shaddock.html',
                  },
                ],
              },
              {
                title: '热销水果',
                data: [
                  {
                    name: '橘子',
                    href: '/product/fruits/orange.html',
                  },
                  {
                    name: '李子',
                    href: '/product/fruits/plum.html',
                  },
                  {
                    name: '枇杷',
                    href: '/product/fruits/loquat.html',
                  },
                  {
                    name: '樱桃',
                    href: '/product/fruits/cherry.html',
                  },
                ],
              },
            ],
          },
          {
            key: 4,
            column: [
              {
                title: '流行水果',
                data: [
                  {
                    name: '柿子',
                    href: '/product/fruits/persimmon.html',
                  },
                ],
              },
              {
                title: '气候水果',
                data: [
                  {
                    name: '山竹',
                    href: '/product/fruits/mangosteen.html',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '蔬菜',
        iconH: '/assets/images/menu/shucai-white.svg',
        iconN: '/assets/images/menu/shucai-black.svg',
        layout: 'column-wrap',
        content: [
          {
            key: 1, //第一列
            column: [
              {
                title: '有机蔬菜',
                data: [
                  {
                    name: '红萝卜',
                    href: '/product/vegetables/radish.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '黄瓜',
                    href: '/product/vegetables/cucumber.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '大葱',
                    href: '/product/vegetables/onion.html',
                  },
                  {
                    name: '菜苔',
                    href: '/product/vegetables/bolt.html',
                    tags: [
                      {
                        text: 'NEW',
                        type: 'new',
                      },
                    ],
                  },
                  {
                    name: '苋菜',
                    href: '/product/vegetables/amaranthus.html',
                  },
                ],
              },
              {
                title: '日日鲜蔬菜',
                data: [
                  {
                    name: '藕',
                    href: '/product/vegetables/lotus.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot',
                      },
                    ],
                  },
                  {
                    name: '白菜',
                    href: '/product/vegetables/cabbage.html',
                  },
                  {
                    name: '豌豆',
                    href: '/product/vegetables/peas.html',
                  },
                  {
                    name: '苦瓜',
                    href: '/product/vegetables/bilter.html',
                  },
                  {
                    name: '芹菜',
                    href: '/product/vegetables/celery.html',
                  },
                ],
              },
            ],
          },
          {
            key: 2, //第二列
            column: [
              {
                title: '菌菇类',
                data: [
                  {
                    name: '香菇',
                    href: '/product/vegetables/mushroom.html',
                  },
                  {
                    name: '生姜',
                    href: '/product/vegetables/ginger.html',
                  },
                  {
                    name: '茄子',
                    href: '/product/vegetables/eggplant.html',
                  },
                  {
                    name: '生姜',
                    href: '/product/vegetables/ginger.html',
                  },
                ],
              },
            ],
          },
          {
            key: 3,
            column: [
              {
                title: '豆制品/净菜',
                data: [
                  {
                    name: '南瓜',
                    href: '/product/vegetables/pumpkin.html',
                  },
                ],
              },
            ],
          },
          {
            key: 4,
            column: [
              {
                title: '根茎类/茄瓜类',
                data: [
                  {
                    name: '辣椒',
                    href: '/product/vegetables/chili.html',
                    tags: [
                      {
                        text: 'NEW',
                        type: 'new',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '开发语言',
        iconH: '/assets/images/menu/duoyuyan-white.svg',
        iconN: '/assets/images/menu/duoyuyan-black.svg',
        layout: 'normal-cell',
        content: [
          {
            title: 'Java',
            desc: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。',
            icon: '',
            href: '',
          },
          {
            title: 'C++',
            desc: 'C++是一种计算机高级程序设计语言，由C语言扩展升级而产生 [17]  ，最早于1979年由本贾尼·斯特劳斯特卢普在AT&T贝尔工作室研发。C++既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。',
            icon: '',
            href: '',
          },
          {
            title: 'Go',
            desc: 'Go（又称 Golang）是 Google 的 Robert Griesemer，Rob Pike 及 Ken Thompson 开发的一种静态强类型、编译型语言。Go 语言语法与 C 相近，但功能上有：内存安全，GC（垃圾回收），结构形态及 CSP-style 并发计算。',
            icon: '',
            href: '',
          },
          {
            title: 'Objective-C',
            desc: 'Objective-C是一种在C的基础上加入面向对象特性扩充而成的编程语言，通常称为jObC和较少用的 Objective C或ObjC。在一定程度上，可以把 Objective-C看成是ANSI版本C语言的一个超集，它支持相同的C语言基本语法，同时它还扩展了标准的 ANSI C语言的语法，包括定义类、方法和属性。当然还有其他一些结构的完善和拓展，如类别(Category)的出现。',
            icon: '',
            href: '',
          },
        ],
      },
      {
        name: '前后端框架库',
        iconH: '/assets/images/menu/iframe-white.svg',
        iconN: '/assets/images/menu/iframe-black.svg',
        layout: 'cell-n-4',
        content: [
          {
            title: 'React',
            desc: '用于构建用户界面的 JavaScript 框架React 起源于 Facebook 的内部项目，是一个用于构建用户界面的 JavaScript 库。',
            icon: '/assets/images/menu/react.png',
            href: '',
          },
          {
            title: 'Vue.js',
            desc: 'Vue.js - 是一套构建用户界面的渐进式框架。',
            icon: '/assets/images/menu/vuejs.png',
            href: '',
          },
          {
            title: 'Svelte',
            desc: 'Svelte 是构建 Web 应用程序的一种新方法。Svelte 是一个编译器，它将声明性组件转换成高效的 JavaScript 代码，并像做外科手术一样细粒度地更新 DOM。',
            icon: '/assets/images/menu/svelte.png',
            href: '',
          },
          {
            title: 'MobX',
            desc: 'MobX 是一个简单、可扩展的状态管理工具库。',
            icon: '/assets/images/menu/mobx.png',
            href: '',
          },
          {
            title: 'Lodash',
            desc: 'Lodash 是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。比相同功能的 Underscore.js 使用更广泛。',
            icon: '/assets/images/menu/lodash.png',
            href: '',
          },
          {
            title: 'EJS',
            desc: 'EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有再造一套迭代和控制流语法，有的只是普通的 JavaScript 代码而已。',
            icon: '/assets/images/menu/ejs.png',
            href: '',
          },
          {
            title: 'Nuxt.js',
            desc: 'Nuxt.js 是一个基于 Vue.js 的通用应用框架。通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。',
            icon: '/assets/images/menu/nuxtjs.png',
            href: '',
          },
          {
            title: 'Next.js',
            desc: 'Next.js 是一个轻量级的 React 服务端渲染应用框架。',
            icon: '/assets/images/menu/nextjs.png',
            href: '',
          },
        ],
      },
    ],
  },
  {
    name: 'solution',
    path: 'page/solution',
    hasHref: false,
    viewWidth: 800,
    viewHeight: 520,
    title: '解决方案',
    viewStyle: 'n-4',
    children: [
      {
        name: '教育行业',
        href: '/solution/education.html',
        iconH: '/assets/images/menu/solution-jiaoyu-h.svg',
        iconN: '/assets/images/menu/solution-jiaoyu-n.svg',
        desc: '商业化，标准化，全新化，服务化领域深耕',
      },
      {
        name: '金融行业',
        href: '/solution/finance.html',
        iconH: '/assets/images/menu/solution-jinrong-h.svg',
        iconN: '/assets/images/menu/solution-jinrong-n.svg',
        desc: '走向金融更大更高领域',
      },
      {
        name: '电商行业',
        href: '/solution/online.html',
        iconH: '/assets/images/menu/solution-dianshang-h.svg',
        iconN: '/assets/images/menu/solution-dianshang-n.svg',
        desc: '电商行业全新升级',
      },
      {
        name: '大数据行业',
        href: '/solution/bigdata.html',
        iconH: '/assets/images/menu/solution-dashuju-h.svg',
        iconN: '/assets/images/menu/solution-dashuju-n.svg',
        desc: '让数据引领我们进入全新的新时代',
      },
      {
        name: '私有化行业',
        href: '/solution/personal.html',
        iconH: '/assets/images/menu/solution-siyouhua-h.svg',
        iconN: '/assets/images/menu/solution-siyouhua-n.svg',
        desc: '私有化企业所有资源，标杆引领行业',
      },
      {
        name: '游戏行业',
        href: '/solution/game.html',
        iconH: '/assets/images/menu/solution-youxi-h.svg',
        iconN: '/assets/images/menu/solution-youxi-n.svg',
        desc: '打造全新的精英游戏领域行业',
      },
      {
        name: '餐饮行业',
        href: '/solution/food.html',
        iconH: '/assets/images/menu/solution-canyin-h.svg',
        iconN: '/assets/images/menu/solution-canyin-n.svg',
        desc: '打造数字化贯通增量提升',
      },
      {
        name: '交通行业',
        href: '/solution/traffic.html',
        iconH: '/assets/images/menu/solution-jiaotong-h.svg',
        iconN: '/assets/images/menu/solution-jiaotong-n.svg',
        desc: '让出行生活更加美好',
      },
      {
        name: '传统制造行业',
        href: '/solution/manufacture.html',
        iconH: '/assets/images/menu/solution-zhizao-h.svg',
        iconN: '/assets/images/menu/solution-zhizao-n.svg',
        desc: '魅力提升传统制造新体验',
      },
    ],
  },
  {
    name: 'cases',
    path: 'page/cases',
    title: '客户案例',
    href: '/case.html',
    hasHref: true,
  },
  {
    name: 'activity',
    hasHref: true,
    path: 'page/activity',
    href: '/activity.html',
    title: '最新活动',
  },
  {
    name: 'service',
    hasHref: false,
    title: '支持与服务',
    viewStyle: 'n-1',
    viewWidth: 140,
    viewHeight: 180,
    children: [
      {
        name: '帮助中心',
        href: '/service/help.html',
      },
      {
        name: '联系我们',
        href: '/service/contact.html',
      },
      {
        name: '资源中心',
        href: '/service/resource.html',
      },
    ],
  },
  {
    name: 'about',
    hasHref: false,
    title: '了解我们',
    viewStyle: 'n-1',
    viewWidth: 140,
    viewHeight: 180,
    children: [
      {
        name: '公司介绍',
        href: '/about/company.html',
      },
      {
        name: '新闻中心',
        href: '/about/news.html',
      },
      {
        name: '加入我们',
        href: '/about/joinus.html',
      },
    ],
  },
];
export default menus;
