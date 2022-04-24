import a1 from '@/assets/images/product/ai/tianyan/apply/a1.jpg';
import a2 from '@/assets/images/product/ai/tianyan/apply/a2.jpg';
import a3 from '@/assets/images/product/ai/tianyan/apply/a3.jpg';
import a4 from '@/assets/images/product/ai/tianyan/apply/a4.jpg';

import p1 from '@/assets/images/product/logo/ai/suanfa.svg';
import p2 from '@/assets/images/product/logo/ai/shuziyun.svg';
import p3 from '@/assets/images/product/logo/ai/titi.svg';
import p4 from '@/assets/images/product/logo/ai/puti.svg';
import p5 from '@/assets/images/product/logo/ai/wurenji.svg';
import p6 from '@/assets/images/product/logo/ai/qiyeyun.svg';

const data = {
  content: [
    {
      image: a1,
      alt: '炼金魔女',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '炼金魔女',
      desc: '金魔女拥有两种不同的技能，分别是未明之雾和法老之蛇，两种技能每场对局都只能使用一次。夜晚时炼金魔女可以使用未明之雾选定场上三个不同的玩家，锁定后，当晚狼人阵营只能从这三个玩家中选择袭击对象。法老之蛇的存在使炼金魔女能直接知晓当晚狼人的袭击目标，并可以选择在次日公布出局信息前使用法老之蛇救活该玩家。',
      buttonText: '联系我们',
      href: '/form.html',
      solutions: [
        '每晚杀人后可以查验一名玩家的具体身份，第一晚以后查验到纯白之女时，纯白之女死亡',
        '蚀时狼妃每晚可以率先睁眼，选择场上任意一位玩家封锁到时间的夹缝中',
      ],
      products: [
        {
          name: 'AI算法',
          icon: p1,
          key: 'algorithm',
          alt: 'algorithm',
          href: '/product/ai/algorithm.html',
        },
        {
          name: '数字云',
          icon: p2,
          key: 'digital',
          alt: 'digital',
          href: '/product/ai/digital.html',
        },
        {
          name: '蹄蹄',
          icon: p3,
          key: 'digital',
          alt: '蹄蹄',
          href: '/product/ai/titi.html',
        },
      ],
    },
    {
      image: a2,
      alt: '丘比特',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '丘比特',
      desc: '首夜在盗贼行动后，狼人行动前，选择任意两名玩家成为情侣，丘比特的胜利条件永远与情侣相同。这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '当情侣为一狼一好人（如一普通平民一普通狼人）时，丘比特与情侣视为第三方',
        '研需投出所有单身狼人，和单身好人视',
        '暗恋者属于民牌。首夜选择暗恋任意一名角色，暗恋对象不知道被暗恋。暗恋者胜利目标始终与暗恋对象相同',
        '无特殊技能，和普通平民一致',
      ],
      products: [
        {
          name: '菩提',
          icon: p4,
          key: 'puti',
          alt: 'puti',
          href: '/product/ai/puti.html',
        },
      ],
    },
    {
      image: a4,
      alt: '狼鸦之爪',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '狼鸦之爪',
      desc: '狼鸦之爪在游戏开局时处于被封印状态，他在夜间无法得知其他狼人的身份，同时不能参与狼人讨论和袭击，但是其他狼人会知道狼鸦之爪的身份。等到游戏夜晚存活的狼人玩家少于3人时，狼鸦之爪会解除封印，不仅能知道同伴身份，也能正常参与讨论和袭击，同时还将获得一个一次性的技能。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '每晚在其他狼人行动结束后，可以再单独袭击一名玩家',
        '每天晚上可以查看一位玩家的身份是好人还是狼人',
      ],
      products: [
        {
          name: '智能无人机',
          icon: p5,
          key: 'uav',
          alt: 'uav',
          href: '/product/ai/uav.html',
        },
      ],
    },
    {
      image: a4,
      alt: '奇迹商人',
      height: 728,
      imageWidth: 712,
      imageHeight: 712,
      title: '奇迹商人',
      desc: '奇迹商人可以在任意一晚令一名角色（也就是幸运儿）获得查验、毒药或守护技能。若幸运儿是狼人，次日奇迹商人出局且技能失效。全局只有一次技能。',
      buttonText: '申请试用',
      href: '/form.html',
      solutions: [
        '每晚可以查验场上一名玩家的具体身份，并且从第二夜起纯白之女查验到狼人，则狼人死亡',
        '在夜间先手行动，每晚都可以交换2个人的号码牌，当晚有效',
        '从第二晚开始，每晚都可以狩猎一个人。若是好人，次日猎魔人出局',
        '守墓人可以得知上一个白天被放逐的玩家是好人或是狼人',
      ],
      products: [
        {
          name: '企业云',
          icon: p6,
          key: 'enterprise',
          alt: 'enterprise',
          href: '/product/ai/enterprise.html',
        },
      ],
    },
  ],
};

export default data;
