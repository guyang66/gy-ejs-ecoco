import a1 from '@/assets/images/product/ai/enterprise/apply/a1.jpg';
import p2 from '@/assets/images/product/logo/ai/shuziyun.svg';
import p3 from '@/assets/images/product/logo/ai/titi.svg';
const data = {
  content: [
    {
      image: a1,
      alt: '企业极速上云',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '企业极速上云',
      desc: '鉴于云环境下虚拟机工作在虚拟化平台之上并由虚拟机监控系统或监控器进行管控，提出了一种基于VMM的云数据机密性保护方法，该方法基于SSL来保证数据传输的安全，利用Daoli安全虚拟监控系统保护数据存储的安全．数据在传输到云端前，用户客户端SSL模块会将数据加密．云端的操作系统接收到用户密文数据后，将密文数据提交给分布式文件系统．分布式文件系统的SSL模块会将数据解密以进行处理。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '公有云中存储的数据一般属于外包数据，存在不少基于传统的加解密技术的研究来确保外包数据的安全',
        '据所有者使用对称的内容加密密钥来加密文件内容，再使用主公钥加密所有的内容加密密钥，只有拥有主私钥的所有者才能解密这些内容加密密钥',
      ],
      products: [
        {
          name: '数字云',
          icon: p2,
          key: 'digital',
          alt: 'digital',
          href: '/product/ai/digital.html',
        },
        {
          name: 'titi',
          icon: p3,
          key: 'titi',
          alt: 'titi',
          href: '/product/ai/titi.html',
        },
      ],
    },
  ],
};

export default data;
