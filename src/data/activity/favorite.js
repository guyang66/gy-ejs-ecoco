import b1 from '@/assets/images/activity/favorite/b1.svg';
import b2 from '@/assets/images/activity/favorite/b2.svg';
import b3 from '@/assets/images/activity/favorite/b3.svg';
import b4 from '@/assets/images/activity/favorite/b4.svg';
import b5 from '@/assets/images/activity/favorite/b5.svg';
import b6 from '@/assets/images/activity/favorite/b6.svg';
import b7 from '@/assets/images/activity/favorite/b7.svg';
import main from '@/assets/images/activity/favorite/main.svg';
const data = {
  title: '猜你喜欢',
  desc: '大牌特价，猜你喜欢，各种优惠尽请期待',
  content: [
    {
      index: 0,
      key: 'main',
      name: '水果零售价',
      bg: main,
      desc: '节日特价，8.8折再加会员折扣，折扣多多，惊喜连连，欢迎新老用户购买',
      btnText: '立即查看',
      href: '/activity/detail.html',
      advantage: [
        '90%出水率，甜美可口',
        '新鲜不隔夜，无中间差价',
        '放心购买，最低7.6折起',
      ],
      tag: [
        {
          key: 'fill',
          text: '精选特价',
        },
        {
          key: 'outline',
          text: '新品上市',
        },
        {
          key: 'outline',
          text: '满1000减100',
        },
      ],
    },
    {
      index: 1,
      key: 'normal',
      name: '看守无人机',
      desc: '超高续航，耐力十足，现在购买即送收纳盒',
      btnText: '查看详情',
      href: '/activity/detail.html',
      bg: b1,
      tag: [
        {
          key: 'fill',
          text: '新用户特享',
        },
        {
          key: 'outline',
          text: '最低0.92折',
        },
      ],
    },
    {
      index: 2,
      key: 'normal',
      name: '智能马桶',
      desc: '智能马桶，现免费试用1个月，先到先得',
      btnText: '申请试用',
      bg: b2,
      href: '/activity/detail.html',
      tag: [
        {
          key: 'fill',
          text: '新人特惠',
        },
        {
          key: 'outline',
          text: '免息支付',
        },
      ],
    },
    {
      index: 3,
      key: 'normal',
      name: '智能研判系统-清水',
      desc: '智能研判系统，在线直播，直播购买',
      btnText: '点击查看',
      bg: b3,
      href: '/activity/detail.html',
      tag: [
        {
          key: 'fill',
          text: '直播疯抢',
        },
        {
          key: 'outline',
          text: '整点送优惠券',
        },
      ],
    },
    {
      index: 4,
      key: 'normal',
      name: '巴西瓜子',
      desc: '巴西瓜子，毛利互相可拉到烧烤店啊啊',
      btnText: '申请试用',
      href: '/activity/detail.html',
      bg: b4,
      tag: [
        {
          key: 'fill',
          text: '新人特惠',
        },
        {
          key: 'fill',
          text: '按需付款',
        },
        {
          key: 'outline',
          text: '活动期间免费',
        },
      ],
    },
    {
      index: 5,
      key: 'normal',
      name: '智能语音',
      desc: '智能语音，现免费试用1个月，先到先得',
      btnText: '申请试用',
      href: '/activity/detail.html',
      bg: b5,
      tag: [
        {
          key: 'fill',
          text: '新人特享',
        },
        {
          key: 'outline',
          text: '老用户免费续费',
        },
      ],
    },
    {
      index: 6,
      key: 'normal',
      name: '智能在线客户',
      desc: '智能在线客户，上千套模板训练，效率100%',
      btnText: '查看详情',
      href: '/activity/detail.html',
      bg: b6,
      tag: [
        {
          key: 'fill',
          text: '0元购买',
        },
        {
          key: 'outline',
          text: '免息支付',
        },
        {
          key: 'outline',
          text: '购物车好礼',
        },
      ],
    },
    {
      index: 7,
      key: 'normal',
      name: '蔬菜沙拉',
      desc: '多种果蔬多重营养，呵护你的全家健康',
      btnText: '立即购买',
      href: '/activity/detail.html',
      bg: b7,
      tag: [
        {
          key: 'fill',
          text: '超级批发日',
        },
        {
          key: 'outline',
          text: '免费无线续杯',
        },
      ],
    },
  ],
};
export default data;
