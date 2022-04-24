import a1 from '@/assets/images/product/dataserver/offline-develop/apply/a1.jpg';

import p2 from '@/assets/images/product/logo/dataserver/shishikaifa.svg';
import p3 from '@/assets/images/product/logo/dataserver/shenjingwangluo.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '麦田网络',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '麦田网络',
      desc: '河北省河流众多，长度在18公里以上1000公里以下者就达300多条。境内河流大都发源或流经燕山、冀北山地和太行山山区，其下游有的合流入海，有的单独入海，还有因地形流入湖泊不外流者。主要河流从南到北依次有漳。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '河北省的动物资源比较丰富，现知陆栖（包括两栖）脊椎动物530余种，约占全国同类动物种类的29.0%，其中兽类80余',
        '东河北省盛产草鱼、鲢鱼、鳙鱼、鲤鱼、鲫鱼、鲂鱼、黑鱼、鳝鱼、虾、蟹等。坝上的细鳞鱼',
        '却河北省是中国植物资源丰富的省份之一。全省植物种类总共有204科、940属、2800多种，其中蕨类植物21科，占全国的40.4%',
      ],
      products: [
        {
          name: '实时开发',
          icon: p2,
          key: 'sskf',
          alt: '实时开发',
          href: '/product/dataserver/onlinedevelop.html',
        },
        {
          name: '神经网络',
          icon: p3,
          key: 'sjwl',
          alt: '神经网络',
          href: '/product/dataserver/neuralnetwork.html',
        },
      ],
    },
  ],
};

export default data;
