import a1 from '@/assets/images/product/dataserver/recommend/core/c1.svg';
import a2 from '@/assets/images/product/dataserver/recommend/core/c2.svg';
import a3 from '@/assets/images/product/dataserver/recommend/core/c3.svg';
import a4 from '@/assets/images/product/dataserver/recommend/core/c4.svg';

const core = {
  title: '核心功能',
  bg: '#333333',
  content: [
    {
      title: '暗影冲刺',
      text: '裂魂人盯紧一个敌方单位，开始无视一切物体的冲刺。途中经过的所有敌方单位和目标单位都将受到巨力',
      icon: a1,
      alt: '暗影冲刺',
    },
    {
      title: '威吓',
      text: '裂魂人获得移动速度和状态抗性加成，在敌人之间横冲直撞。可以在冲刺期间使用',
      icon: a2,
      alt: '威吓',
    },
    {
      title: '巨力重击',
      text: '击时有一定概率眩晕并击退敌方单位。重击的伤害值为移动速度的一定百分比',
      icon: a3,
      alt: '巨力重击',
    },
    {
      title: '幽冥一击',
      text: '裂魂人遁入幽冥领域，从不幸的目标身旁再次出现，发动当前等级的巨力重击并造成额外伤害',
      icon: a4,
      alt: '幽冥一击',
    },
  ],
};
export default core;
