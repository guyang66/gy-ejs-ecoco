const menus = [
  {
    name: 'index',
    path: 'pages/index',
    title: '首页',
    href: '/index.html',
    hasHref: true
  },
  {
    name: 'product',
    path: 'pages/product',
    title: '产品矩阵',
    viewWidth: 1040,
    viewHeight: 590,
    viewStyle: 'tabs',
    hasHref: false,
    children: [
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
                    href: '/product/fruits/banana.html'
                  },
                  {
                    name: '水蜜桃',
                    href: '/product/fruits/peach.html'
                  },
                  {
                    name: '菠萝',
                    href: 'mongo.html'
                  },

                  {
                    name: '奇异果',
                    href: '/product/fruits/kiwi.html'
                  },
                  {
                    name: '西瓜',
                    href: 'mongo.html'
                  },
                  {
                    name: '金钻凤梨',
                    href: 'mongo.html'
                  },
                  {
                    name: '皇帝椰子',
                    href: 'mongo.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot'
                      }
                    ]
                  }
                ]
              },
              {
                title: '木棉科水果',
                data: [
                  {
                    name: '榴莲',
                    href: 'banana.html',
                    tags: [
                      {
                        text: 'HOT',
                        type: 'hot'
                      }
                    ]
                  },
                  {
                    name: '榴莲',
                    href: 'banana.html'
                  },
                  {
                    name: '榴莲',
                    href: 'banana.html'
                  }
                ]
              }
            ],
          },
          {
            key: 2,
            column: [{
              title: '蔬菜水果',
              data: [
                {
                  name: '西红柿',
                  href: 'banana.html'
                },
                {
                  name: '黄瓜',
                  href: 'mongo.html',
                  tags: [
                    {
                      text: 'NEW',
                      type: 'new'
                    }

                  ]
                }
              ]
            }, {
              title: '反季节水果',
              data: [
                {
                  name: '白草莓',
                  href: 'banana.html',
                  tags: [
                    {
                      text: 'HOT',
                      type: 'hot'
                    }
                  ]
                },
                {
                  name: '台州莲雾',
                  href: 'mongo.html'
                }
              ]
            },]
          },
          {
            key: 3,
            column: [
              {
                title: '热量水果',
                data: [
                  {
                    name: '葡萄',
                    href: 'banana.html'
                  },
                  {
                    name: '阳光玫瑰',
                    href: 'mongo.html'
                  }
                ]
              },
              {
                title: '热销水果',
                data: [
                  {
                    name: '苹果',
                    href: 'banana.html'
                  },
                  {
                    name: '梨',
                    href: 'mongo.html'
                  },
                  {
                    name: '李子',
                    href: 'mongo.html'
                  },
                  {
                    name: '提子',
                    href: 'mongo.html'
                  }
                ]
              }
            ],
          },
          {
            key: 4,
            column: [
              {
                title: '流行水果',
                data: [
                  {
                    name: '苹果',
                    href: 'banana.html'
                  },
                  {
                    name: '梨',
                    href: 'banana.html'
                  },
                  {
                    name: '山楂',
                    href: 'banana.html'
                  },
                  {
                    name: '橙子',
                    href: 'banana.html'
                  }
                ]
              },
              {
                title: '气候水果',
                data: [
                  {
                    name: '山竹',
                    href: 'banana.html'
                  }
                ]
              }
            ]
          },
        ]
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
                      name: '杭白菜',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    },
                    {
                      name: '毛毛菜',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    },
                    {
                      name: '高山娃娃菜',
                      href: ''
                    },
                    {
                      name: '高山甜玉米',
                      href: '',
                      tags: [
                        {
                          text: 'NEW',
                          type: 'new'
                        }
                      ]
                    },
                    {
                      name: '早春雪地青',
                      href: ''
                    },
                  ]
                },
                {
                  title: '日日鲜蔬菜',
                  data: [
                    {
                      name: '卷心菜',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    },
                    {
                      name: '小香芹',
                      href: ''
                    },
                    {
                      name: '福建小香菇',
                      href: ''
                    },
                    {
                      name: '鸡毛菜',
                      href: ''
                    },
                    {
                      name: '花椰菜',
                      href: ''
                    },
                  ]
                }
              ]
            },
            {
              key: 2, //第二列
              column: [
                {
                  title: '菌菇类',
                  data: [
                    {
                      name: '平菇300g',
                      href: ''
                    },
                    {
                      name: '杏鲍菇',
                      href: ''
                    },
                    {
                      name: '金针菇',
                      href: ''
                    },
                    {
                      name: '有机花菇',
                      href: ''
                    },
                  ]
                }
              ]
            },
            {
              key: 3,
              column: [
                {
                  title: '豆制品/净菜',
                  data: [
                    {
                      name: '祖明兰花香干',
                      href: ''
                    },
                    {
                      name: '油豆腐',
                      href: ''
                    },
                    {
                      name: '清水老豆腐',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              key: 4,
              column: [
                {
                  title: '根茎类/茄瓜类',
                  data: [
                    {
                      name: '高山透心胡萝卜',
                      href: '',
                      tags: [
                        {
                          text: 'NEW',
                          type: 'new'
                        }
                      ]
                    },
                    {
                      name: '去皮红洋葱',
                      href: ''
                    },
                    {
                      name: '长白萝卜',
                      href: ''
                    },
                    {
                      name: '黄心土豆',
                      href: ''
                    },
                    {
                      name: '紫薯',
                      href: ''
                    },
                    {
                      name: '大红番茄',
                      href: ''
                    },
                    {
                      name: '千岛湖长茄子',
                      href: ''
                    },
                  ]
                }
              ]
            }
          ]
        },
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
                      href: ''
                    },
                    {
                      name: 'AI识别',
                      href: ''
                    },
                    {
                      name: 'AI算法',
                      href: ''
                    }
                  ]
                },
                {
                  title: '云办公',
                  data: [
                    {
                      name: '数字云',
                      href: ''
                    },
                    {
                      name: '企业云',
                      href: ''
                    }
                  ]
                },
                {
                  title: '智能一体机',
                  data: [
                    {
                      name: 'alpha-数影',
                      href: '',
                      tags: [
                        {
                          text: 'NEW',
                          type: 'new'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              key: 2,
              column: [
                {
                  title: '智能大应用',
                  data: [
                    {
                      name: '智能预判系统——清水',
                      href: ''
                    },
                    {
                      name: '智能管理系统——菩提',
                      href: ''
                    }
                  ]
                },
                {
                  title: '智能业务',
                  data: [
                    {
                      name: '蹄蹄智能办公',
                      href: ''
                    },
                    {
                      name: '天眼杀',
                      href: ''
                    },
                  ]
                }
              ]
            },
            {
              key: 3,
              column: [
                {
                  title: '风控系统',
                  data: [
                    {
                      name: '初号机1.0风控系统',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    },
                    {
                      name: '智能干预系统',
                      href: ''
                    },
                  ]
                }
              ]
            },
            {
              key: 4,
              column: [
                {
                  title: '智能机器人',
                  data: [
                    {
                      name: '智能工作无人机',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    },
                  ]
                }
              ]
            }
          ]
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
              href: ''
            },
            {
              title: 'C++',
              desc: 'C++是一种计算机高级程序设计语言，由C语言扩展升级而产生 [17]  ，最早于1979年由本贾尼·斯特劳斯特卢普在AT&T贝尔工作室研发。C++既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。',
              icon: '',
              href: ''
            },
            {
              title: 'Go',
              desc: 'Go（又称 Golang）是 Google 的 Robert Griesemer，Rob Pike 及 Ken Thompson 开发的一种静态强类型、编译型语言。Go 语言语法与 C 相近，但功能上有：内存安全，GC（垃圾回收），结构形态及 CSP-style 并发计算。',
              icon: '',
              href: ''
            },
            {
              title: 'Objective-C',
              desc: 'Objective-C是一种在C的基础上加入面向对象特性扩充而成的编程语言，通常称为jObC和较少用的 Objective C或ObjC。在一定程度上，可以把 Objective-C看成是ANSI版本C语言的一个超集，它支持相同的C语言基本语法，同时它还扩展了标准的 ANSI C语言的语法，包括定义类、方法和属性。当然还有其他一些结构的完善和拓展，如类别(Category)的出现。',
              icon: '',
              href: ''
            }
          ]
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
              href: ''
            },
            {
              title: 'Vue.js',
              desc: 'Vue.js - 是一套构建用户界面的渐进式框架。',
              icon: '/assets/images/menu/vuejs.png',
              href: ''
            },
            {
              title: 'Svelte',
              desc: 'Svelte 是构建 Web 应用程序的一种新方法。Svelte 是一个编译器，它将声明性组件转换成高效的 JavaScript 代码，并像做外科手术一样细粒度地更新 DOM。',
              icon: '/assets/images/menu/svelte.png',
              href: ''
            },
            {
              title: 'MobX',
              desc: 'MobX 是一个简单、可扩展的状态管理工具库。',
              icon: '/assets/images/menu/mobx.png',
              href: ''
            },
            {
              title: 'Lodash',
              desc: 'Lodash 是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。比相同功能的 Underscore.js 使用更广泛。',
              icon: '/assets/images/menu/lodash.png',
              href: ''
            },
            {
              title: 'EJS',
              desc: 'EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有再造一套迭代和控制流语法，有的只是普通的 JavaScript 代码而已。',
              icon: '/assets/images/menu/ejs.png',
              href: ''
            },
            {
              title: 'Nuxt.js',
              desc: 'Nuxt.js 是一个基于 Vue.js 的通用应用框架。通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。',
              icon: '/assets/images/menu/nuxtjs.png',
              href: ''
            },
            {
              title: 'Next.js',
              desc: 'Next.js 是一个轻量级的 React 服务端渲染应用框架。',
              icon: '/assets/images/menu/nextjs.png',
              href: ''
            }
          ]
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
                      href: ''
                    },
                    {
                      name: '智能推荐系统',
                      href: '',
                      tags: [
                        {
                          text: 'HOT',
                          type: 'hot'
                        }
                      ]
                    },
                    {
                      name: '聚类算法',
                      href: ''
                    },
                    {
                      name: '神经网络',
                      href: ''
                    }
                  ]
                },
              ]
            },
            {
              key: 2,
              column: [
                {
                  title: '数据开发',
                  data: [
                    {
                      name: '离线开发',
                      href: ''
                    },
                    {
                      name: '实时开发',
                      href: ''
                    },
                  ]
                }
              ]
            }
          ]
        }
    ]
  },
  {
    name: 'solution',
    path: 'pages/solution',
    hasHref: false,
    viewWidth: 800,
    viewHeight: 360,
    title: '解决方案',
    viewStyle: 'n-4',
    children: [
      {
        name: '游戏行业',
        href: '/solution/game.html',
        iconH: '/assets/images/menu/solution-youxi-h.svg',
        iconN: '/assets/images/menu/solution-youxi-n.svg',
        desc: '打造全新的精英游戏领域行业'
      },
      {
        name: '电商行业',
        href: '/solution/online.html',
        iconH: '/assets/images/menu/solution-dianshang-h.svg',
        iconN: '/assets/images/menu/solution-dianshang-n.svg',
        desc: '电商行业全新升级'
      },
      {
        name: '金融行业',
        href: '/solution/finance.html',
        iconH: '/assets/images/menu/solution-jinrong-h.svg',
        iconN: '/assets/images/menu/solution-jinrong-n.svg',
        desc: '走向金融更大更高领域'
      },
      {
        name: '汽车行业',
        href: '/solution/motor.html',
        iconH: '/assets/images/menu/solution-qiche-h.svg',
        iconN: '/assets/images/menu/solution-qiche-n.svg',
        desc: '让生活更美好'
      },
      {
        name: '餐饮行业',
        href: '/solution/catering.html',
        iconH: '/assets/images/menu/solution-canyin-h.svg',
        iconN: '/assets/images/menu/solution-canyin-n.svg',
        desc: '打造数字化贯通增量提升'
      },
      {
        name: '旅游行业',
        href: '/solution/tourism.html',
        iconH: '/assets/images/menu/solution-lvyou-h.svg',
        iconN: '/assets/images/menu/solution-lvyou-n.svg',
        desc: '魅力提升人文旅游体验'
      },
      {
        name: '大数据行业',
        href: '/solution/tourism.html',
        iconH: '/assets/images/menu/solution-dashuju-h.svg',
        iconN: '/assets/images/menu/solution-dashuju-n.svg',
        desc: '让数据代领我们进入新时代'
      },
    ]
  },
  {
    name: 'cases',
    path: 'pages/cases',
    title: '客户案例',
    href: '/cases.html',
    hasHref: true
  },
  {
    name: 'activity',
    hasHref: true,
    path: 'pages/activity',
    href: '/activity.html',
    title: '最新活动'
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
        href: '/service/help.html'
      },
      {
        name: '联系我们',
        href: '/service/contact.html'
      },
      {
        name: '资源中心',
        href: '/service/resource.html'
      },
    ]
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
        href: '/about/company.html'
      },
      {
        name: '新闻中心',
        href: '/about/news.html'
      },
      {
        name: '加入我们',
        href: '/about/join.html'
      }
    ]
  },
]
export default menus
