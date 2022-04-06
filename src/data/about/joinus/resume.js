const data = {
  bg: '#ffffff',
  tabs: [
    {
      key: 'society',
      name: '社会招聘',
      content: [
        {
          index : 0,
          title: '数据开发工程师',
          desc: '杭州研发中心急招数据开发工程师，年龄不限',
          category: 'data',
          categoryString: '数据类',
          department: '数据中心',
          place: '杭州',
          date: '2022年01月01日',
          experience: '1~3年',
          education: '不限',
          tag: [
            {
              key: 'quick',
              text: '急'
            }
          ],
          duty: {
            title: '岗位职责',
            data: [
              '熟悉和理解运营商业务需求，基于HADOOP和MPP大数据平台，负责数据接入、数据清洗、数据加工等',
              '基于需求进行模型构建、程序设计及代码开发；为业务问题分析及营销推荐提供高效数据支撑',
              '能对数据进行分析与探索'
            ]
          },
          require: {
            title: '岗位要求',
            data: [
              '统招全日制本科及以上学历，统计学、数学、计算机信息类、数据挖掘等相关专业，数据开发和分析1~3年工作经验',
              '熟练掌握数据库基础、了解数据库开发基本技术；1年及以上的PG、Hive、vertica、Mysql等数据库开发经验，至少熟悉一种主流数据库',
              '精通SQL/HQL，精通存储过程和函数，有良好的SQL编程习惯',
              '熟悉linux环境和命令；shell编程经验，了解python的优先',
              '具备良好的客户需求理解能力、良好的沟通和表达能力、责任心强、细致认真，热爱数据开发与分析工作'
            ]
          },
          pluses: {
            title: '加分项',
            data: [
              '有电信运营商工作经验，特别是熟悉标签和画像数据者优先；有建模经验者优先',
              '熟悉M域业务和数据 待遇从优'
            ]
          }

        },
        {
          index : 1,
          title: 'SDR专员',
          category: 'operating',
          categoryString: '运营类',
          department: '运营中心',
          place: '北京',
          date: '2022年04月01日',
          experience: '不限',
          education: '不限',
          duty: {
            title: '岗位职责',
            data: [
              '通过电话寻找商机，并进行初步筛选，充分挖掘客户的详细信息，包括需求及痛点特征、决策和购买力等，寻找并确认产品的销售机会',
              '通过企业微信、邮件等在线工具孵化目标客户，并通过客户反馈的行为和频次判断下一步运营思路',
              '面向目标市场积极主动地寻找新的潜在客户和转化机会'
            ]
          },
          require: {
            title: '岗位要求',
            data: [
              '有B2B企业工作经验，对互联网和SaaS领域有了解，尤其 SaaS 营销转化漏斗流程，有1年以上电话销售经验优先',
              '具备良好的沟通、协作和组织能力',
              '知识面广，思维活跃，有创新意识和挑战精神',
              '自我学习能力强，性格乐观开朗，有强烈的责任心和进取心'
            ]
          }
        }
      ]
    },
    {
      key: 'school',
      name: '校园招聘',
      content: []
    },
    {
      key: 'practice',
      name: '岗前实习',
      content: [
        {
          index : 0,
          title: 'hr助理实习生',
          desc: '杭州研发中心急招数据开发工程师，年龄不限',
          category: 'data',
          categoryString: '数据类',
          department: '数据中心',
          place: '杭州',
          date: '2022年01月01日',
          experience: '1~3年',
          education: '不限',
          tag: [
            {
              key: 'quick',
              text: '急'
            }
          ],
          duty: {
            title: '岗位职责',
            data: [
              '熟悉和理解运营商业务需求，基于HADOOP和MPP大数据平台，负责数据接入、数据清洗、数据加工等',
              '基于需求进行模型构建、程序设计及代码开发；为业务问题分析及营销推荐提供高效数据支撑',
              '能对数据进行分析与探索'
            ]
          },
          require: {
            title: '岗位要求',
            data: [
              '统招全日制本科及以上学历，统计学、数学、计算机信息类、数据挖掘等相关专业，数据开发和分析1~3年工作经验',
              '熟练掌握数据库基础、了解数据库开发基本技术；1年及以上的PG、Hive、vertica、Mysql等数据库开发经验，至少熟悉一种主流数据库',
              '精通SQL/HQL，精通存储过程和函数，有良好的SQL编程习惯',
              '熟悉linux环境和命令；shell编程经验，了解python的优先',
              '具备良好的客户需求理解能力、良好的沟通和表达能力、责任心强、细致认真，热爱数据开发与分析工作'
            ]
          },
          pluses: {
            title: '加分项',
            data: [
              '有电信运营商工作经验，特别是熟悉标签和画像数据者优先；有建模经验者优先',
              '熟悉M域业务和数据 待遇从优'
            ]
          }

        },
        {
          index : 1,
          title: '产品研发实习生',
          category: 'operating',
          categoryString: '运营类',
          department: '运营中心',
          place: '北京',
          date: '2022年04月01日',
          experience: '不限',
          education: '不限',
          duty: {
            title: '岗位职责',
            data: [
              '通过电话寻找商机，并进行初步筛选，充分挖掘客户的详细信息，包括需求及痛点特征、决策和购买力等，寻找并确认产品的销售机会',
              '通过企业微信、邮件等在线工具孵化目标客户，并通过客户反馈的行为和频次判断下一步运营思路',
              '面向目标市场积极主动地寻找新的潜在客户和转化机会'
            ]
          },
          require: {
            title: '岗位要求',
            data: [
              '有B2B企业工作经验，对互联网和SaaS领域有了解，尤其 SaaS 营销转化漏斗流程，有1年以上电话销售经验优先',
              '具备良好的沟通、协作和组织能力',
              '知识面广，思维活跃，有创新意识和挑战精神',
              '自我学习能力强，性格乐观开朗，有强烈的责任心和进取心'
            ]
          }
        }
      ]
    }
  ],
  category: [
    {
      key: 'technology',
      name: '技术',
    },
    {
      key: 'operating',
      name: '运营',
    },
    {
      key: 'product',
      name: '产品',
    },
    {
      key: 'sells',
      name: '销售',
    },
    {
      key: 'data',
      name: '数据',
    },
    {
      key: 'function',
      name: '职能',
    },
    {
      key: 'brand',
      name: '品牌',
    },
    {
      key: 'other',
      name: '其他',
    },
  ],
  place: [
    {
      key: 'hangzhou',
      name: '杭州',
    },
    {
      key: 'beijing',
      name: '北京',
    },
    {
      key: 'shanghai',
      name: '上海',
    }
  ],
  content: [
    {
      index : 0,
      title: '数据开发工程师',
      desc: '杭州研发中心急招数据开发工程师，年龄不限',
      category: 'data',
      categoryString: '数据类',
      department: '数据中心',
      place: '杭州',
      date: '2022年01月01日',
      experience: '1~3年',
      education: '不限',
      tag: [
        {
          key: 'quick',
          text: '急'
        }
      ],
      duty: {
        title: '岗位职责',
        data: [
          '熟悉和理解运营商业务需求，基于HADOOP和MPP大数据平台，负责数据接入、数据清洗、数据加工等',
          '基于需求进行模型构建、程序设计及代码开发；为业务问题分析及营销推荐提供高效数据支撑',
          '能对数据进行分析与探索'
        ]
      },
      require: {
        title: '岗位要求',
        data: [
          '统招全日制本科及以上学历，统计学、数学、计算机信息类、数据挖掘等相关专业，数据开发和分析1~3年工作经验',
          '熟练掌握数据库基础、了解数据库开发基本技术；1年及以上的PG、Hive、vertica、Mysql等数据库开发经验，至少熟悉一种主流数据库',
          '精通SQL/HQL，精通存储过程和函数，有良好的SQL编程习惯',
          '熟悉linux环境和命令；shell编程经验，了解python的优先',
          '具备良好的客户需求理解能力、良好的沟通和表达能力、责任心强、细致认真，热爱数据开发与分析工作'
        ]
      },
      pluses: {
        title: '加分项',
        data: [
          '有电信运营商工作经验，特别是熟悉标签和画像数据者优先；有建模经验者优先',
          '熟悉M域业务和数据 待遇从优'
        ]
      }

    },
    {
      index : 1,
      title: 'SDR专员',
      category: 'operating',
      categoryString: '运营类',
      department: '运营中心',
      place: '北京',
      date: '2022年04月01日',
      experience: '不限',
      education: '不限',
      duty: {
        title: '岗位职责',
        data: [
          '通过电话寻找商机，并进行初步筛选，充分挖掘客户的详细信息，包括需求及痛点特征、决策和购买力等，寻找并确认产品的销售机会',
          '通过企业微信、邮件等在线工具孵化目标客户，并通过客户反馈的行为和频次判断下一步运营思路',
          '面向目标市场积极主动地寻找新的潜在客户和转化机会'
        ]
      },
      require: {
        title: '岗位要求',
        data: [
          '有B2B企业工作经验，对互联网和SaaS领域有了解，尤其 SaaS 营销转化漏斗流程，有1年以上电话销售经验优先',
          '具备良好的沟通、协作和组织能力',
          '知识面广，思维活跃，有创新意识和挑战精神',
          '自我学习能力强，性格乐观开朗，有强烈的责任心和进取心'
        ]
      }
    }
  ]
}
export default data
