import a1 from '@/assets/images/product/ai/digital/core/c1.svg';
import a2 from '@/assets/images/product/ai/digital/core/c2.svg';
import a3 from '@/assets/images/product/ai/digital/core/c3.svg';
import a4 from '@/assets/images/product/ai/digital/core/c4.svg';
import a5 from '@/assets/images/product/ai/digital/core/c5.svg';
import a6 from '@/assets/images/product/ai/digital/core/c6.svg';

const core = {
  title: '核心功能',
  bg: '#F4F4F4',
  content: [
    {
      title: '加密存储',
      text: '在传统的信息系统中，一般采用加密方式来确保存储数据的安全性和隐私性．在云中，似乎也可以这样做，但实现起来却不那么容易．在基础设施即服务云模式中',
      icon: a1,
      alt: '加密存储',
    },
    {
      title: '数据隔离',
      text: '在基于多租户技术系统架构中，多个租户或用户的数据会存放在同一个存储介质上甚至同一数据表里。尽管云服务提供商会使用一些数据隔离技术',
      icon: a2,
      alt: '数据隔离',
    },
    {
      title: '数据迁移',
      text: '当云中的服务器（这里，服务器是指提供SaaS和PaaS的物理机，对于IaaS而言，服务器或者是物理机，或者是虚拟机）“宕机”时，为了确保正在进行的服务能继续进行',
      icon: a3,
      alt: '数据迁移',
    },
    {
      title: '数据残留',
      text: '数据残留是指数据删除后的残留形式（逻辑上已被删除，物理上依然存在）．数据残留可能无意中透露敏感信息，所以即便是删除了数据的存储介质也不应该被释放到不受控制的环境',
      icon: a4,
      alt: '数据残留',
    },
    {
      title: '数据安全',
      text: '数据安全审计当数据以外包方式存储在云中时，用户会关注两个问题：外包存储的数据确实已存储到云中并归数据所有者所有',
      icon: a5,
      alt: '数据安全',
    },
    {
      title: '存储框架',
      text: '微软研究院的Kamara等人提出了面向公有云的加密存储框架．在该框架中，数据处理DP、数据验证DV、令牌生成TG和凭证生成CG是核心组件',
      icon: a6,
      alt: '存储框架',
    },
  ],
};
export default core;
