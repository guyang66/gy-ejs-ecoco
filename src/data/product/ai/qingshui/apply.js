import a1 from '@/assets/images/product/ai/qingshui/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/qingshui/apply/a2.jpg';

import p1 from '@/assets/images/product/logo/ai/colgi.svg';
import p2 from '@/assets/images/product/logo/ai/shuziyun.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '轨迹研判系统',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '轨迹研判系统',
      desc: '透过各种情报分析案件信息，分析不同地域、人群犯罪规律及特点（例如案件类型、手段特点、案发现场、侵害对象等)；针对情报分析信息提供数据导入及呈现工具，将数据以图形化的方式展现出来。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '在数字信号处理的理论中，人们把能加工、变换数字信号的实体称作系统',
        '统计模式识别、结构模式识别、模糊模式识别',
        '也可以用基于时间的语言、表格、公式、波形四种方法来描述',
        '描述系统的方法还有符号、单位脉冲响应、差分方程和图形',
        '系统是一个动态和复杂的整体，相互作用结构和功能的单位',
      ],
      products: [
        {
          name: 'colgi',
          icon: p1,
          key: 'colgi',
          alt: 'colgi',
          href: '/product/ai/colgi.html',
        },
      ],
    },
    {
      image: a2,
      alt: '智能雨季循环系统',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '智能雨季循环系统',
      desc:
        '地球系统科学跨越一系列自然科学与社会科学，把地球看成一个由相互作用的地核、地幔、岩石圈、水圈、大气圈、生物圈和行星系统等组成部分构成的统一系统，重点研究各组成部分之间的相互作用，以解释地球的动力、演化和全球变化。地球系统科学是20世纪末和21世纪最受人们重视的新兴学科之一。\n' +
        '地球系统科学最早由美国国家航空与宇航管理局（NASA）1983年提出。20世纪80年代中期以来，地球科学发展迅猛，科学家明确提出物理过程与生物过程相互作用的观点，进而形成了“地球系统”思想。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '地球系统科学在现代技术，尤其是空间技术和大型计算机发展后出现',
        '我国自然科学基金委地学部也于2002年3月提出了21世纪初的地球科学战略重点',
        '系统仿真的基本方法是建立系统的结构模型和量化分析模型',
      ],
      products: [
        {
          name: '数字云',
          icon: p2,
          key: 'digital',
          alt: 'digital',
          href: '/product/ai/digital.html',
        },
      ],
    },
  ],
};

export default data;
