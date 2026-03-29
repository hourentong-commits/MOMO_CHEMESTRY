import { ChemicalItem, Reaction, Achievement } from './types';

export const ACHIEVEMENTS: Omit<Achievement, 'condition'>[] = [
  { id: 'first_synthesis', title: '初级炼金术士', description: '完成第一次化学合成', icon: '🧪' },
  { id: 'level_5', title: '化学学徒', description: '达到等级 5', icon: '🎓' },
  { id: 'level_10', title: '资深实验员', description: '达到等级 10', icon: '🔬' },
  { id: 'discover_10', title: '博学多才', description: '发现 10 种不同的物质', icon: '📚' },
  { id: 'discover_30', title: '化学大师', description: '发现 30 种不同的物质', icon: '🌟' },
  { id: 'synthesis_50', title: '疯狂科学家', description: '累计完成 50 次合成', icon: '⚡' },
];

export const ITEMS: Record<string, ChemicalItem> = {
  'elem_H': {
    id: 'elem_H', type: 'element', name: '氢原子', formula: 'H', baseColor: '#FFFFFF', unlockLevel: 1,
    assets: { uiIcon: 'UI_Icon_Hydrogen', model3D: 'SM_Balloon_H' },
    details: { kidFriendly: '我是最轻的元素氢(H)！我像个小气球一样，在宇宙中到处都是我哦！', hardcore: '原子序数1，核外电子排布 1s¹。最外层只有一个电子，极易失去电子形成 H⁺ 或与其他非金属共用电子对。' }
  },
  'elem_O': {
    id: 'elem_O', type: 'element', name: '氧原子', formula: 'O', baseColor: '#3B82F6', unlockLevel: 1,
    assets: { uiIcon: 'UI_Icon_Oxygen', model3D: 'SM_Oxygen' },
    details: { kidFriendly: '我是氧气(O)，没有我你就没法呼吸啦！我是个活泼的小家伙。', hardcore: '原子序数8，核外电子排布 1s² 2s² 2p⁴。具有很强的电负性，是常见的氧化剂。' }
  },
  'elem_C': {
    id: 'elem_C', type: 'element', name: '碳原子', formula: 'C', baseColor: '#1F2937', unlockLevel: 1,
    assets: { uiIcon: 'UI_Icon_Carbon', model3D: 'SM_Carbon' },
    details: { kidFriendly: '我是碳(C)，铅笔芯和闪闪发光的钻石都是我变的哦！', hardcore: '原子序数6，核外电子排布 1s² 2s² 2p²。能形成四个共价键，是有机物的基础骨架。' }
  },
  'elem_N': {
    id: 'elem_N', type: 'element', name: '氮原子', formula: 'N', baseColor: '#A78BFA', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Nitrogen', model3D: 'SM_Nitrogen' },
    details: { kidFriendly: '我是氮(N)，空气里最多就是我啦！', hardcore: '原子序数7。常温下为双原子分子，由于存在 N≡N 三键，化学性质非常稳定。' }
  },
  'elem_Na': {
    id: 'elem_Na', type: 'element', name: '钠原子', formula: 'Na', baseColor: '#94A3B8', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Sodium', model3D: 'SM_Sodium' },
    details: { kidFriendly: '我是钠(Na)，我脾气很暴躁，碰到水就会爆炸！', hardcore: '原子序数11，碱金属。极易失去最外层的一个电子形成 Na⁺，具有强还原性。' }
  },
  'elem_Cl': {
    id: 'elem_Cl', type: 'element', name: '氯原子', formula: 'Cl', baseColor: '#84CC16', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Chlorine', model3D: 'SM_Chlorine' },
    details: { kidFriendly: '我是氯(Cl)，黄绿色的气体，游泳池里的消毒水味就是我！', hardcore: '原子序数17，卤族元素。电负性强，极易获得电子形成 Cl⁻，是强氧化剂。' }
  },
  'elem_S': {
    id: 'elem_S', type: 'element', name: '硫原子', formula: 'S', baseColor: '#FACC15', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Sulfur', model3D: 'SM_Sulfur' },
    details: { kidFriendly: '我是硫(S)，黄黄的，火山喷发时经常能看到我，有点臭臭的！', hardcore: '原子序数16，氧族元素。常见化合价有 -2, +4, +6，常温下为黄色晶体。' }
  },
  'elem_Ca': {
    id: 'elem_Ca', type: 'element', name: '钙原子', formula: 'Ca', baseColor: '#E5E7EB', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Calcium', model3D: 'SM_Calcium' },
    details: { kidFriendly: '我是钙(Ca)，你的骨头和牙齿里全是我！', hardcore: '原子序数20，碱土金属。活泼性仅次于碱金属，常见化合价为 +2。' }
  },
  'elem_Al': {
    id: 'elem_Al', type: 'element', name: '铝原子', formula: 'Al', baseColor: '#CBD5E1', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Aluminum', model3D: 'SM_Aluminum' },
    details: { kidFriendly: '我是铝(Al)，易拉罐就是用我做的，我很轻哦！', hardcore: '原子序数13。两性金属，既能与酸反应也能与强碱反应。' }
  },
  'elem_Fe': {
    id: 'elem_Fe', type: 'element', name: '铁原子', formula: 'Fe', baseColor: '#71717A', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Iron', model3D: 'SM_Iron' },
    details: { kidFriendly: '我是铁(Fe)，你家里的锅、汽车、大桥都是用我做的！', hardcore: '原子序数26，过渡金属。常见化合价为 +2 和 +3，在地壳中含量丰富，易被氧化生锈。' }
  },
  'elem_Cu': {
    id: 'elem_Cu', type: 'element', name: '铜原子', formula: 'Cu', baseColor: '#B45309', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Copper', model3D: 'SM_Copper' },
    details: { kidFriendly: '我是铜(Cu)，红红的，电线里面导电的金属就是我！', hardcore: '原子序数29，过渡金属。具有优良的导电性和导热性，常见化合价为 +1 和 +2。' }
  },
  'elem_K': {
    id: 'elem_K', type: 'element', name: '钾原子', formula: 'K', baseColor: '#C084FC', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Potassium', model3D: 'SM_Potassium' },
    details: { kidFriendly: '我是钾(K)，我比钠还要活泼，碰到水会着火哦！', hardcore: '原子序数19，碱金属。金属性极强，与水反应剧烈并放出氢气，焰色反应呈紫色。' }
  },
  'elem_Mg': {
    id: 'elem_Mg', type: 'element', name: '镁原子', formula: 'Mg', baseColor: '#E2E8F0', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Magnesium', model3D: 'SM_Magnesium' },
    details: { kidFriendly: '我是镁(Mg)，燃烧的时候会发出极其耀眼的白光！', hardcore: '原子序数12，碱土金属。能在空气中燃烧，甚至能在二氧化碳中燃烧，具有强还原性。' }
  },
  'elem_Zn': {
    id: 'elem_Zn', type: 'element', name: '锌原子', formula: 'Zn', baseColor: '#94A3B8', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Zinc', model3D: 'SM_Zinc' },
    details: { kidFriendly: '我是锌(Zn)，干电池里面就有我！', hardcore: '原子序数30，过渡金属。常用于电镀和制造合金，能与酸反应置换出氢气。' }
  },
  'elem_Ag': {
    id: 'elem_Ag', type: 'element', name: '银原子', formula: 'Ag', baseColor: '#E5E7EB', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Silver', model3D: 'SM_Silver' },
    details: { kidFriendly: '我是银(Ag)，闪闪发光的贵金属，导电性第一名！', hardcore: '原子序数47，过渡金属。化学性质稳定，具有极高的导电性和导热性。' }
  },
  'elem_P': {
    id: 'elem_P', type: 'element', name: '磷原子', formula: 'P', baseColor: '#EF4444', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Phosphorus', model3D: 'SM_Phosphorus' },
    details: { kidFriendly: '我是磷(P)，火柴头上的红红的东西就是我！', hardcore: '原子序数15，氮族元素。有白磷和红磷等同素异形体，白磷着火点极低。' }
  },
  'elem_He': {
    id: 'elem_He', type: 'element', name: '氦原子', formula: 'He', baseColor: '#FDE047', unlockLevel: 1,
    assets: { uiIcon: 'UI_Icon_Helium', model3D: 'SM_Helium' },
    details: { kidFriendly: '我是氦气，吸一口我的话，你的声音会变得像唐老鸭一样搞笑哦！', hardcore: '原子序数2，稀有气体。核外电子排布 1s²，化学性质极不活泼，常用于飞艇和低温冷却。' }
  },
  'elem_Li': {
    id: 'elem_Li', type: 'element', name: '锂原子', formula: 'Li', baseColor: '#D8B4E2', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Lithium', model3D: 'SM_Lithium' },
    details: { kidFriendly: '我是锂，最轻的金属！你手机和电动车里的电池就是用我做的！', hardcore: '原子序数3，碱金属。密度最小的金属，标准电极电势最负，是优秀的电池负极材料。' }
  },
  'elem_Be': {
    id: 'elem_Be', type: 'element', name: '铍原子', formula: 'Be', baseColor: '#9CA3AF', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Beryllium', model3D: 'SM_Beryllium' },
    details: { kidFriendly: '我是铍，虽然我有毒，但我能让其他金属变得超级坚硬！', hardcore: '原子序数4，碱土金属。具有两性，能透X射线，常用于制造航空航天合金。' }
  },
  'elem_B': {
    id: 'elem_B', type: 'element', name: '硼原子', formula: 'B', baseColor: '#4B5563', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Boron', model3D: 'SM_Boron' },
    details: { kidFriendly: '我是硼，我能做成防弹衣，还能做成洗眼液！', hardcore: '原子序数5，类金属。缺电子原子，常形成多中心键，硼酸是极弱的一元酸。' }
  },
  'elem_F': {
    id: 'elem_F', type: 'element', name: '氟原子', formula: 'F', baseColor: '#FEF08A', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Fluorine', model3D: 'SM_Fluorine' },
    details: { kidFriendly: '我是氟，牙膏里有我，可以保护你的牙齿不长蛀牙！', hardcore: '原子序数9，卤族元素。电负性最大的元素，氧化性极强，能与几乎所有元素反应。' }
  },
  'elem_Ne': {
    id: 'elem_Ne', type: 'element', name: '氖原子', formula: 'Ne', baseColor: '#F87171', unlockLevel: 2,
    assets: { uiIcon: 'UI_Icon_Neon', model3D: 'SM_Neon' },
    details: { kidFriendly: '我是氖气，大街上闪烁的红色霓虹灯就是我在发光！', hardcore: '原子序数10，稀有气体。通电时发出红橙色光，化学性质极不活泼。' }
  },
  'elem_Si': {
    id: 'elem_Si', type: 'element', name: '硅原子', formula: 'Si', baseColor: '#6B7280', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Silicon', model3D: 'SM_Silicon' },
    details: { kidFriendly: '我是硅，沙子和玻璃里都是我，电脑里的芯片也是我做的！', hardcore: '原子序数14，碳族元素。重要的半导体材料，地壳中含量第二丰富的元素。' }
  },
  'elem_Ar': {
    id: 'elem_Ar', type: 'element', name: '氩原子', formula: 'Ar', baseColor: '#A78BFA', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Argon', model3D: 'SM_Argon' },
    details: { kidFriendly: '我是氩气，我喜欢呆在灯泡里，保护灯丝不被烧坏！', hardcore: '原子序数18，稀有气体。空气中含量最多的稀有气体，常用作保护气。' }
  },
  'elem_Ti': {
    id: 'elem_Ti', type: 'element', name: '钛原子', formula: 'Ti', baseColor: '#D1D5DB', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Titanium', model3D: 'SM_Titanium' },
    details: { kidFriendly: '我是钛，我超级轻又超级硬，连潜水艇和火箭都用我！', hardcore: '原子序数22，过渡金属。具有优异的耐腐蚀性和高比强度，被誉为"太空金属"。' }
  },
  'elem_Au': {
    id: 'elem_Au', type: 'element', name: '金原子', formula: 'Au', baseColor: '#FBBF24', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Gold', model3D: 'SM_Gold' },
    details: { kidFriendly: '我是金子！闪闪发光，永远不会生锈，大家都喜欢我！', hardcore: '原子序数79，过渡金属。延展性极好，化学性质极不活泼，只能溶于王水。' }
  },
  'elem_Cr': {
    id: 'elem_Cr', type: 'element', name: '铬原子', formula: 'Cr', baseColor: '#94A3B8', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Chromium', model3D: 'SM_Chromium' },
    details: { kidFriendly: '我是铬，不锈钢里就有我，我能让金属变得亮晶晶又不生锈！', hardcore: '原子序数24，过渡金属。具有高硬度和优良的耐腐蚀性。' }
  },
  'elem_Pb': {
    id: 'elem_Pb', type: 'element', name: '铅原子', formula: 'Pb', baseColor: '#4B5563', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Lead', model3D: 'SM_Lead' },
    details: { kidFriendly: '我是铅，我很重也很软，虽然我有毒，但以前人们用我做水管。', hardcore: '原子序数82，主族金属。密度大，熔点低，能阻挡X射线和伽马射线。' }
  },
  'elem_Hg': {
    id: 'elem_Hg', type: 'element', name: '汞原子', formula: 'Hg', baseColor: '#E5E7EB', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Mercury', model3D: 'SM_Mercury' },
    details: { kidFriendly: '我是汞，也叫水银，我是唯一在常温下是液体的金属哦！', hardcore: '原子序数80，过渡金属。常温下唯一的液态金属，具有毒性，易形成汞齐。' }
  },
  'elem_Sn': {
    id: 'elem_Sn', type: 'element', name: '锡原子', formula: 'Sn', baseColor: '#D1D5DB', unlockLevel: 3,
    assets: { uiIcon: 'UI_Icon_Tin', model3D: 'SM_Tin' },
    details: { kidFriendly: '我是锡，马口铁罐头里就有我，我能保护食物不坏掉！', hardcore: '原子序数50，主族金属。具有良好的延展性和抗腐蚀性。' }
  },
  'elem_Pt': {
    id: 'elem_Pt', type: 'element', name: '铂原子', formula: 'Pt', baseColor: '#E2E8F0', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Platinum', model3D: 'SM_Platinum' },
    details: { kidFriendly: '我是铂，也叫白金，我比金子还要稀有和昂贵呢！', hardcore: '原子序数78，过渡金属。化学性质极不活泼，是优秀的催化剂材料。' }
  },
  'elem_Ni': {
    id: 'elem_Ni', type: 'element', name: '镍原子', formula: 'Ni', baseColor: '#CBD5E1', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Nickel', model3D: 'SM_Nickel' },
    details: { kidFriendly: '我是镍，硬币里经常有我，我也能让钢铁变得更坚韧！', hardcore: '原子序数28，过渡金属。具有良好的机械强度和延展性，常用于电镀。' }
  },

  'elem_Mn': {
    id: 'elem_Mn', type: 'element', name: '锰原子', formula: 'Mn', baseColor: '#9CA3AF', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Mn', model3D: 'SM_Mn' },
    details: { kidFriendly: '我是锰，可以让钢铁变得更耐磨！', hardcore: '过渡金属，常见化合价有+2, +4, +6, +7。' }
  },
  'elem_Br': {
    id: 'elem_Br', type: 'element', name: '溴原子', formula: 'Br', baseColor: '#991B1B', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Br', model3D: 'SM_Br' },
    details: { kidFriendly: '我是溴，常温下是红棕色的液体，味道很难闻！', hardcore: '卤族元素，常温下唯一呈液态的非金属单质，有毒且具强腐蚀性。' }
  },

  'elem_Ba': {
    id: 'elem_Ba', type: 'element', name: '钡原子', formula: 'Ba', baseColor: '#A3E635', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Ba', model3D: 'SM_Ba' },
    details: { kidFriendly: '我是钡，我的化合物燃烧时会发出绿色的光，经常用来做烟花！', hardcore: '碱土金属，化学性质活泼，其可溶性盐类有剧毒。焰色反应为黄绿色。' }
  },
  'elem_I': {
    id: 'elem_I', type: 'element', name: '碘原子', formula: 'I', baseColor: '#4C1D95', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_I', model3D: 'SM_I' },
    details: { kidFriendly: '我是碘，紫黑色的固体，遇到淀粉会变蓝，海带里有很多我！', hardcore: '卤族元素，常温下为紫黑色固体，易升华。遇淀粉变蓝是其特征反应。' }
  },
  'elem_Co': {
    id: 'elem_Co', type: 'element', name: '钴原子', formula: 'Co', baseColor: '#1E40AF', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Cobalt', model3D: 'SM_Cobalt' },
    details: { kidFriendly: '我是钴，我能让玻璃和陶瓷变成漂亮的蓝色！', hardcore: '过渡金属，具有铁磁性。常用于制造高温合金和锂电池。' }
  },
  'elem_Ga': {
    id: 'elem_Ga', type: 'element', name: '镓原子', formula: 'Ga', baseColor: '#94A3B8', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Gallium', model3D: 'SM_Gallium' },
    details: { kidFriendly: '我是镓，我能在你的手心里融化哦，因为我的熔点很低！', hardcore: '低熔点金属，熔点仅29.76℃。常用于半导体材料如砷化镓。' }
  },
  'elem_Ge': {
    id: 'elem_Ge', type: 'element', name: '锗原子', formula: 'Ge', baseColor: '#64748B', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Germanium', model3D: 'SM_Germanium' },
    details: { kidFriendly: '我是锗，我是半导体工业的先驱，晶体管里就有我！', hardcore: '类金属，重要的半导体材料，具有良好的红外透过性能。' }
  },
  'elem_As': {
    id: 'elem_As', type: 'element', name: '砷原子', formula: 'As', baseColor: '#475569', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Arsenic', model3D: 'SM_Arsenic' },
    details: { kidFriendly: '我是砷，我的化合物“砒霜”很有名，但我也有半导体的用途。', hardcore: '类金属，其单质和化合物多有毒。在半导体工业中作为掺杂剂。' }
  },
  'elem_Se': {
    id: 'elem_Se', type: 'element', name: '硒原子', formula: 'Se', baseColor: '#7F1D1D', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Selenium', model3D: 'SM_Selenium' },
    details: { kidFriendly: '我是硒，复印机和太阳能电池里都有我，我还能抗癌呢！', hardcore: '非金属，具有光敏性和半导体性质。是人体必需的微量元素。' }
  },
  'elem_Kr': {
    id: 'elem_Kr', type: 'element', name: '氪原子', formula: 'Kr', baseColor: '#F1F5F9', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Krypton', model3D: 'SM_Krypton' },
    details: { kidFriendly: '我是氪，我是稀有气体，高功率激光器里经常用到我。', hardcore: '稀有气体，化学性质极不活泼。常用于填充荧光灯和激光器。' }
  },
  'elem_Xe': {
    id: 'elem_Xe', type: 'element', name: '氙原子', formula: 'Xe', baseColor: '#E2E8F0', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Xenon', model3D: 'SM_Xenon' },
    details: { kidFriendly: '我是氙，汽车的氙气大灯就是用我做的，光线非常亮！', hardcore: '稀有气体，是第一个被发现能形成稳定化合物的稀有气体。' }
  },
  'elem_W': {
    id: 'elem_W', type: 'element', name: '钨原子', formula: 'W', baseColor: '#334155', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Tungsten', model3D: 'SM_Tungsten' },
    details: { kidFriendly: '我是钨，我的熔点是所有金属中最高的，白炽灯的灯丝就是我！', hardcore: '熔点最高的金属（3422℃）。硬度大，常用于制造硬质合金。' }
  },
  'elem_Pd': {
    id: 'elem_Pd', type: 'element', name: '钯原子', formula: 'Pd', baseColor: '#CBD5E1', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Palladium', model3D: 'SM_Palladium' },
    details: { kidFriendly: '我是钯，我能吸收比自己体积大几百倍的氢气！', hardcore: '铂族金属，具有极强的吸氢能力。是优秀的加氢催化剂。' }
  },
  'elem_Cd': {
    id: 'elem_Cd', type: 'element', name: '镉原子', formula: 'Cd', baseColor: '#94A3B8', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Cadmium', model3D: 'SM_Cadmium' },
    details: { kidFriendly: '我是镉，以前的充电电池里经常有我，但我对环境有害。', hardcore: '过渡金属，常用于电镀、颜料和镍镉电池。具有毒性。' }
  },
  'elem_Sb': {
    id: 'elem_Sb', type: 'element', name: '锑原子', formula: 'Sb', baseColor: '#64748B', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Antimony', model3D: 'SM_Antimony' },
    details: { kidFriendly: '我是锑，我是半导体，也能让塑料变得不容易着火。', hardcore: '类金属，常用于制造合金（如铅锑合金）和阻燃剂。' }
  },
  'elem_Te': {
    id: 'elem_Te', type: 'element', name: '碲原子', formula: 'Te', baseColor: '#475569', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Tellurium', model3D: 'SM_Tellurium' },
    details: { kidFriendly: '我是碲，我能让钢铁更容易切削，太阳能电池也需要我。', hardcore: '类金属，具有半导体性质。常用于合金添加剂和光电材料。' }
  },
  'elem_Cs': {
    id: 'elem_Cs', type: 'element', name: '铯原子', formula: 'Cs', baseColor: '#FDE047', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Cesium', model3D: 'SM_Cesium' },
    details: { kidFriendly: '我是铯，我是最活泼的金属之一，原子钟就是用我来计时的！', hardcore: '碱金属，极易与水反应。133Cs原子的振动频率被用于定义“秒”。' }
  },
  'elem_Rb': {
    id: 'elem_Rb', type: 'element', name: '铷原子', formula: 'Rb', baseColor: '#FACC15', unlockLevel: 5,
    assets: { uiIcon: 'UI_Icon_Rubidium', model3D: 'SM_Rubidium' },
    details: { kidFriendly: '我是铷，我非常活泼，放在水里会剧烈爆炸！', hardcore: '碱金属，化学性质极活泼。常用于特种玻璃和光电池。' }
  },
  'elem_Sr': {
    id: 'elem_Sr', type: 'element', name: '锶原子', formula: 'Sr', baseColor: '#BEF264', unlockLevel: 4,
    assets: { uiIcon: 'UI_Icon_Strontium', model3D: 'SM_Strontium' },
    details: { kidFriendly: '我是锶，我的化合物燃烧时会发出鲜艳的红色，是烟花的常客！', hardcore: '碱土金属，焰色反应为洋红色。常用于制造彩色电视荧光屏。' }
  },

  // Compounds
  'comp_H2O': {
    id: 'comp_H2O', type: 'compound', name: '水', formula: 'H2O', baseColor: '#4DA8DA', unlockLevel: 1,
    composition: { 'elem_H': 2, 'elem_O': 1 },
    assets: { uiIcon: 'UI_Icon_WaterDrop', model3D: 'SM_WaterDrop' },
    details: { kidFriendly: '我是水(H2O)，地球上最常见的液体，你每天都要喝我，对吗？', hardcore: '极性共价化合物，分子空间构型为V型（折线型）。由于分子间氢键的存在，具有反常的高沸点和高比热容。' }
  },
  'comp_CO2': {
    id: 'comp_CO2', type: 'compound', name: '二氧化碳', formula: 'CO2', baseColor: '#9CA3AF', unlockLevel: 1,
    composition: { 'elem_C': 1, 'elem_O': 2 },
    assets: { uiIcon: 'UI_Icon_CO2', model3D: 'SM_CO2' },
    details: { kidFriendly: '我是二氧化碳，你呼出的气体里就有我，植物最喜欢吸收我了！', hardcore: '直线型非极性分子，碳原子采取 sp 杂化。是主要的温室气体，固态称为干冰。' }
  },
  'comp_NH3': {
    id: 'comp_NH3', type: 'compound', name: '氨气', formula: 'NH3', baseColor: '#C4B5FD', unlockLevel: 2,
    composition: { 'elem_N': 1, 'elem_H': 3 },
    assets: { uiIcon: 'UI_Icon_Ammonia', model3D: 'SM_Ammonia' },
    details: { kidFriendly: '我是氨气，有点刺鼻的味道，经常用来做化肥！', hardcore: '三角锥形分子，极性分子。极易溶于水形成氨水，水溶液呈弱碱性。' }
  },
  'comp_HNO3': {
    id: 'comp_HNO3', type: 'compound', name: '硝酸', formula: 'HNO3', baseColor: '#FCA5A5', unlockLevel: 2,
    composition: { 'elem_H': 1, 'elem_N': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_NitricAcid', model3D: 'SM_NitricAcid' },
    details: { kidFriendly: '我是硝酸，一种强酸，非常危险，不要随便碰我！', hardcore: '强酸，具有强氧化性。能与大多数金属反应，常温下见光易分解。' }
  },
  'comp_H2SO4': {
    id: 'comp_H2SO4', type: 'compound', name: '硫酸', formula: 'H2SO4', baseColor: '#FDE047', unlockLevel: 2,
    composition: { 'elem_H': 2, 'elem_S': 1, 'elem_O': 4 },
    assets: { uiIcon: 'UI_Icon_SulfuricAcid', model3D: 'SM_SulfuricAcid' },
    details: { kidFriendly: '我是硫酸，化工之母！但我有很强的腐蚀性哦！', hardcore: '强酸，高沸点难挥发。浓硫酸具有强吸水性、脱水性和强氧化性。' }
  },
  'comp_HCl': {
    id: 'comp_HCl', type: 'compound', name: '氯化氢', formula: 'HCl', baseColor: '#BEF264', unlockLevel: 2,
    composition: { 'elem_H': 1, 'elem_Cl': 1 },
    assets: { uiIcon: 'UI_Icon_HCl', model3D: 'SM_HCl' },
    details: { kidFriendly: '我是氯化氢，溶于水就变成了盐酸，你胃里的胃酸主要就是我！', hardcore: '无色有刺激性气味的气体。极易溶于水，其水溶液为盐酸，是一种强酸。' }
  },
  'comp_NaOH': {
    id: 'comp_NaOH', type: 'compound', name: '氢氧化钠 (烧碱)', formula: 'NaOH', baseColor: '#F1F5F9', unlockLevel: 2,
    composition: { 'elem_Na': 1, 'elem_O': 1, 'elem_H': 1 },
    assets: { uiIcon: 'UI_Icon_NaOH', model3D: 'SM_NaOH' },
    details: { kidFriendly: '我是烧碱，可以用来做肥皂，摸起来滑溜溜的，但会烧伤皮肤！', hardcore: '强碱，白色固体，极易吸收空气中的水分而潮解。能与酸性氧化物反应。' }
  },
  'comp_NaCl': {
    id: 'comp_NaCl', type: 'compound', name: '氯化钠 (食盐)', formula: 'NaCl', baseColor: '#F8FAFC', unlockLevel: 2,
    composition: { 'elem_Na': 1, 'elem_Cl': 1 },
    assets: { uiIcon: 'UI_Icon_Salt', model3D: 'SM_NaCl' },
    details: { kidFriendly: '我是食盐，你每天吃的菜里都有我，咸咸的！', hardcore: '典型的离子晶体，面心立方点阵结构。在水中完全电离，是维持人体渗透压的重要物质。' }
  },
  'comp_CaCO3': {
    id: 'comp_CaCO3', type: 'compound', name: '碳酸钙', formula: 'CaCO3', baseColor: '#E2E8F0', unlockLevel: 3,
    composition: { 'elem_Ca': 1, 'elem_C': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_CaCO3', model3D: 'SM_CaCO3' },
    details: { kidFriendly: '我是碳酸钙，大理石、粉笔和珍珠的主要成分都是我！', hardcore: '难溶于水的白色固体。高温下分解生成氧化钙和二氧化碳，能与稀酸反应释放二氧化碳。' }
  },
  'comp_FeS': {
    id: 'comp_FeS', type: 'compound', name: '硫化亚铁', formula: 'FeS', baseColor: '#3F3F46', unlockLevel: 3,
    composition: { 'elem_Fe': 1, 'elem_S': 1 },
    assets: { uiIcon: 'UI_Icon_FeS', model3D: 'SM_FeS' },
    details: { kidFriendly: '我是硫化亚铁，黑黑的石头，在实验室里经常用来制造臭鸡蛋气味的气体！', hardcore: '黑色固体，难溶于水，但能溶于稀酸释放出硫化氢(H2S)气体。' }
  },
  'comp_CuO': {
    id: 'comp_CuO', type: 'compound', name: '氧化铜', formula: 'CuO', baseColor: '#18181B', unlockLevel: 3,
    composition: { 'elem_Cu': 1, 'elem_O': 1 },
    assets: { uiIcon: 'UI_Icon_CuO', model3D: 'SM_CuO' },
    details: { kidFriendly: '我是氧化铜，黑黑的粉末，虽然铜是红色的，但我可是黑色的哦！', hardcore: '黑色单斜晶系结晶或粉末。属于碱性氧化物，能溶于酸形成铜盐溶液。' }
  },
  'comp_CH3COOH': {
    id: 'comp_CH3COOH', type: 'compound', name: '乙酸 (醋酸)', formula: 'CH3COOH', baseColor: '#FFFDD0', unlockLevel: 2,
    composition: { 'elem_C': 2, 'elem_H': 4, 'elem_O': 2 },
    assets: { uiIcon: 'UI_Icon_Vinegar', model3D: 'SM_Molecule_AceticAcid' },
    details: { kidFriendly: '我是醋酸，你吃饺子时蘸的醋里就有我，酸酸的！', hardcore: '一元弱酸，含有羧基(-COOH)。能发生酯化反应，在水溶液中存在电离平衡。' }
  },
  'comp_C2H5OH': {
    id: 'comp_C2H5OH', type: 'compound', name: '乙醇 (酒精)', formula: 'C2H5OH', baseColor: '#E2E8F0', unlockLevel: 2,
    composition: { 'elem_C': 2, 'elem_H': 6, 'elem_O': 1 },
    assets: { uiIcon: 'UI_Icon_Alcohol', model3D: 'SM_Molecule_Ethanol' },
    details: { kidFriendly: '我是酒精，可以用来消毒，也可以做燃料，但我不能随便喝哦！', hardcore: '含有羟基(-OH)的有机化合物。能与金属钠反应，也能发生氧化反应生成乙醛或乙酸。' }
  },
  'comp_CH3COOC2H5': {
    id: 'comp_CH3COOC2H5', type: 'compound', name: '乙酸乙酯', formula: 'CH3COOC2H5', baseColor: '#FDF2F2', unlockLevel: 2,
    composition: { 'elem_C': 4, 'elem_H': 8, 'elem_O': 2 },
    assets: { uiIcon: 'UI_Icon_Ester', model3D: 'SM_Molecule_EthylAcetate' },
    details: { kidFriendly: '我有好闻的水果香味！很多香水和指甲油里都有我。', hardcore: '典型的酯类化合物。在酸性或碱性条件下可发生水解反应。' }
  },
  'comp_H2O2': {
    id: 'comp_H2O2', type: 'compound', name: '过氧化氢 (双氧水)', formula: 'H2O2', baseColor: '#BAE6FD', unlockLevel: 3,
    composition: { 'elem_H': 2, 'elem_O': 2 },
    assets: { uiIcon: 'UI_Icon_H2O2', model3D: 'SM_H2O2' },
    details: { kidFriendly: '我是双氧水，受伤了可以用我来消毒，会冒泡泡哦！', hardcore: '含有过氧键(-O-O-)，具有强氧化性。在催化剂（如二氧化锰）作用下易分解为水和氧气。' }
  },
  'comp_CH4': {
    id: 'comp_CH4', type: 'compound', name: '甲烷 (天然气)', formula: 'CH4', baseColor: '#D1D5DB', unlockLevel: 3,
    composition: { 'elem_C': 1, 'elem_H': 4 },
    assets: { uiIcon: 'UI_Icon_CH4', model3D: 'SM_CH4' },
    details: { kidFriendly: '我是甲烷，家里做饭用的天然气主要就是我！', hardcore: '最简单的有机物，正四面体结构。化学性质相对稳定，但在氧气中可燃烧生成二氧化碳和水。' }
  },
  'comp_ZnCl2': {
    id: 'comp_ZnCl2', type: 'compound', name: '氯化锌', formula: 'ZnCl2', baseColor: '#F8FAFC', unlockLevel: 3,
    composition: { 'elem_Zn': 1, 'elem_Cl': 2 },
    assets: { uiIcon: 'UI_Icon_ZnCl2', model3D: 'SM_ZnCl2' },
    details: { kidFriendly: '我是氯化锌，可以用来做干电池和防腐剂！', hardcore: '白色固体，极易溶于水。其水溶液呈酸性，具有较强的吸水性。' }
  },
  'comp_AgNO3': {
    id: 'comp_AgNO3', type: 'compound', name: '硝酸银', formula: 'AgNO3', baseColor: '#F3F4F6', unlockLevel: 4,
    composition: { 'elem_Ag': 1, 'elem_N': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_AgNO3', model3D: 'SM_AgNO3' },
    details: { kidFriendly: '我是硝酸银，碰到光会变黑，以前洗照片都要用到我！', hardcore: '白色结晶，易溶于水。见光易分解，是检验卤素离子的重要试剂。' }
  },
  'comp_AgCl': {
    id: 'comp_AgCl', type: 'compound', name: '氯化银', formula: 'AgCl', baseColor: '#FFFFFF', unlockLevel: 4,
    composition: { 'elem_Ag': 1, 'elem_Cl': 1 },
    assets: { uiIcon: 'UI_Icon_AgCl', model3D: 'SM_AgCl' },
    details: { kidFriendly: '我是氯化银，白色的沉淀，像雪花一样！', hardcore: '难溶于水的白色沉淀。见光易分解为银和氯气，常用于光敏材料。' }
  },
  'comp_NaNO3': {
    id: 'comp_NaNO3', type: 'compound', name: '硝酸钠', formula: 'NaNO3', baseColor: '#F8FAFC', unlockLevel: 4,
    composition: { 'elem_Na': 1, 'elem_N': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_NaNO3', model3D: 'SM_NaNO3' },
    details: { kidFriendly: '我是硝酸钠，也叫智利硝石，可以用来做肥料！', hardcore: '无色透明或白微带黄色的菱形结晶。易溶于水，高温下分解为亚硝酸钠和氧气。' }
  },
  'comp_P2O5': {
    id: 'comp_P2O5', type: 'compound', name: '五氧化二磷', formula: 'P2O5', baseColor: '#FEF2F2', unlockLevel: 4,
    composition: { 'elem_P': 2, 'elem_O': 5 },
    assets: { uiIcon: 'UI_Icon_P2O5', model3D: 'SM_P2O5' },
    details: { kidFriendly: '我是五氧化二磷，白色的浓烟，非常喜欢吸水！', hardcore: '白色粉末，极易吸水，是极强的干燥剂。溶于水生成磷酸，反应剧烈并放热。' }
  },
  'comp_C6H12O6': {
    id: 'comp_C6H12O6', type: 'compound', name: '葡萄糖', formula: 'C6H12O6', baseColor: '#FFFFFF', unlockLevel: 3,
    composition: { 'elem_C': 6, 'elem_H': 12, 'elem_O': 6 },
    assets: { uiIcon: 'UI_Icon_Glucose', model3D: 'SM_Glucose' },
    details: { kidFriendly: '我是葡萄糖，甜甜的，是你身体能量的主要来源！', hardcore: '单糖，含有醛基和多个羟基。在生物体内通过有氧呼吸氧化分解释放能量。' }
  },
  'comp_KMnO4': {
    id: 'comp_KMnO4', type: 'compound', name: '高锰酸钾', formula: 'KMnO4', baseColor: '#8B5CF6', unlockLevel: 4,
    composition: { 'elem_K': 1, 'elem_Mn': 1, 'elem_O': 4 },
    assets: { uiIcon: 'UI_Icon_KMnO4', model3D: 'SM_KMnO4' },
    details: { kidFriendly: '我是高锰酸钾，紫色的晶体，溶在水里也是紫色的，可以用来消毒！', hardcore: '强氧化剂，紫黑色晶体。在酸性溶液中氧化性极强，常用于实验室制取氧气。' }
  },
  'comp_KClO3': {
    id: 'comp_KClO3', type: 'compound', name: '氯酸钾', formula: 'KClO3', baseColor: '#F8FAFC', unlockLevel: 4,
    composition: { 'elem_K': 1, 'elem_Cl': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_KClO3', model3D: 'SM_KClO3' },
    details: { kidFriendly: '我是氯酸钾，加热我就可以放出氧气哦！', hardcore: '无色或白色结晶。强氧化剂，加热时在催化剂（如MnO2）作用下分解生成氯化钾和氧气。' }
  },
  'comp_KCl': {
    id: 'comp_KCl', type: 'compound', name: '氯化钾', formula: 'KCl', baseColor: '#F1F5F9', unlockLevel: 3,
    composition: { 'elem_K': 1, 'elem_Cl': 1 },
    assets: { uiIcon: 'UI_Icon_KCl', model3D: 'SM_KCl' },
    details: { kidFriendly: '我是氯化钾，和食盐很像，也是咸的，经常用作钾肥！', hardcore: '离子晶体，易溶于水。在农业上是常用的钾肥，也是维持人体细胞内渗透压的重要物质。' }
  },
  'comp_SO2': {
    id: 'comp_SO2', type: 'compound', name: '二氧化硫', formula: 'SO2', baseColor: '#D1D5DB', unlockLevel: 2,
    composition: { 'elem_S': 1, 'elem_O': 2 },
    assets: { uiIcon: 'UI_Icon_SO2', model3D: 'SM_SO2' },
    details: { kidFriendly: '我是二氧化硫，有刺激性气味，酸雨里面就有我！', hardcore: '无色有刺激性气味气体。具有漂白性和还原性，溶于水生成亚硫酸。' }
  },
  'comp_SO3': {
    id: 'comp_SO3', type: 'compound', name: '三氧化硫', formula: 'SO3', baseColor: '#E5E7EB', unlockLevel: 3,
    composition: { 'elem_S': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_SO3', model3D: 'SM_SO3' },
    details: { kidFriendly: '我是三氧化硫，遇到水就会变成可怕的硫酸！', hardcore: '无色易挥发固体。酸性氧化物，与水剧烈反应生成硫酸并放出大量热。' }
  },
  'comp_H2CO3': {
    id: 'comp_H2CO3', type: 'compound', name: '碳酸', formula: 'H2CO3', baseColor: '#BFDBFE', unlockLevel: 2,
    composition: { 'elem_H': 2, 'elem_C': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_H2CO3', model3D: 'SM_H2CO3' },
    details: { kidFriendly: '我是碳酸，汽水里的气泡就是我分解出来的二氧化碳！', hardcore: '二元弱酸，极不稳定，常温下易分解为二氧化碳和水。' }
  },
  'comp_Na2CO3': {
    id: 'comp_Na2CO3', type: 'compound', name: '碳酸钠 (纯碱)', formula: 'Na2CO3', baseColor: '#F8FAFC', unlockLevel: 3,
    composition: { 'elem_Na': 2, 'elem_C': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_Na2CO3', model3D: 'SM_Na2CO3' },
    details: { kidFriendly: '我是纯碱，虽然叫碱，但我其实是一种盐！可以用来洗油污。', hardcore: '强碱弱酸盐，水溶液因水解呈碱性。广泛用于玻璃、造纸、纺织和洗涤剂工业。' }
  },
  'comp_NaHCO3': {
    id: 'comp_NaHCO3', type: 'compound', name: '碳酸氢钠 (小苏打)', formula: 'NaHCO3', baseColor: '#FFFFFF', unlockLevel: 3,
    composition: { 'elem_Na': 1, 'elem_H': 1, 'elem_C': 1, 'elem_O': 3 },
    assets: { uiIcon: 'UI_Icon_NaHCO3', model3D: 'SM_NaHCO3' },
    details: { kidFriendly: '我是小苏打，做面包和馒头的时候加一点，就能变得松软！', hardcore: '酸式盐，水溶液呈弱碱性。受热易分解生成碳酸钠、水和二氧化碳，常作膨松剂和抗酸药。' }
  },
  'comp_CaO': {
    id: 'comp_CaO', type: 'compound', name: '氧化钙 (生石灰)', formula: 'CaO', baseColor: '#E2E8F0', unlockLevel: 3,
    composition: { 'elem_Ca': 1, 'elem_O': 1 },
    assets: { uiIcon: 'UI_Icon_CaO', model3D: 'SM_CaO' },
    details: { kidFriendly: '我是生石灰，遇到水会变得非常烫，可以用来煮自热火锅！', hardcore: '碱性氧化物，白色固体。与水反应剧烈，放出大量热，生成氢氧化钙。' }
  },
  'comp_CaOH2': {
    id: 'comp_CaOH2', type: 'compound', name: '氢氧化钙 (熟石灰)', formula: 'Ca(OH)2', baseColor: '#F1F5F9', unlockLevel: 3,
    composition: { 'elem_Ca': 1, 'elem_O': 2, 'elem_H': 2 },
    assets: { uiIcon: 'UI_Icon_CaOH2', model3D: 'SM_CaOH2' },
    details: { kidFriendly: '我是熟石灰，可以用来刷墙，也可以用来改良酸性土壤！', hardcore: '强碱，微溶于水，其水溶液称为石灰水。能吸收空气中的二氧化碳生成碳酸钙沉淀。' }
  },
  'comp_Na2O': { id: 'comp_Na2O', type: 'compound', name: '氧化钠', formula: 'Na2O', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_Na': 2, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Na2O', model3D: 'SM_Na2O' }, details: { kidFriendly: '白色的粉末，钠在空气中慢慢氧化就会变成我。', hardcore: '碱性氧化物，与水反应生成氢氧化钠。' } },
  'comp_Na2O2': { id: 'comp_Na2O2', type: 'compound', name: '过氧化钠', formula: 'Na2O2', baseColor: '#FEF08A', unlockLevel: 4, composition: { 'elem_Na': 2, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_Na2O2', model3D: 'SM_Na2O2' }, details: { kidFriendly: '淡黄色的粉末，能把二氧化碳变成氧气，潜水艇里经常用我！', hardcore: '过氧化物，含有过氧键，具有强氧化性，与水或二氧化碳反应生成氧气。' } },
  'comp_AlCl3': { id: 'comp_AlCl3', type: 'compound', name: '氯化铝', formula: 'AlCl3', baseColor: '#F8FAFC', unlockLevel: 3, composition: { 'elem_Al': 1, 'elem_Cl': 3 }, assets: { uiIcon: 'UI_Icon_AlCl3', model3D: 'SM_AlCl3' }, details: { kidFriendly: '白色的晶体，可以用作净水剂。', hardcore: '共价化合物，易升华，在水中易水解。' } },
  'comp_NaAlO2': { id: 'comp_NaAlO2', type: 'compound', name: '偏铝酸钠', formula: 'NaAlO2', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_Na': 1, 'elem_Al': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_NaAlO2', model3D: 'SM_NaAlO2' }, details: { kidFriendly: '铝溶在强碱里就会变成我！', hardcore: '强碱弱酸盐，水溶液呈碱性，与酸反应生成氢氧化铝沉淀。' } },
  'comp_Al2O3': { id: 'comp_Al2O3', type: 'compound', name: '氧化铝', formula: 'Al2O3', baseColor: '#E5E7EB', unlockLevel: 3, composition: { 'elem_Al': 2, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Al2O3', model3D: 'SM_Al2O3' }, details: { kidFriendly: '红宝石和蓝宝石的主要成分就是我，我非常坚硬！', hardcore: '两性氧化物，熔点极高，既能溶于强酸也能溶于强碱。' } },
  'comp_AlOH3': { id: 'comp_AlOH3', type: 'compound', name: '氢氧化铝', formula: 'Al(OH)3', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_Al': 1, 'elem_O': 3, 'elem_H': 3 }, assets: { uiIcon: 'UI_Icon_AlOH3', model3D: 'SM_AlOH3' }, details: { kidFriendly: '白色的胶状沉淀，可以用来治疗胃酸过多！', hardcore: '两性氢氧化物，能凝聚水中的悬浮物，有净水作用。' } },
  'comp_Fe2O3': { id: 'comp_Fe2O3', type: 'compound', name: '氧化铁', formula: 'Fe2O3', baseColor: '#991B1B', unlockLevel: 3, composition: { 'elem_Fe': 2, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Fe2O3', model3D: 'SM_Fe2O3' }, details: { kidFriendly: '红色的粉末，铁生锈了就是变成了我，也可以做红色颜料！', hardcore: '碱性氧化物，俗称铁红，难溶于水，溶于酸。' } },
  'comp_Fe3O4': { id: 'comp_Fe3O4', type: 'compound', name: '四氧化三铁', formula: 'Fe3O4', baseColor: '#1F2937', unlockLevel: 3, composition: { 'elem_Fe': 3, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_Fe3O4', model3D: 'SM_Fe3O4' }, details: { kidFriendly: '黑色的晶体，有磁性，吸铁石就是用我做的！', hardcore: '具有磁性的黑色晶体，可以看作是 FeO·Fe2O3。' } },
  'comp_FeCl2': { id: 'comp_FeCl2', type: 'compound', name: '氯化亚铁', formula: 'FeCl2', baseColor: '#A3E635', unlockLevel: 3, composition: { 'elem_Fe': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_FeCl2', model3D: 'SM_FeCl2' }, details: { kidFriendly: '浅绿色的溶液，铁离子被还原后就会变成我。', hardcore: '含有 Fe2+，水溶液呈浅绿色，具有还原性，易被氧化为 Fe3+。' } },
  'comp_FeCl3': { id: 'comp_FeCl3', type: 'compound', name: '氯化铁', formula: 'FeCl3', baseColor: '#CA8A04', unlockLevel: 3, composition: { 'elem_Fe': 1, 'elem_Cl': 3 }, assets: { uiIcon: 'UI_Icon_FeCl3', model3D: 'SM_FeCl3' }, details: { kidFriendly: '黄褐色的溶液，可以用来腐蚀铜板制作电路板！', hardcore: '含有 Fe3+，水溶液呈棕黄色，具有较强的氧化性。' } },
  'comp_FeOH2': { id: 'comp_FeOH2', type: 'compound', name: '氢氧化亚铁', formula: 'Fe(OH)2', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Fe': 1, 'elem_O': 2, 'elem_H': 2 }, assets: { uiIcon: 'UI_Icon_FeOH2', model3D: 'SM_FeOH2' }, details: { kidFriendly: '白色的沉淀，但在空气中会迅速变成灰绿色，最后变成红褐色！', hardcore: '白色絮状沉淀，极不稳定，在空气中极易被氧化为氢氧化铁。' } },
  'comp_FeOH3': { id: 'comp_FeOH3', type: 'compound', name: '氢氧化铁', formula: 'Fe(OH)3', baseColor: '#B45309', unlockLevel: 3, composition: { 'elem_Fe': 1, 'elem_O': 3, 'elem_H': 3 }, assets: { uiIcon: 'UI_Icon_FeOH3', model3D: 'SM_FeOH3' }, details: { kidFriendly: '红褐色的沉淀，铁锈的主要成分之一。', hardcore: '红褐色沉淀，难溶于水，受热分解为氧化铁和水。' } },
  'comp_FeSO4': { id: 'comp_FeSO4', type: 'compound', name: '硫酸亚铁', formula: 'FeSO4', baseColor: '#A3E635', unlockLevel: 3, composition: { 'elem_Fe': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_FeSO4', model3D: 'SM_FeSO4' }, details: { kidFriendly: '浅绿色的晶体，也叫绿矾，可以用来补铁！', hardcore: '含有 Fe2+，水溶液呈浅绿色，易被空气氧化。' } },
  'comp_MnO2': { id: 'comp_MnO2', type: 'compound', name: '二氧化锰', formula: 'MnO2', baseColor: '#111827', unlockLevel: 3, composition: { 'elem_Mn': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_MnO2', model3D: 'SM_MnO2' }, details: { kidFriendly: '黑色的粉末，干电池里有我，我还是制造氧气的好帮手（催化剂）！', hardcore: '黑色无定形粉末或黑色斜方晶体，常作催化剂或氧化剂。' } },
  'comp_MnCl2': { id: 'comp_MnCl2', type: 'compound', name: '氯化锰', formula: 'MnCl2', baseColor: '#FBCFE8', unlockLevel: 4, composition: { 'elem_Mn': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_MnCl2', model3D: 'SM_MnCl2' }, details: { kidFriendly: '粉红色的晶体，实验室制取氯气时会生成我。', hardcore: '含有 Mn2+，水溶液呈微粉红色。' } },
  'comp_HClO': { id: 'comp_HClO', type: 'compound', name: '次氯酸', formula: 'HClO', baseColor: '#FEF9C3', unlockLevel: 4, composition: { 'elem_H': 1, 'elem_Cl': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_HClO', model3D: 'SM_HClO' }, details: { kidFriendly: '我有很强的漂白作用，能让有颜色的布条褪色！', hardcore: '弱酸，具有强氧化性和漂白性，见光易分解。' } },
  'comp_CaClO2': { id: 'comp_CaClO2', type: 'compound', name: '次氯酸钙', formula: 'Ca(ClO)2', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_Ca': 1, 'elem_Cl': 2, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_CaClO2', model3D: 'SM_CaClO2' }, details: { kidFriendly: '漂白粉的有效成分就是我，游泳池消毒也靠我！', hardcore: '漂白粉的有效成分，与空气中的二氧化碳和水反应生成次氯酸发挥漂白作用。' } },
  'comp_H2SO3': { id: 'comp_H2SO3', type: 'compound', name: '亚硫酸', formula: 'H2SO3', baseColor: '#E0F2FE', unlockLevel: 3, composition: { 'elem_H': 2, 'elem_S': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_H2SO3', model3D: 'SM_H2SO3' }, details: { kidFriendly: '二氧化硫溶在水里就变成了我，酸雨里也有我。', hardcore: '二元弱酸，不稳定，具有还原性，易被氧化为硫酸。' } },
  'comp_CuSO4': { id: 'comp_CuSO4', type: 'compound', name: '硫酸铜', formula: 'CuSO4', baseColor: '#3B82F6', unlockLevel: 3, composition: { 'elem_Cu': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_CuSO4', model3D: 'SM_CuSO4' }, details: { kidFriendly: '蓝色的溶液非常漂亮，可以用来配制农药波尔多液！', hardcore: '白色粉末（无水），吸水后形成蓝色的五水硫酸铜晶体，常用于检验水的存在。' } },
  'comp_NO': { id: 'comp_NO', type: 'compound', name: '一氧化氮', formula: 'NO', baseColor: '#D1D5DB', unlockLevel: 3, composition: { 'elem_N': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_NO', model3D: 'SM_NO' }, details: { kidFriendly: '无色气体，在空气中一露头就会变成红棕色！', hardcore: '无色有毒气体，极易与氧气反应生成二氧化氮。' } },
  'comp_NO2': { id: 'comp_NO2', type: 'compound', name: '二氧化氮', formula: 'NO2', baseColor: '#B45309', unlockLevel: 3, composition: { 'elem_N': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_NO2', model3D: 'SM_NO2' }, details: { kidFriendly: '红棕色的有毒气体，有刺激性气味，光化学烟雾的罪魁祸首之一！', hardcore: '红棕色有毒气体，溶于水生成硝酸和一氧化氮。' } },
  'comp_CH3Cl': { id: 'comp_CH3Cl', type: 'compound', name: '一氯甲烷', formula: 'CH3Cl', baseColor: '#E5E7EB', unlockLevel: 4, composition: { 'elem_C': 1, 'elem_H': 3, 'elem_Cl': 1 }, assets: { uiIcon: 'UI_Icon_CH3Cl', model3D: 'SM_CH3Cl' }, details: { kidFriendly: '甲烷和氯气反应的产物，常温下是气体。', hardcore: '甲烷取代反应的第一步产物，常温下为无色气体。' } },
  'comp_C2H4': { id: 'comp_C2H4', type: 'compound', name: '乙烯', formula: 'C2H4', baseColor: '#D1D5DB', unlockLevel: 3, composition: { 'elem_C': 2, 'elem_H': 4 }, assets: { uiIcon: 'UI_Icon_C2H4', model3D: 'SM_C2H4' }, details: { kidFriendly: '可以用来催熟水果，比如让青香蕉变黄！', hardcore: '最简单的烯烃，含有碳碳双键，能发生加成反应和聚合反应，是重要的化工原料。' } },
  'comp_Br2': { id: 'comp_Br2', type: 'compound', name: '溴单质', formula: 'Br2', baseColor: '#7F1D1D', unlockLevel: 4, composition: { 'elem_Br': 2 }, assets: { uiIcon: 'UI_Icon_Br2', model3D: 'SM_Br2' }, details: { kidFriendly: '红棕色的液体，很容易挥发成红棕色的气体。', hardcore: '常温下唯一的液态非金属单质，易挥发，有毒，水溶液称为溴水。' } },
  'comp_C2H4Br2': { id: 'comp_C2H4Br2', type: 'compound', name: '1,2-二溴乙烷', formula: 'CH2BrCH2Br', baseColor: '#F3F4F6', unlockLevel: 4, composition: { 'elem_C': 2, 'elem_H': 4, 'elem_Br': 2 }, assets: { uiIcon: 'UI_Icon_C2H4Br2', model3D: 'SM_C2H4Br2' }, details: { kidFriendly: '乙烯和溴水反应生成的无色液体。', hardcore: '乙烯与溴发生加成反应的产物，常温下为无色液体。' } },
  'comp_CH3CHO': { id: 'comp_CH3CHO', type: 'compound', name: '乙醛', formula: 'CH3CHO', baseColor: '#FEF3C7', unlockLevel: 4, composition: { 'elem_C': 2, 'elem_H': 4, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_CH3CHO', model3D: 'SM_CH3CHO' }, details: { kidFriendly: '有刺激性气味的液体，喝酒后脸红就是因为体内产生了它！', hardcore: '含有醛基，能发生银镜反应或与新制氢氧化铜反应，可被氧化为乙酸或还原为乙醇。' } },
  'comp_FeNO3_2': { id: 'comp_FeNO3_2', type: 'compound', name: '硝酸亚铁', formula: 'Fe(NO3)2', baseColor: '#A3E635', unlockLevel: 4, composition: { 'elem_Fe': 1, 'elem_N': 2, 'elem_O': 6 }, assets: { uiIcon: 'UI_Icon_FeNO3_2', model3D: 'SM_FeNO3_2' }, details: { kidFriendly: '浅绿色的溶液。', hardcore: '含有Fe2+和NO3-，在酸性条件下具有强氧化性。' } },
  'comp_CaCl2': { id: 'comp_CaCl2', type: 'compound', name: '氯化钙', formula: 'CaCl2', baseColor: '#F8FAFC', unlockLevel: 3, composition: { 'elem_Ca': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_CaCl2', model3D: 'SM_CaCl2' }, details: { kidFriendly: '白色的干燥剂。', hardcore: '极易吸水潮解，常用作干燥剂和融雪剂。' } },
  'comp_CuNO3_2': { id: 'comp_CuNO3_2', type: 'compound', name: '硝酸铜', formula: 'Cu(NO3)2', baseColor: '#3B82F6', unlockLevel: 4, composition: { 'elem_Cu': 1, 'elem_N': 2, 'elem_O': 6 }, assets: { uiIcon: 'UI_Icon_CuNO3_2', model3D: 'SM_CuNO3_2' }, details: { kidFriendly: '蓝色的晶体。', hardcore: '易溶于水，水溶液呈蓝色，受热易分解。' } },
  'comp_MgO': { id: 'comp_MgO', type: 'compound', name: '氧化镁', formula: 'MgO', baseColor: '#F8FAFC', unlockLevel: 3, composition: { 'elem_Mg': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_MgO', model3D: 'SM_MgO' }, details: { kidFriendly: '白色的粉末，镁条燃烧后就会留下我。', hardcore: '碱性氧化物，熔点极高，常作耐火材料。' } },
  'comp_MgOH2': { id: 'comp_MgOH2', type: 'compound', name: '氢氧化镁', formula: 'Mg(OH)2', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_Mg': 1, 'elem_O': 2, 'elem_H': 2 }, assets: { uiIcon: 'UI_Icon_MgOH2', model3D: 'SM_MgOH2' }, details: { kidFriendly: '白色的沉淀，胃药里有我，可以中和胃酸！', hardcore: '中强碱，难溶于水，能溶于铵盐溶液。' } },
  'comp_MgCl2': { id: 'comp_MgCl2', type: 'compound', name: '氯化镁', formula: 'MgCl2', baseColor: '#F1F5F9', unlockLevel: 3, composition: { 'elem_Mg': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_MgCl2', model3D: 'SM_MgCl2' }, details: { kidFriendly: '海水中有很多我，做豆腐的卤水里也有我！', hardcore: '易溶于水，味苦，电解熔融氯化镁可制取金属镁。' } },
  'comp_MgSO4': { id: 'comp_MgSO4', type: 'compound', name: '硫酸镁', formula: 'MgSO4', baseColor: '#F8FAFC', unlockLevel: 3, composition: { 'elem_Mg': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_MgSO4', model3D: 'SM_MgSO4' }, details: { kidFriendly: '白色的晶体，泻药里有我。', hardcore: '易溶于水，其七水合物俗称泻盐。' } },
  'comp_BaO': { id: 'comp_BaO', type: 'compound', name: '氧化钡', formula: 'BaO', baseColor: '#E5E7EB', unlockLevel: 4, composition: { 'elem_Ba': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_BaO', model3D: 'SM_BaO' }, details: { kidFriendly: '白色的粉末，和水反应会变成氢氧化钡。', hardcore: '碱性氧化物，与水反应剧烈生成氢氧化钡。' } },
  'comp_BaOH2': { id: 'comp_BaOH2', type: 'compound', name: '氢氧化钡', formula: 'Ba(OH)2', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Ba': 1, 'elem_O': 2, 'elem_H': 2 }, assets: { uiIcon: 'UI_Icon_BaOH2', model3D: 'SM_BaOH2' }, details: { kidFriendly: '强碱，它的溶液可以用来检验二氧化碳和硫酸根！', hardcore: '强碱，易溶于水，常用于检验硫酸根离子和碳酸根离子。' } },
  'comp_BaCl2': { id: 'comp_BaCl2', type: 'compound', name: '氯化钡', formula: 'BaCl2', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_Ba': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_BaCl2', model3D: 'SM_BaCl2' }, details: { kidFriendly: '白色的晶体，有剧毒！', hardcore: '可溶性钡盐，有剧毒，常用于检验硫酸根离子。' } },
  'comp_BaSO4': { id: 'comp_BaSO4', type: 'compound', name: '硫酸钡', formula: 'BaSO4', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Ba': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_BaSO4', model3D: 'SM_BaSO4' }, details: { kidFriendly: '白色的沉淀，做胃肠透视时喝的“钡餐”就是我，因为我不溶于胃酸，所以没毒！', hardcore: '白色沉淀，不溶于水也不溶于酸，医疗上用作“钡餐”。' } },
  'comp_BaCO3': { id: 'comp_BaCO3', type: 'compound', name: '碳酸钡', formula: 'BaCO3', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_Ba': 1, 'elem_C': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_BaCO3', model3D: 'SM_BaCO3' }, details: { kidFriendly: '白色的沉淀，老鼠药里有我，因为我能溶于胃酸变成有毒的钡离子！', hardcore: '白色沉淀，难溶于水但溶于酸，有毒。' } },
  'comp_KOH': { id: 'comp_KOH', type: 'compound', name: '氢氧化钾', formula: 'KOH', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_K': 1, 'elem_O': 1, 'elem_H': 1 }, assets: { uiIcon: 'UI_Icon_KOH', model3D: 'SM_KOH' }, details: { kidFriendly: '和氢氧化钠很像的强碱，可以用来做肥皂！', hardcore: '强碱，极易溶于水，具有强腐蚀性。' } },
  'comp_K2CO3': { id: 'comp_K2CO3', type: 'compound', name: '碳酸钾', formula: 'K2CO3', baseColor: '#F8FAFC', unlockLevel: 3, composition: { 'elem_K': 2, 'elem_C': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_K2CO3', model3D: 'SM_K2CO3' }, details: { kidFriendly: '草木灰的主要成分，可以做钾肥！', hardcore: '强碱弱酸盐，水溶液呈碱性，俗称草木灰。' } },
  'comp_K2SO4': { id: 'comp_K2SO4', type: 'compound', name: '硫酸钾', formula: 'K2SO4', baseColor: '#F1F5F9', unlockLevel: 3, composition: { 'elem_K': 2, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_K2SO4', model3D: 'SM_K2SO4' }, details: { kidFriendly: '一种很好的钾肥，能让植物长得更壮！', hardcore: '无色结晶，易溶于水，是重要的无氯钾肥。' } },
  'comp_KI': { id: 'comp_KI', type: 'compound', name: '碘化钾', formula: 'KI', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_K': 1, 'elem_I': 1 }, assets: { uiIcon: 'UI_Icon_KI', model3D: 'SM_KI' }, details: { kidFriendly: '加碘盐里以前加的就是我，遇到氯气会变成紫色的碘！', hardcore: '白色立方结晶，具有还原性，遇氧化剂游离出碘。' } },
  'comp_CuOH2': { id: 'comp_CuOH2', type: 'compound', name: '氢氧化铜', formula: 'Cu(OH)2', baseColor: '#60A5FA', unlockLevel: 3, composition: { 'elem_Cu': 1, 'elem_O': 2, 'elem_H': 2 }, assets: { uiIcon: 'UI_Icon_CuOH2', model3D: 'SM_CuOH2' }, details: { kidFriendly: '蓝色的絮状沉淀，加热会变成黑色的氧化铜！', hardcore: '蓝色絮状沉淀，难溶于水，受热分解为氧化铜和水，新制氢氧化铜可检验醛基。' } },
  'comp_Cu2O': { id: 'comp_Cu2O', type: 'compound', name: '氧化亚铜', formula: 'Cu2O', baseColor: '#DC2626', unlockLevel: 4, composition: { 'elem_Cu': 2, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Cu2O', model3D: 'SM_Cu2O' }, details: { kidFriendly: '砖红色的沉淀，检验葡萄糖时就会生成我！', hardcore: '砖红色沉淀，不溶于水，在酸性溶液中歧化为二价铜和铜单质。' } },
  'comp_CuCl2': { id: 'comp_CuCl2', type: 'compound', name: '氯化铜', formula: 'CuCl2', baseColor: '#10B981', unlockLevel: 3, composition: { 'elem_Cu': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_CuCl2', model3D: 'SM_CuCl2' }, details: { kidFriendly: '它的溶液很神奇，浓的时候是绿色，稀的时候是蓝色！', hardcore: '易溶于水，浓溶液呈黄绿色，稀溶液呈蓝色。' } },
  'comp_Ag2O': { id: 'comp_Ag2O', type: 'compound', name: '氧化银', formula: 'Ag2O', baseColor: '#374151', unlockLevel: 4, composition: { 'elem_Ag': 2, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Ag2O', model3D: 'SM_Ag2O' }, details: { kidFriendly: '棕黑色的粉末，纽扣电池里有我！', hardcore: '棕黑色粉末，受热易分解为银和氧气，溶于氨水生成银氨溶液。' } },
  'comp_AgBr': { id: 'comp_AgBr', type: 'compound', name: '溴化银', formula: 'AgBr', baseColor: '#FEF08A', unlockLevel: 4, composition: { 'elem_Ag': 1, 'elem_Br': 1 }, assets: { uiIcon: 'UI_Icon_AgBr', model3D: 'SM_AgBr' }, details: { kidFriendly: '浅黄色的沉淀，以前照相机的胶卷就是用我做的，见光会分解！', hardcore: '浅黄色沉淀，难溶于水和稀硝酸，见光易分解，是感光材料的重要成分。' } },
  'comp_AgI': { id: 'comp_AgI', type: 'compound', name: '碘化银', formula: 'AgI', baseColor: '#FDE047', unlockLevel: 4, composition: { 'elem_Ag': 1, 'elem_I': 1 }, assets: { uiIcon: 'UI_Icon_AgI', model3D: 'SM_AgI' }, details: { kidFriendly: '黄色的沉淀，可以用来人工降雨！', hardcore: '黄色沉淀，难溶于水和稀硝酸，常用于人工降雨。' } },
  'comp_N2': { id: 'comp_N2', type: 'compound', name: '氮气', formula: 'N2', baseColor: '#D1D5DB', unlockLevel: 2, composition: { 'elem_N': 2 }, assets: { uiIcon: 'UI_Icon_N2', model3D: 'SM_N2' }, details: { kidFriendly: '空气里最多的气体就是我，我很懒，不爱和其他物质反应！', hardcore: '无色无味气体，含有氮氮三键，化学性质极不活泼，常用作保护气。' } },
  'comp_N2O': { id: 'comp_N2O', type: 'compound', name: '一氧化二氮', formula: 'N2O', baseColor: '#E5E7EB', unlockLevel: 4, composition: { 'elem_N': 2, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_N2O', model3D: 'SM_N2O' }, details: { kidFriendly: '我叫笑气，吸入我会让人发笑，以前做过麻醉剂！', hardcore: '无色有甜味气体，俗称笑气，在一定条件下能支持燃烧。' } },
  'comp_HNO2': { id: 'comp_HNO2', type: 'compound', name: '亚硝酸', formula: 'HNO2', baseColor: '#DBEAFE', unlockLevel: 4, composition: { 'elem_H': 1, 'elem_N': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_HNO2', model3D: 'SM_HNO2' }, details: { kidFriendly: '一种弱酸，它的盐（亚硝酸盐）有毒，不能多吃！', hardcore: '弱酸，不稳定，仅存在于冷水溶液中，既有氧化性又有还原性。' } },
  'comp_H2S': { id: 'comp_H2S', type: 'compound', name: '硫化氢', formula: 'H2S', baseColor: '#D1D5DB', unlockLevel: 3, composition: { 'elem_H': 2, 'elem_S': 1 }, assets: { uiIcon: 'UI_Icon_H2S', model3D: 'SM_H2S' }, details: { kidFriendly: '臭鸡蛋的气味就是我发出的，我有剧毒！', hardcore: '无色有臭鸡蛋气味的有毒气体，水溶液为氢硫酸，具有强还原性。' } },
  'comp_Na2S': { id: 'comp_Na2S', type: 'compound', name: '硫化钠', formula: 'Na2S', baseColor: '#FEF3C7', unlockLevel: 4, composition: { 'elem_Na': 2, 'elem_S': 1 }, assets: { uiIcon: 'UI_Icon_Na2S', model3D: 'SM_Na2S' }, details: { kidFriendly: '臭海带的味道里有我，工业上叫臭碱！', hardcore: '强碱弱酸盐，水溶液因水解呈强碱性，俗称臭碱，具有强还原性。' } },
  'comp_Na2SO3': { id: 'comp_Na2SO3', type: 'compound', name: '亚硫酸钠', formula: 'Na2SO3', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_Na': 2, 'elem_S': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Na2SO3', model3D: 'SM_Na2SO3' }, details: { kidFriendly: '白色的粉末，可以用来做防腐剂和漂白剂。', hardcore: '含有四价硫，具有较强的还原性，易被空气中的氧气氧化为硫酸钠。' } },
  'comp_Na2SO4': { id: 'comp_Na2SO4', type: 'compound', name: '硫酸钠', formula: 'Na2SO4', baseColor: '#F1F5F9', unlockLevel: 3, composition: { 'elem_Na': 2, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_Na2SO4', model3D: 'SM_Na2SO4' }, details: { kidFriendly: '白色的晶体，它的十水合物叫芒硝，可以入药！', hardcore: '强酸强碱盐，水溶液呈中性，其十水合物俗称芒硝。' } },
  'comp_CO': { id: 'comp_CO', type: 'compound', name: '一氧化碳', formula: 'CO', baseColor: '#D1D5DB', unlockLevel: 2, composition: { 'elem_C': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_CO', model3D: 'SM_CO' }, details: { kidFriendly: '煤气中毒的罪魁祸首就是我，我无色无味，燃烧时发出蓝色火焰！', hardcore: '无色无味有毒气体，极难溶于水，具有可燃性和还原性，常用于冶炼金属。' } },
  'comp_C2H2': { id: 'comp_C2H2', type: 'compound', name: '乙炔', formula: 'C2H2', baseColor: '#E5E7EB', unlockLevel: 4, composition: { 'elem_C': 2, 'elem_H': 2 }, assets: { uiIcon: 'UI_Icon_C2H2', model3D: 'SM_C2H2' }, details: { kidFriendly: '电石气就是我，燃烧时温度极高，可以用来切割金属！', hardcore: '最简单的炔烃，含有碳碳三键，燃烧时放出大量热，氧炔焰温度可达3000度以上。' } },
  'comp_C6H6': { id: 'comp_C6H6', type: 'compound', name: '苯', formula: 'C6H6', baseColor: '#F3F4F6', unlockLevel: 4, composition: { 'elem_C': 6, 'elem_H': 6 }, assets: { uiIcon: 'UI_Icon_C6H6', model3D: 'SM_C6H6' }, details: { kidFriendly: '有特殊气味的液体，是一种重要的溶剂，但有毒！', hardcore: '最简单的芳香烃，具有特殊的环状结构，易取代、难加成。' } },
  'comp_C2H6': { id: 'comp_C2H6', type: 'compound', name: '乙烷', formula: 'C2H6', baseColor: '#D1D5DB', unlockLevel: 3, composition: { 'elem_C': 2, 'elem_H': 6 }, assets: { uiIcon: 'UI_Icon_C2H6', model3D: 'SM_C2H6' }, details: { kidFriendly: '天然气里除了甲烷，还有我！', hardcore: '烷烃的第二名成员，常温下为无色气体，化学性质与甲烷相似。' } },
  'comp_C3H8': { id: 'comp_C3H8', type: 'compound', name: '丙烷', formula: 'C3H8', baseColor: '#D1D5DB', unlockLevel: 3, composition: { 'elem_C': 3, 'elem_H': 8 }, assets: { uiIcon: 'UI_Icon_C3H8', model3D: 'SM_C3H8' }, details: { kidFriendly: '液化石油气的主要成分之一，烧烤用的气罐里装的就是我！', hardcore: '烷烃的第三名成员，常温下为无色气体，易液化，常作燃料。' } },
  'comp_CH3OH': { id: 'comp_CH3OH', type: 'compound', name: '甲醇', formula: 'CH3OH', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_C': 1, 'elem_H': 4, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_CH3OH', model3D: 'SM_CH3OH' }, details: { kidFriendly: '工业酒精里有我，喝了会失明甚至死亡，绝对不能喝！', hardcore: '最简单的醇，有毒，饮用极少量即可导致失明，量大可致死。' } },
  'comp_HCHO': { id: 'comp_HCHO', type: 'compound', name: '甲醛', formula: 'HCHO', baseColor: '#E5E7EB', unlockLevel: 4, composition: { 'elem_C': 1, 'elem_H': 2, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_HCHO', model3D: 'SM_HCHO' }, details: { kidFriendly: '新装修的房子里刺鼻的气味就是我，我有毒！它的水溶液叫福尔马林，可以泡标本。', hardcore: '最简单的醛，无色有刺激性气味的气体，其水溶液（福尔马林）具有防腐作用。' } },
  'comp_HCOOH': { id: 'comp_HCOOH', type: 'compound', name: '甲酸', formula: 'HCOOH', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_C': 1, 'elem_H': 2, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_HCOOH', model3D: 'SM_HCOOH' }, details: { kidFriendly: '蚂蚁咬人很疼，就是因为它分泌了我，所以我也叫蚁酸！', hardcore: '最简单的羧酸，既有羧基又有醛基，既有酸性又有还原性。' } },
  'comp_PH3': { id: 'comp_PH3', type: 'compound', name: '磷化氢', formula: 'PH3', baseColor: '#D1D5DB', unlockLevel: 4, composition: { 'elem_P': 1, 'elem_H': 3 }, assets: { uiIcon: 'UI_Icon_PH3', model3D: 'SM_PH3' }, details: { kidFriendly: '有大蒜气味的有毒气体，坟地里的“鬼火”就是我自燃引起的！', hardcore: '无色有剧毒气体，常温下极易自燃，是“鬼火”现象的成因。' } },
  'comp_H3PO4': { id: 'comp_H3PO4', type: 'compound', name: '磷酸', formula: 'H3PO4', baseColor: '#F8FAFC', unlockLevel: 3, composition: { 'elem_H': 3, 'elem_P': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_H3PO4', model3D: 'SM_H3PO4' }, details: { kidFriendly: '可乐里就有我，我是一种中强酸，能防锈！', hardcore: '三元中强酸，纯净的磷酸是无色晶体，不易挥发，不易分解。' } },
  'comp_Ca3PO4_2': { id: 'comp_Ca3PO4_2', type: 'compound', name: '磷酸钙', formula: 'Ca3(PO4)2', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Ca': 3, 'elem_P': 2, 'elem_O': 8 }, assets: { uiIcon: 'UI_Icon_Ca3PO4_2', model3D: 'SM_Ca3PO4_2' }, details: { kidFriendly: '动物骨骼和牙齿的主要成分就是我！', hardcore: '白色晶体或无定形粉末，难溶于水，是骨骼和牙齿的主要无机成分。' } },
  'comp_SiO2': { id: 'comp_SiO2', type: 'compound', name: '二氧化硅', formula: 'SiO2', baseColor: '#F3F4F6', unlockLevel: 3, composition: { 'elem_Si': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_SiO2', model3D: 'SM_SiO2' }, details: { kidFriendly: '沙子、石英、水晶的主要成分都是我，光导纤维也是用我做的！', hardcore: '酸性氧化物，原子晶体，熔点高硬度大，不溶于水，能与氢氟酸反应。' } },
  'comp_H2SiO3': { id: 'comp_H2SiO3', type: 'compound', name: '硅酸', formula: 'H2SiO3', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_H': 2, 'elem_Si': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_H2SiO3', model3D: 'SM_H2SiO3' }, details: { kidFriendly: '白色的胶状物，干燥后可以做干燥剂（硅胶）！', hardcore: '极弱的酸，难溶于水，其凝胶干燥后得到硅胶，具有强吸水性。' } },
  'comp_Na2SiO3': { id: 'comp_Na2SiO3', type: 'compound', name: '硅酸钠', formula: 'Na2SiO3', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_Na': 2, 'elem_Si': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Na2SiO3', model3D: 'SM_Na2SiO3' }, details: { kidFriendly: '它的水溶液叫水玻璃，可以用来做防火材料和黏合剂！', hardcore: '强碱弱酸盐，其水溶液俗称水玻璃，是制备硅胶和木材防火剂的原料。' } },
  'comp_Cr2O3': { id: 'comp_Cr2O3', type: 'compound', name: '氧化铬', formula: 'Cr2O3', baseColor: '#166534', unlockLevel: 4, composition: { 'elem_Cr': 2, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Cr2O3', model3D: 'SM_Cr2O3' }, details: { kidFriendly: '绿色的粉末，可以用来做颜料，也可以让玻璃变绿！', hardcore: '两性氧化物，硬度大，熔点高，常用于研磨材料和绿色颜料。' } },
  'comp_K2Cr2O7': { id: 'comp_K2Cr2O7', type: 'compound', name: '重铬酸钾', formula: 'K2Cr2O7', baseColor: '#EA580C', unlockLevel: 5, composition: { 'elem_K': 2, 'elem_Cr': 2, 'elem_O': 7 }, assets: { uiIcon: 'UI_Icon_K2Cr2O7', model3D: 'SM_K2Cr2O7' }, details: { kidFriendly: '橙红色的晶体，我有毒，但我是实验室里很重要的试剂！', hardcore: '强氧化剂，橙红色晶体。在酸性条件下具有极强的氧化性。' } },
  'comp_PbO': { id: 'comp_PbO', type: 'compound', name: '氧化铅', formula: 'PbO', baseColor: '#FACC15', unlockLevel: 4, composition: { 'elem_Pb': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_PbO', model3D: 'SM_PbO' }, details: { kidFriendly: '黄色的粉末，也叫密陀僧，可以用来做铅玻璃。', hardcore: '两性氧化物，常温下为黄色固体，易溶于酸和强碱。' } },
  'comp_PbS': { id: 'comp_PbS', type: 'compound', name: '硫化铅', formula: 'PbS', baseColor: '#1F2937', unlockLevel: 4, composition: { 'elem_Pb': 1, 'elem_S': 1 }, assets: { uiIcon: 'UI_Icon_PbS', model3D: 'SM_PbS' }, details: { kidFriendly: '黑色的石头，自然界里的方铅矿就是我！', hardcore: '黑色固体，难溶于水，是自然界中铅的主要矿石形式。' } },
  'comp_HgO': { id: 'comp_HgO', type: 'compound', name: '氧化汞', formula: 'HgO', baseColor: '#EF4444', unlockLevel: 4, composition: { 'elem_Hg': 1, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_HgO', model3D: 'SM_HgO' }, details: { kidFriendly: '红色的粉末，加热我就会变回液体的汞和氧气哦！', hardcore: '红色或黄色粉末，受热易分解为汞和氧气，是历史上发现氧气的重要物质。' } },
  'comp_SnCl2': { id: 'comp_SnCl2', type: 'compound', name: '氯化亚锡', formula: 'SnCl2', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_Sn': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_SnCl2', model3D: 'SM_SnCl2' }, details: { kidFriendly: '白色的晶体，可以用来给金属镀锡。', hardcore: '强还原剂，易溶于水，常用于印染工业和电镀。' } },
  'comp_PtO2': { id: 'comp_PtO2', type: 'compound', name: '二氧化铂', formula: 'PtO2', baseColor: '#111827', unlockLevel: 5, composition: { 'elem_Pt': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_PtO2', model3D: 'SM_PtO2' }, details: { kidFriendly: '黑色的粉末，也叫亚当斯催化剂，非常厉害！', hardcore: '黑色粉末，优良的加氢催化剂，在有机合成中应用广泛。' } },
  'comp_NiSO4': { id: 'comp_NiSO4', type: 'compound', name: '硫酸镍', formula: 'NiSO4', baseColor: '#10B981', unlockLevel: 4, composition: { 'elem_Ni': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_NiSO4', model3D: 'SM_NiSO4' }, details: { kidFriendly: '翠绿色的晶体，非常漂亮，常用于电镀镍。', hardcore: '易溶于水，其六水合物为翠绿色晶体，是电镀镍的主要原料。' } },
  'comp_C3H6': { id: 'comp_C3H6', type: 'compound', name: '丙烯', formula: 'C3H6', baseColor: '#D1D5DB', unlockLevel: 4, composition: { 'elem_C': 3, 'elem_H': 6 }, assets: { uiIcon: 'UI_Icon_Propene', model3D: 'SM_Propene' }, details: { kidFriendly: '无色气体，可以用来做塑料盆、塑料桶（聚丙烯）！', hardcore: '含有碳碳双键的烯烃，是生产聚丙烯、丙酮等的重要化工原料。' } },
  'comp_C3H7OH': { id: 'comp_C3H7OH', type: 'compound', name: '异丙醇', formula: 'C3H7OH', baseColor: '#F3F4F6', unlockLevel: 4, composition: { 'elem_C': 3, 'elem_H': 8, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Isopropanol', model3D: 'SM_Isopropanol' }, details: { kidFriendly: '有特殊气味的液体，常用于清洁电子产品和消毒。', hardcore: '仲醇，具有典型的醇类性质，是重要的溶剂和化工中间体。' } },
  'comp_CH3COCH3': { id: 'comp_CH3COCH3', type: 'compound', name: '丙酮', formula: 'CH3COCH3', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_C': 3, 'elem_H': 6, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Acetone', model3D: 'SM_Acetone' }, details: { kidFriendly: '洗甲水的主要成分就是我，能溶解很多东西！', hardcore: '最简单的酮，具有极强的溶解能力，是实验室常用的有机溶剂。' } },
  'comp_CCl4': { id: 'comp_CCl4', type: 'compound', name: '四氯化碳', formula: 'CCl4', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_C': 1, 'elem_Cl': 4 }, assets: { uiIcon: 'UI_Icon_CCl4', model3D: 'SM_CCl4' }, details: { kidFriendly: '无色液体，以前用来灭火，但它对大气层有害。', hardcore: '非极性溶剂，曾广泛用于干洗和灭火，因破坏臭氧层已被限制使用。' } },
  'comp_CHCl3': { id: 'comp_CHCl3', type: 'compound', name: '氯仿 (三氯甲烷)', formula: 'CHCl3', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_C': 1, 'elem_H': 1, 'elem_Cl': 3 }, assets: { uiIcon: 'UI_Icon_Chloroform', model3D: 'SM_Chloroform' }, details: { kidFriendly: '有甜味的液体，以前做过麻醉剂，但它有毒！', hardcore: '无色易挥发液体，具有麻醉作用，是重要的有机合成原料。' } },
  'comp_NH4Cl': { id: 'comp_NH4Cl', type: 'compound', name: '氯化铵', formula: 'NH4Cl', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_N': 1, 'elem_H': 4, 'elem_Cl': 1 }, assets: { uiIcon: 'UI_Icon_NH4Cl', model3D: 'SM_NH4Cl' }, details: { kidFriendly: '白色的晶体，干电池里有我，也可以做氮肥！', hardcore: '强电解质，易溶于水，受热易分解为氨气和氯化氢。' } },
  'comp_NH4NO3': { id: 'comp_NH4NO3', type: 'compound', name: '硝酸铵', formula: 'NH4NO3', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_N': 2, 'elem_H': 4, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_NH4NO3', model3D: 'SM_NH4NO3' }, details: { kidFriendly: '白色的晶体，是很重要的氮肥，但它受热容易爆炸！', hardcore: '极易溶于水，具有强氧化性，高温或受撞击时易发生爆炸。' } },
  'comp_KNO3': { id: 'comp_KNO3', type: 'compound', name: '硝酸钾', formula: 'KNO3', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_K': 1, 'elem_N': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_KNO3', model3D: 'SM_KNO3' }, details: { kidFriendly: '黑火药的主要成分之一，也是一种全效肥料！', hardcore: '强氧化剂，易溶于水，常用于制造火药、烟火和复合肥料。' } },
  'comp_CaSO4': { id: 'comp_CaSO4', type: 'compound', name: '硫酸钙 (石膏)', formula: 'CaSO4', baseColor: '#F1F5F9', unlockLevel: 3, composition: { 'elem_Ca': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_CaSO4', model3D: 'SM_CaSO4' }, details: { kidFriendly: '石膏像、粉笔里都有我，骨折时打的石膏也是我！', hardcore: '微溶于水，其二水合物俗称石膏，加热脱水可得熟石膏。' } },
  'comp_C12H22O11': { id: 'comp_C12H22O11', type: 'compound', name: '蔗糖', formula: 'C12H22O11', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_C': 12, 'elem_H': 22, 'elem_O': 11 }, assets: { uiIcon: 'UI_Icon_Sugar', model3D: 'SM_Sugar' }, details: { kidFriendly: '我就是白砂糖！甜甜的，能给你提供能量。', hardcore: '双糖，由一分子葡萄糖和一分子果糖缩合而成，是非还原糖。' } },
  'comp_C6H5OH': { id: 'comp_C6H5OH', type: 'compound', name: '苯酚', formula: 'C6H5OH', baseColor: '#FEE2E2', unlockLevel: 5, composition: { 'elem_C': 6, 'elem_H': 6, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Phenol', model3D: 'SM_Phenol' }, details: { kidFriendly: '有特殊气味的晶体，可以用来做消毒剂和塑料。', hardcore: '具有弱酸性，俗称石炭酸。能发生取代反应、显色反应等。' } },
  'comp_C6H5NH2': { id: 'comp_C6H5NH2', type: 'compound', name: '苯胺', formula: 'C6H5NH2', baseColor: '#FEF3C7', unlockLevel: 5, composition: { 'elem_C': 6, 'elem_H': 7, 'elem_N': 1 }, assets: { uiIcon: 'UI_Icon_Aniline', model3D: 'SM_Aniline' }, details: { kidFriendly: '油状液体，是制造染料的重要原料。', hardcore: '最简单的芳香胺，具有弱碱性，易被氧化，是重要的化工原料。' } },
  'comp_C2H6O2': { id: 'comp_C2H6O2', type: 'compound', name: '乙二醇', formula: 'C2H6O2', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_C': 2, 'elem_H': 6, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_EthyleneGlycol', model3D: 'SM_EthyleneGlycol' }, details: { kidFriendly: '甜味的液体，常用于汽车防冻液。', hardcore: '最简单的二元醇，具有典型的醇类性质，可用于生产聚酯纤维。' } },
  'comp_C3H8O3': { id: 'comp_C3H8O3', type: 'compound', name: '甘油 (丙三醇)', formula: 'C3H8O3', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_C': 3, 'elem_H': 8, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Glycerol', model3D: 'SM_Glycerol' }, details: { kidFriendly: '甜甜的、粘稠的液体，护肤品里经常有我，能保湿！', hardcore: '三元醇，具有极强的吸湿性，是制造硝化甘油和化妆品的重要原料。' } },
  'comp_C6H5CH3': { id: 'comp_C6H5CH3', type: 'compound', name: '甲苯', formula: 'C6H5CH3', baseColor: '#F3F4F6', unlockLevel: 4, composition: { 'elem_C': 7, 'elem_H': 8 }, assets: { uiIcon: 'UI_Icon_Toluene', model3D: 'SM_Toluene' }, details: { kidFriendly: '有特殊气味的液体，可以用来做油漆溶剂，也可以做炸药（TNT）！', hardcore: '芳香烃，具有典型的苯环性质，侧链甲基易被氧化。' } },
  'comp_C6H5NO2': { id: 'comp_C6H5NO2', type: 'compound', name: '硝基苯', formula: 'C6H5NO2', baseColor: '#FEF3C7', unlockLevel: 5, composition: { 'elem_C': 6, 'elem_H': 5, 'elem_N': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_Nitrobenzene', model3D: 'SM_Nitrobenzene' }, details: { kidFriendly: '苦杏仁气味的油状液体，我有毒，是制造染料的重要原料。', hardcore: '无色或微黄色油状液体，具有苦杏仁气味，是重要的有机合成中间体。' } },
  'comp_C2H5OC2H5': { id: 'comp_C2H5OC2H5', type: 'compound', name: '乙醚', formula: 'C2H5OC2H5', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_C': 4, 'elem_H': 10, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_Ether', model3D: 'SM_Ether' }, details: { kidFriendly: '极易挥发的液体，以前做过麻醉剂，非常容易着火！', hardcore: '典型的醚类化合物，极易燃，具有麻醉作用，是常用的有机溶剂。' } },
  'comp_CH3COOCH3': { id: 'comp_CH3COOCH3', type: 'compound', name: '乙酸甲酯', formula: 'CH3COOCH3', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_C': 3, 'elem_H': 6, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_MethylAcetate', model3D: 'SM_MethylAcetate' }, details: { kidFriendly: '有香味的液体，常用于快干油漆和人造革。', hardcore: '具有果香味的无色液体，易溶于有机溶剂，是重要的工业溶剂。' } },
  'comp_H2C2O4': { id: 'comp_H2C2O4', type: 'compound', name: '草酸', formula: 'H2C2O4', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_H': 2, 'elem_C': 2, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_OxalicAcid', model3D: 'SM_OxalicAcid' }, details: { kidFriendly: '菠菜里就有我，我能除掉衣服上的铁锈渍！', hardcore: '二元弱酸，具有还原性，能与高锰酸钾反应，常用于除锈和漂白。' } },
  'comp_Na2S2O3': { id: 'comp_Na2S2O3', type: 'compound', name: '硫代硫酸钠', formula: 'Na2S2O3', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_Na': 2, 'elem_S': 2, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Na2S2O3', model3D: 'SM_Na2S2O3' }, details: { kidFriendly: '无色透明的晶体，也叫海波，以前洗照片时用来定影。', hardcore: '具有还原性，能与碘反应，在分析化学中应用广泛。' } },
  'comp_K2MnO4': { id: 'comp_K2MnO4', type: 'compound', name: '锰酸钾', formula: 'K2MnO4', baseColor: '#065F46', unlockLevel: 5, composition: { 'elem_K': 2, 'elem_Mn': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_K2MnO4', model3D: 'SM_K2MnO4' }, details: { kidFriendly: '墨绿色的晶体，高锰酸钾分解后就会生成我。', hardcore: '墨绿色晶体，仅在强碱性溶液中稳定，在酸性或中性溶液中易歧化。' } },
  'comp_MnSO4': { id: 'comp_MnSO4', type: 'compound', name: '硫酸锰', formula: 'MnSO4', baseColor: '#FBCFE8', unlockLevel: 4, composition: { 'elem_Mn': 1, 'elem_S': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_MnSO4', model3D: 'SM_MnSO4' }, details: { kidFriendly: '粉红色的晶体，常用于饲料添加剂。', hardcore: '易溶于水，其水合物为粉红色晶体，是重要的锰盐。' } },
  'comp_HI': { id: 'comp_HI', type: 'compound', name: '碘化氢', formula: 'HI', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_H': 1, 'elem_I': 1 }, assets: { uiIcon: 'UI_Icon_HI', model3D: 'SM_HI' }, details: { kidFriendly: '无色气体，在空气中会形成酸雾，我有很强的还原性！', hardcore: '强酸，具有强还原性，易被氧化析出碘。' } },
  'comp_HF': { id: 'comp_HF', type: 'compound', name: '氢氟酸', formula: 'HF', baseColor: '#F8FAFC', unlockLevel: 4, composition: { 'elem_H': 1, 'elem_F': 1 }, assets: { uiIcon: 'UI_Icon_HF', model3D: 'SM_HF' }, details: { kidFriendly: '虽然我是弱酸，但我能腐蚀玻璃，所以必须用塑料瓶装我！', hardcore: '氟化氢的水溶液，具有极强的腐蚀性，能与二氧化硅反应，常用于刻蚀玻璃。' } },
  'comp_CaC2': { id: 'comp_CaC2', type: 'compound', name: '碳化钙 (电石)', formula: 'CaC2', baseColor: '#4B5563', unlockLevel: 4, composition: { 'elem_Ca': 1, 'elem_C': 2 }, assets: { uiIcon: 'UI_Icon_CaC2', model3D: 'SM_CaC2' }, details: { kidFriendly: '灰黑色的块状物，碰到水就会产生能燃烧的乙炔气体！', hardcore: '工业上制取乙炔的重要原料，与水反应剧烈，生成乙炔和氢氧化钙。' } },
  'comp_C2H4O': { id: 'comp_C2H4O', type: 'compound', name: '环氧乙烷', formula: 'C2H4O', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_C': 2, 'elem_H': 4, 'elem_O': 1 }, assets: { uiIcon: 'UI_Icon_EthyleneOxide', model3D: 'SM_EthyleneOxide' }, details: { kidFriendly: '一种非常有用的气体，可以用来给医疗器械消毒。', hardcore: '最简单的环醚，具有极高的化学活性，是重要的有机合成原料和广谱杀菌剂。' } },
  'comp_C3H5N3O9': { id: 'comp_C3H5N3O9', type: 'compound', name: '硝化甘油', formula: 'C3H5(NO3)3', baseColor: '#FEF3C7', unlockLevel: 5, composition: { 'elem_C': 3, 'elem_H': 5, 'elem_N': 3, 'elem_O': 9 }, assets: { uiIcon: 'UI_Icon_Nitroglycerin', model3D: 'SM_Nitroglycerin' }, details: { kidFriendly: '我是非常危险的炸药，稍微震动一下就会爆炸！但我也可以救命（治心脏病）。', hardcore: '淡黄色油状液体，极不稳定，受热或受撞击即发生剧烈爆炸。医药上用作血管扩张剂。' } },
  'comp_CuSO4_5H2O': { id: 'comp_CuSO4_5H2O', type: 'compound', name: '五水硫酸铜 (胆矾)', formula: 'CuSO4·5H2O', baseColor: '#3B82F6', unlockLevel: 3, composition: { 'elem_Cu': 1, 'elem_S': 1, 'elem_O': 9, 'elem_H': 10 }, assets: { uiIcon: 'UI_Icon_BlueVitriol', model3D: 'SM_BlueVitriol' }, details: { kidFriendly: '漂亮的蓝色晶体，像蓝宝石一样！加热我就会变成白色的粉末。', hardcore: '蓝色三斜晶系晶体，受热易失去结晶水。常用于制取其他铜盐和农药波尔多液。' } },
  'comp_O3': { id: 'comp_O3', type: 'compound', name: '臭氧', formula: 'O3', baseColor: '#60A5FA', unlockLevel: 4, composition: { 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Ozone', model3D: 'SM_Ozone' }, details: { kidFriendly: '我是臭氧，在大气层高处保护地球免受紫外线伤害，但在地面我可是污染物哦！', hardcore: '氧气的同素异形体，具有极强的氧化性，常用于消毒和漂白。' } },
  'comp_SiH4': { id: 'comp_SiH4', type: 'compound', name: '甲硅烷', formula: 'SiH4', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_Si': 1, 'elem_H': 4 }, assets: { uiIcon: 'UI_Icon_Silane', model3D: 'SM_Silane' }, details: { kidFriendly: '我是硅的“氢化物”，在空气中会自燃，是制造电脑芯片的重要原料。', hardcore: '无色、易燃、有毒气体。在半导体工业中用于化学气相沉积。' } },
  'comp_N2H4': { id: 'comp_N2H4', type: 'compound', name: '联氨 (肼)', formula: 'N2H4', baseColor: '#F8FAFC', unlockLevel: 5, composition: { 'elem_N': 2, 'elem_H': 4 }, assets: { uiIcon: 'UI_Icon_Hydrazine', model3D: 'SM_Hydrazine' }, details: { kidFriendly: '我是强力火箭燃料，虽然我有毒，但我能送卫星上天！', hardcore: '强还原剂，具有高度腐蚀性和毒性。常用于火箭推进剂和锅炉水处理。' } },
  'comp_COCl2': { id: 'comp_COCl2', type: 'compound', name: '光气', formula: 'COCl2', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_C': 1, 'elem_O': 1, 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_Phosgene', model3D: 'SM_Phosgene' }, details: { kidFriendly: '我有烂干草的味道，但我非常危险，曾被用作化学武器。', hardcore: '剧毒气体，重要的有机合成中间体，广泛用于聚氨酯塑料的生产。' } },
  'comp_HCN': { id: 'comp_HCN', type: 'compound', name: '氢氰酸', formula: 'HCN', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_H': 1, 'elem_C': 1, 'elem_N': 1 }, assets: { uiIcon: 'UI_Icon_HCN', model3D: 'SM_HCN' }, details: { kidFriendly: '我有苦杏仁味，但我是剧毒的！千万不要靠近我。', hardcore: '极弱的酸，剧毒。在工业上用于生产有机玻璃、农药等。' } },
  'comp_NH2CONH2': { id: 'comp_NH2CONH2', type: 'compound', name: '尿素', formula: 'CO(NH2)2', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_C': 1, 'elem_O': 1, 'elem_N': 2, 'elem_H': 4 }, assets: { uiIcon: 'UI_Icon_Urea', model3D: 'SM_Urea' }, details: { kidFriendly: '我是第一种人工合成的有机物，是庄稼最喜欢的氮肥！', hardcore: '简单的有机化合物，由碳、氮、氧、氢组成。是哺乳动物蛋白质代谢的主要产物。' } },
  'comp_C2H3Cl': { id: 'comp_C2H3Cl', type: 'compound', name: '氯乙烯', formula: 'C2H3Cl', baseColor: '#F1F5F9', unlockLevel: 4, composition: { 'elem_C': 2, 'elem_H': 3, 'elem_Cl': 1 }, assets: { uiIcon: 'UI_Icon_VinylChloride', model3D: 'SM_VinylChloride' }, details: { kidFriendly: '我是塑料PVC的原料，水管和电线皮里都有我的功劳。', hardcore: '重要的石油化工原料，主要用于生产聚氯乙烯（PVC）树脂。' } },
  'comp_C6H5Cl': { id: 'comp_C6H5Cl', type: 'compound', name: '氯苯', formula: 'C6H5Cl', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_C': 6, 'elem_H': 5, 'elem_Cl': 1 }, assets: { uiIcon: 'UI_Icon_Chlorobenzene', model3D: 'SM_Chlorobenzene' }, details: { kidFriendly: '有特殊气味的液体，是制造农药和染料的中间人。', hardcore: '无色易燃液体，具有杏仁味。是重要的有机溶剂和合成中间体。' } },
  'comp_C10H8': { id: 'comp_C10H8', type: 'compound', name: '萘', formula: 'C10H8', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_C': 10, 'elem_H': 8 }, assets: { uiIcon: 'UI_Icon_Naphthalene', model3D: 'SM_Naphthalene' }, details: { kidFriendly: '我就是卫生球（樟脑丸）的主要成分，虫子最怕我的味道了！', hardcore: '最简单的稠环芳烃，具有易升华的特性。主要用于生产邻苯二甲酸酐。' } },
  'comp_Al2S3': { id: 'comp_Al2S3', type: 'compound', name: '硫化铝', formula: 'Al2S3', baseColor: '#FDE68A', unlockLevel: 4, composition: { 'elem_Al': 2, 'elem_S': 3 }, assets: { uiIcon: 'UI_Icon_Al2S3', model3D: 'SM_Al2S3' }, details: { kidFriendly: '黄色的固体，遇到水会产生臭鸡蛋味的硫化氢气体！', hardcore: '在潮湿空气中极易水解。常用于制取硫化氢。' } },
  'comp_SiC': { id: 'comp_SiC', type: 'compound', name: '碳化硅', formula: 'SiC', baseColor: '#1F2937', unlockLevel: 5, composition: { 'elem_Si': 1, 'elem_C': 1 }, assets: { uiIcon: 'UI_Icon_SiC', model3D: 'SM_SiC' }, details: { kidFriendly: '我也叫金刚砂，硬度仅次于金刚石，常用来做磨刀石。', hardcore: '宽禁带半导体材料，具有高硬度、高导热性和优良的耐腐蚀性。' } },
  'comp_BN': { id: 'comp_BN', type: 'compound', name: '氮化硼', formula: 'BN', baseColor: '#FFFFFF', unlockLevel: 5, composition: { 'elem_B': 1, 'elem_N': 1 }, assets: { uiIcon: 'UI_Icon_BN', model3D: 'SM_BN' }, details: { kidFriendly: '我也叫“白色石墨”，非常耐高温，还能做化妆品呢！', hardcore: '具有多种晶型，立方氮化硼硬度极高，六方氮化硼具有良好的润滑性和导热性。' } },
  'comp_WC': { id: 'comp_WC', type: 'compound', name: '碳化钨', formula: 'WC', baseColor: '#374151', unlockLevel: 5, composition: { 'elem_W': 1, 'elem_C': 1 }, assets: { uiIcon: 'UI_Icon_WC', model3D: 'SM_WC' }, details: { kidFriendly: '我非常硬，切金属的刀头就是用我做的！', hardcore: '黑色六方晶体，具有金属光泽，硬度与金刚石相近，是良好的电、热导体。' } },
  'comp_K2SO3': { id: 'comp_K2SO3', type: 'compound', name: '亚硫酸钾', formula: 'K2SO3', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_K': 2, 'elem_S': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_K2SO3', model3D: 'SM_K2SO3' }, details: { kidFriendly: '白色的粉末，常用于食品防腐和照片显影。', hardcore: '具有还原性，在空气中易被氧化为硫酸钾。' } },
  'comp_Na3PO4': { id: 'comp_Na3PO4', type: 'compound', name: '磷酸钠', formula: 'Na3PO4', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Na': 3, 'elem_P': 1, 'elem_O': 4 }, assets: { uiIcon: 'UI_Icon_Na3PO4', model3D: 'SM_Na3PO4' }, details: { kidFriendly: '白色的晶体，能除掉锅炉里的水垢，也是清洁剂的成分。', hardcore: '强碱弱酸盐，水溶液呈强碱性。常用于软水剂和洗涤剂。' } },
  'comp_H2S2O7': { id: 'comp_H2S2O7', type: 'compound', name: '焦硫酸 (发烟硫酸)', formula: 'H2S2O7', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_H': 2, 'elem_S': 2, 'elem_O': 7 }, assets: { uiIcon: 'UI_Icon_Oleum', model3D: 'SM_Oleum' }, details: { kidFriendly: '我是浓硫酸吸收了三氧化硫后的样子，会冒烟，非常危险！', hardcore: '具有极强的脱水性和氧化性，是重要的磺化剂。' } },
  'comp_GaAs': { id: 'comp_GaAs', type: 'compound', name: '砷化镓', formula: 'GaAs', baseColor: '#4B5563', unlockLevel: 5, composition: { 'elem_Ga': 1, 'elem_As': 1 }, assets: { uiIcon: 'UI_Icon_GaAs', model3D: 'SM_GaAs' }, details: { kidFriendly: '我是第二代半导体材料，运行速度比硅还要快！', hardcore: '重要的化合物半导体材料，具有高电子迁移率和直接带隙。' } },
  'comp_GeO2': { id: 'comp_GeO2', type: 'compound', name: '二氧化锗', formula: 'GeO2', baseColor: '#FFFFFF', unlockLevel: 5, composition: { 'elem_Ge': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_GeO2', model3D: 'SM_GeO2' }, details: { kidFriendly: '白色的粉末，是制造光导纤维的重要材料。', hardcore: '具有高折射率和低色散性能，广泛用于广角镜和光纤。' } },
  'comp_SeO2': { id: 'comp_SeO2', type: 'compound', name: '二氧化硒', formula: 'SeO2', baseColor: '#FFFFFF', unlockLevel: 5, composition: { 'elem_Se': 1, 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_SeO2', model3D: 'SM_SeO2' }, details: { kidFriendly: '白色的晶体，有烂萝卜味，在有机合成中很有用。', hardcore: '酸性氧化物，具有氧化性。常用于有机化学中的氧化反应。' } },
  'comp_CdS': { id: 'comp_CdS', type: 'compound', name: '硫化镉 (镉黄)', formula: 'CdS', baseColor: '#FDE047', unlockLevel: 4, composition: { 'elem_Cd': 1, 'elem_S': 1 }, assets: { uiIcon: 'UI_Icon_CdS', model3D: 'SM_CdS' }, details: { kidFriendly: '鲜艳的黄色粉末，是画家们非常喜欢的颜料。', hardcore: '典型的II-VI族半导体，具有显著的光电效应。' } },
  'comp_Sb2O3': { id: 'comp_Sb2O3', type: 'compound', name: '三氧化二锑', formula: 'Sb2O3', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Sb': 2, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_Sb2O3', model3D: 'SM_Sb2O3' }, details: { kidFriendly: '白色的粉末，能让塑料 and 织物变得不容易着火。', hardcore: '重要的阻燃增效剂，常与卤系阻燃剂配合使用。' } },
  'comp_WO3': { id: 'comp_WO3', type: 'compound', name: '三氧化钨', formula: 'WO3', baseColor: '#FACC15', unlockLevel: 5, composition: { 'elem_W': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_WO3', model3D: 'SM_WO3' }, details: { kidFriendly: '黄色的粉末，可以用来制造智能窗户，改变颜色！', hardcore: '具有电致变色、光致变色和气致变色性能。' } },
  'comp_CsCl': { id: 'comp_CsCl', type: 'compound', name: '氯化铯', formula: 'CsCl', baseColor: '#FFFFFF', unlockLevel: 5, composition: { 'elem_Cs': 1, 'elem_Cl': 1 }, assets: { uiIcon: 'UI_Icon_CsCl', model3D: 'SM_CsCl' }, details: { kidFriendly: '无色晶体，在科学实验中常用来分离DNA。', hardcore: '典型的离子晶体结构（简单立方），常用于密度梯度离心。' } },
  'comp_RbCl': { id: 'comp_RbCl', type: 'compound', name: '氯化铷', formula: 'RbCl', baseColor: '#FFFFFF', unlockLevel: 5, composition: { 'elem_Rb': 1, 'elem_Cl': 1 }, assets: { uiIcon: 'UI_Icon_RbCl', model3D: 'SM_RbCl' }, details: { kidFriendly: '白色的晶体，在生物实验中可以用来诱导细胞吸收DNA。', hardcore: '碱金属卤化物，常用于生物化学和分子生物学研究。' } },
  'comp_SrCO3': { id: 'comp_SrCO3', type: 'compound', name: '碳酸锶', formula: 'SrCO3', baseColor: '#FFFFFF', unlockLevel: 4, composition: { 'elem_Sr': 1, 'elem_C': 1, 'elem_O': 3 }, assets: { uiIcon: 'UI_Icon_SrCO3', model3D: 'SM_SrCO3' }, details: { kidFriendly: '白色的粉末，可以让烟花变成漂亮的红色！', hardcore: '难溶于水的白色固体，常用于制造彩电荧光屏和红色烟火。' } },
  'comp_H2': { id: 'comp_H2', type: 'compound', name: '氢气', formula: 'H2', baseColor: '#FFFFFF', unlockLevel: 1, composition: { 'elem_H': 2 }, assets: { uiIcon: 'UI_Icon_H2', model3D: 'SM_H2' }, details: { kidFriendly: '我是氢气，最轻的气体，可以飞上天哦！', hardcore: '双原子分子，无色无味，极易燃烧，是理想的清洁能源。' } },
  'comp_O2': { id: 'comp_O2', type: 'compound', name: '氧气', formula: 'O2', baseColor: '#3B82F6', unlockLevel: 1, composition: { 'elem_O': 2 }, assets: { uiIcon: 'UI_Icon_O2', model3D: 'SM_O2' }, details: { kidFriendly: '我是氧气，没有我你就没法呼吸啦！', hardcore: '双原子分子，具有助燃性，是生物呼吸和物质燃烧的必需品。' } },
  'comp_Cl2': { id: 'comp_Cl2', type: 'compound', name: '氯气', formula: 'Cl2', baseColor: '#84CC16', unlockLevel: 2, composition: { 'elem_Cl': 2 }, assets: { uiIcon: 'UI_Icon_Cl2', model3D: 'SM_Cl2' }, details: { kidFriendly: '黄绿色的气体，味道很冲，可以用来消毒！', hardcore: '黄绿色有毒气体，具有强氧化性，易液化。' } },
  'comp_F2': { id: 'comp_F2', type: 'compound', name: '氟气', formula: 'F2', baseColor: '#FEF08A', unlockLevel: 3, composition: { 'elem_F': 2 }, assets: { uiIcon: 'UI_Icon_F2', model3D: 'SM_F2' }, details: { kidFriendly: '浅黄色的气体，我是最活泼的非金属，几乎能和所有东西反应！', hardcore: '浅黄色剧毒气体，氧化性极强，能与几乎所有物质发生反应。' } },
  'comp_I2': { id: 'comp_I2', type: 'compound', name: '碘单质', formula: 'I2', baseColor: '#4C1D95', unlockLevel: 4, composition: { 'elem_I': 2 }, assets: { uiIcon: 'UI_Icon_I2', model3D: 'SM_I2' }, details: { kidFriendly: '紫黑色的固体，加热会变成紫色的烟！', hardcore: '紫黑色固体，易升华，遇淀粉变蓝色。' } },
  'comp_P4': { id: 'comp_P4', type: 'compound', name: '白磷', formula: 'P4', baseColor: '#FEF9C3', unlockLevel: 4, composition: { 'elem_P': 4 }, assets: { uiIcon: 'UI_Icon_P4', model3D: 'SM_P4' }, details: { kidFriendly: '白色的蜡状固体，在空气中会自燃，非常危险！', hardcore: '磷的一种同素异形体，剧毒，着火点低（约40℃），需保存在水中。' } },
  'comp_C2H2Cl4': { id: 'comp_C2H2Cl4', type: 'compound', name: '1,1,2,2-四氯乙烷', formula: 'C2H2Cl4', baseColor: '#F1F5F9', unlockLevel: 5, composition: { 'elem_C': 2, 'elem_H': 2, 'elem_Cl': 4 }, assets: { uiIcon: 'UI_Icon_C2H2Cl4', model3D: 'SM_C2H2Cl4' }, details: { kidFriendly: '无色液体，有类似氯仿的味道，是一种强力溶剂。', hardcore: '不燃性液体，具有毒性，曾用作溶剂和杀虫剂。' } },
  'comp_AuCl3': { id: 'comp_AuCl3', type: 'compound', name: '氯化金', formula: 'AuCl3', baseColor: '#FBBF24', unlockLevel: 5, composition: { 'elem_Au': 1, 'elem_Cl': 3 }, assets: { uiIcon: 'UI_Icon_AuCl3', model3D: 'SM_AuCl3' }, details: { kidFriendly: '金子溶在王水里就会变成我，我是红色的晶体哦！', hardcore: '易潮解，易溶于水。在有机合成中常用作催化剂。' } },
  'comp_Ag2S': { id: 'comp_Ag2S', type: 'compound', name: '硫化银', formula: 'Ag2S', baseColor: '#1F2937', unlockLevel: 4, composition: { 'elem_Ag': 2, 'elem_S': 1 }, assets: { uiIcon: 'UI_Icon_Ag2S', model3D: 'SM_Ag2S' }, details: { kidFriendly: '银首饰变黑了就是因为表面生成了我！', hardcore: '黑色固体，难溶于水，是银在含硫环境中变黑的主要原因。' } },
  'comp_Cu2S': { id: 'comp_Cu2S', type: 'compound', name: '硫化亚铜', formula: 'Cu2S', baseColor: '#111827', unlockLevel: 4, composition: { 'elem_Cu': 2, 'elem_S': 1 }, assets: { uiIcon: 'UI_Icon_Cu2S', model3D: 'SM_Cu2S' }, details: { kidFriendly: '黑色的矿石，自然界里的辉铜矿就是我。', hardcore: '黑色固体，具有半导体性质，常用于太阳能电池研究。' } },
  'comp_Al2_SO4_3': { id: 'comp_Al2_SO4_3', type: 'compound', name: '硫酸铝', formula: 'Al2(SO4)3', baseColor: '#FFFFFF', unlockLevel: 3, composition: { 'elem_Al': 2, 'elem_S': 3, 'elem_O': 12 }, assets: { uiIcon: 'UI_Icon_Al2SO43', model3D: 'SM_Al2SO43' }, details: { kidFriendly: '白色的晶体，可以用来净水，让浑浊的水变清！', hardcore: '易溶于水，水溶液呈酸性，广泛用于造纸和净水工业。' } },
};

export const REACTIONS: Reaction[] = [
  {
    id: 'rxn_h_to_h2',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_H', count: 2 } ],
    outputs: [ { itemId: 'comp_H2', count: 1 } ],
    uiDisplay: { equation: '2H -> H2', conditions: '常温', principle: '两个氢原子结合形成稳定的氢气分子。' }
  },
  {
    id: 'rxn_o_to_o2',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_O', count: 2 } ],
    outputs: [ { itemId: 'comp_O2', count: 1 } ],
    uiDisplay: { equation: '2O -> O2', conditions: '常温', principle: '两个氧原子结合形成稳定的氧气分子。' }
  },
  {
    id: 'rxn_cl_to_cl2',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Cl', count: 2 } ],
    outputs: [ { itemId: 'comp_Cl2', count: 1 } ],
    uiDisplay: { equation: '2Cl -> Cl2', conditions: '常温', principle: '两个氯原子结合形成稳定的氯气分子。' }
  },
  {
    id: 'rxn_f_to_f2',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_F', count: 2 } ],
    outputs: [ { itemId: 'comp_F2', count: 1 } ],
    uiDisplay: { equation: '2F -> F2', conditions: '常温', principle: '两个氟原子结合形成稳定的氟气分子。' }
  },
  {
    id: 'rxn_i_to_i2',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_I', count: 2 } ],
    outputs: [ { itemId: 'comp_I2', count: 1 } ],
    uiDisplay: { equation: '2I -> I2', conditions: '常温', principle: '两个碘原子结合形成稳定的碘分子。' }
  },
  {
    id: 'rxn_p_to_p4',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_P', count: 4 } ],
    outputs: [ { itemId: 'comp_P4', count: 1 } ],
    uiDisplay: { equation: '4P -> P4', conditions: '常温', principle: '四个磷原子结合形成白磷分子。' }
  },
  {
    id: 'rxn_au_aqua_regia',
    reactionType: '氧化还原反应',
    inputs: [ { itemId: 'elem_Au', count: 1 }, { itemId: 'comp_HNO3', count: 1 }, { itemId: 'comp_HCl', count: 4 } ],
    outputs: [ { itemId: 'comp_AuCl3', count: 1 }, { itemId: 'comp_NO', count: 1 }, { itemId: 'comp_H2O', count: 2 } ],
    uiDisplay: { equation: 'Au + HNO3 + 4HCl -> HAuCl4 + NO↑ + 2H2O (简化为生成AuCl3)', conditions: '常温', principle: '王水（浓硝酸与浓盐酸体积比1:3混合）能溶解金。' }
  },
  {
    id: 'rxn_ag_h2s',
    reactionType: '氧化还原反应',
    inputs: [ { itemId: 'elem_Ag', count: 4 }, { itemId: 'comp_H2S', count: 2 }, { itemId: 'comp_O2', count: 1 } ],
    outputs: [ { itemId: 'comp_Ag2S', count: 2 }, { itemId: 'comp_H2O', count: 2 } ],
    uiDisplay: { equation: '4Ag + 2H2S + O2 -> 2Ag2S + 2H2O', conditions: '常温', principle: '银在空气中与硫化氢反应生成黑色的硫化银。' }
  },
  {
    id: 'rxn_mg_o2_burn',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Mg', count: 2 }, { itemId: 'comp_O2', count: 1 } ],
    outputs: [ { itemId: 'comp_MgO', count: 2 } ],
    uiDisplay: { equation: '2Mg + O2 -> 2MgO', conditions: '点燃', principle: '镁在氧气中剧烈燃烧，发出耀眼的白光，生成白色固体。' }
  },
  {
    id: 'rxn_fe_o2_rust',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Fe', count: 4 }, { itemId: 'comp_O2', count: 3 } ],
    outputs: [ { itemId: 'comp_Fe2O3', count: 2 } ],
    uiDisplay: { equation: '4Fe + 3O2 -> 2Fe2O3', conditions: '潮湿空气', principle: '铁在潮湿空气中发生电化学腐蚀，最终生成红褐色的铁锈。' }
  },
  {
    id: 'rxn_al_h2so4',
    reactionType: '置换反应',
    inputs: [ { itemId: 'elem_Al', count: 2 }, { itemId: 'comp_H2SO4', count: 3 } ],
    outputs: [ { itemId: 'comp_Al2_SO4_3', count: 1 }, { itemId: 'comp_H2', count: 3 } ],
    uiDisplay: { equation: '2Al + 3H2SO4 -> Al2(SO4)3 + 3H2↑', conditions: '常温', principle: '铝与稀硫酸反应生成硫酸铝和氢气。' }
  },
  {
    id: 'rxn_h2_o2_water',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_H2', count: 2 }, { itemId: 'comp_O2', count: 1 } ],
    outputs: [ { itemId: 'comp_H2O', count: 2 } ],
    uiDisplay: { equation: '2H2 + O2 -> 2H2O', conditions: '点燃', principle: '氢气在氧气中燃烧生成水，放出大量热。' }
  },
  {
    id: 'rxn_h2_cl2_hcl',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_H2', count: 1 }, { itemId: 'comp_Cl2', count: 1 } ],
    outputs: [ { itemId: 'comp_HCl', count: 2 } ],
    uiDisplay: { equation: 'H2 + Cl2 -> 2HCl', conditions: '点燃或光照', principle: '氢气在氯气中燃烧，发出苍白色火焰，瓶口有白雾产生。' }
  },
  {
    id: 'rxn_h2_f2_hf',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_H2', count: 1 }, { itemId: 'comp_F2', count: 1 } ],
    outputs: [ { itemId: 'comp_HF', count: 2 } ],
    uiDisplay: { equation: 'H2 + F2 -> 2HF', conditions: '暗处即爆炸', principle: '氢气与氟气反应极其剧烈，即使在低温阴暗处也能发生爆炸。' }
  },
  {
    id: 'rxn_photosynthesis',
    reactionType: '光合作用',
    inputs: [ { itemId: 'comp_CO2', count: 6 }, { itemId: 'comp_H2O', count: 6 } ],
    outputs: [ { itemId: 'comp_C6H12O6', count: 1 }, { itemId: 'comp_O2', count: 6 } ],
    uiDisplay: { equation: '6CO2 + 6H2O -> C6H12O6 + 6O2', conditions: '光照，叶绿体', principle: '绿色植物通过叶绿体，利用光能，把二氧化碳和水转化成储存能量的有机物。' }
  },
  {
    id: 'rxn_respiration',
    reactionType: '呼吸作用',
    inputs: [ { itemId: 'comp_C6H12O6', count: 1 }, { itemId: 'comp_O2', count: 6 } ],
    outputs: [ { itemId: 'comp_CO2', count: 6 }, { itemId: 'comp_H2O', count: 6 } ],
    uiDisplay: { equation: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O', conditions: '酶', principle: '生物体内的有机物在细胞内经过一系列氧化分解，最终生成二氧化碳和水，并释放能量。' }
  },
  {
    id: 'rxn_sugar_hydrolysis',
    reactionType: '水解反应',
    inputs: [ { itemId: 'comp_C12H22O11', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    outputs: [ { itemId: 'comp_C6H12O6', count: 1 }, { itemId: 'comp_C6H12O6_Fructose', count: 1 } ],
    uiDisplay: { equation: 'C12H22O11 + H2O -> C6H12O6(葡) + C6H12O6(果)', conditions: '催化剂', principle: '蔗糖在酸或酶的催化作用下水解生成一分子葡萄糖和一分子果糖。' }
  },
  {
    id: 'rxn_sr_co2_burn',
    reactionType: '氧化还原反应',
    inputs: [ { itemId: 'elem_Sr', count: 2 }, { itemId: 'comp_CO2', count: 1 } ],
    outputs: [ { itemId: 'comp_CaO', count: 2 }, { itemId: 'elem_C', count: 1 } ], // Note: SrO is similar to CaO, using CaO as placeholder or should add SrO
    uiDisplay: { equation: '2Sr + CO2 -> 2SrO + C', conditions: '点燃', principle: '锶在二氧化碳中剧烈燃烧，生成氧化锶和碳。' }
  },
  {
    id: 'rxn_water_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_H', count: 2 }, { itemId: 'elem_O', count: 1 } ],
    outputs: [ { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: '2H + O -> H2O', conditions: '点燃', principle: '氢氧自由基链式反应，放出大量热。H-H键和O=O键断裂吸收能量，形成O-H共价键释放更多能量。' }
  },
  {
    id: 'rxn_co2_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_C', count: 1 }, { itemId: 'elem_O', count: 2 } ],
    outputs: [ { itemId: 'comp_CO2', count: 1 } ],
    uiDisplay: { equation: 'C + 2O -> CO2', conditions: '点燃', principle: '碳在氧气中充分燃烧，发生剧烈的氧化还原反应，释放大量热能。' }
  },
  {
    id: 'rxn_nacl_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Na', count: 1 }, { itemId: 'elem_Cl', count: 1 } ],
    outputs: [ { itemId: 'comp_NaCl', count: 1 } ],
    uiDisplay: { equation: 'Na + Cl -> NaCl', conditions: '点燃', principle: '活泼金属与活泼非金属的反应。钠原子失去一个电子，氯原子得到一个电子，形成离子键。' }
  },
  {
    id: 'rxn_fes_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Fe', count: 1 }, { itemId: 'elem_S', count: 1 } ],
    outputs: [ { itemId: 'comp_FeS', count: 1 } ],
    uiDisplay: { equation: 'Fe + S -> FeS', conditions: '加热', principle: '铁粉与硫粉混合加热，发生化合反应生成硫化亚铁，反应放热。' }
  },
  {
    id: 'rxn_cuo_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Cu', count: 1 }, { itemId: 'elem_O', count: 1 } ],
    outputs: [ { itemId: 'comp_CuO', count: 1 } ],
    uiDisplay: { equation: '2Cu + O2 -> 2CuO (简化为 Cu + O -> CuO)', conditions: '加热', principle: '紫红色的铜在空气中加热，与氧气反应生成黑色的氧化铜。' }
  },
  {
    id: 'rxn_esterification_01',
    reactionType: '有机取代反应 (酯化)',
    inputs: [ { itemId: 'comp_CH3COOH', count: 1 }, { itemId: 'comp_C2H5OH', count: 1 } ],
    outputs: [ { itemId: 'comp_CH3COOC2H5', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O', conditions: '浓硫酸，加热', principle: '酸脱羟基，醇脱氢。浓硫酸在此反应中不仅作为催化剂降低反应活化能，还作为吸水剂促使化学平衡向生成乙酸乙酯的方向移动。' }
  },
  {
    id: 'rxn_h2o2_decomp',
    reactionType: '分解反应',
    inputs: [ { itemId: 'comp_H2O2', count: 2 } ],
    outputs: [ { itemId: 'comp_H2O', count: 2 }, { itemId: 'elem_O', count: 2 } ],
    uiDisplay: { equation: '2H2O2 -> 2H2O + O2', conditions: 'MnO2 催化', principle: '过氧化氢在催化剂作用下分解，生成水和氧气，是典型的歧化反应。' }
  },
  {
    id: 'rxn_zn_hcl',
    reactionType: '置换反应',
    inputs: [ { itemId: 'elem_Zn', count: 1 }, { itemId: 'comp_HCl', count: 2 } ],
    outputs: [ { itemId: 'comp_ZnCl2', count: 1 }, { itemId: 'elem_H', count: 2 } ],
    uiDisplay: { equation: 'Zn + 2HCl -> ZnCl2 + H2', conditions: '常温', principle: '活泼金属置换出酸中的氢，发生氧化还原反应，锌被氧化，氢离子被还原。' }
  },
  {
    id: 'rxn_neutralization',
    reactionType: '复分解反应 (中和)',
    inputs: [ { itemId: 'comp_NaOH', count: 1 }, { itemId: 'comp_HCl', count: 1 } ],
    outputs: [ { itemId: 'comp_NaCl', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'NaOH + HCl -> NaCl + H2O', conditions: '常温', principle: '酸和碱反应生成盐和水，实质是氢离子和氢氧根离子结合生成水分子。' }
  },
  {
    id: 'rxn_precipitation',
    reactionType: '复分解反应 (沉淀)',
    inputs: [ { itemId: 'comp_AgNO3', count: 1 }, { itemId: 'comp_NaCl', count: 1 } ],
    outputs: [ { itemId: 'comp_AgCl', count: 1 }, { itemId: 'comp_NaNO3', count: 1 } ],
    uiDisplay: { equation: 'AgNO3 + NaCl -> AgCl↓ + NaNO3', conditions: '常温', principle: '溶液中的银离子和氯离子结合生成难溶于水的氯化银白色沉淀。' }
  },
  {
    id: 'rxn_methane_combustion',
    reactionType: '氧化还原反应 (燃烧)',
    inputs: [ { itemId: 'comp_CH4', count: 1 }, { itemId: 'elem_O', count: 4 } ],
    outputs: [ { itemId: 'comp_CO2', count: 1 }, { itemId: 'comp_H2O', count: 2 } ],
    uiDisplay: { equation: 'CH4 + 2O2 -> CO2 + 2H2O', conditions: '点燃', principle: '甲烷在氧气中完全燃烧，碳被氧化为二氧化碳，氢被氧化为水，放出大量热。' }
  },
  { id: 'rxn_na_o2_slow', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Na', count: 4 }, { itemId: 'elem_O', count: 2 } ], outputs: [ { itemId: 'comp_Na2O', count: 2 } ], uiDisplay: { equation: '4Na + O2 -> 2Na2O', conditions: '常温', principle: '钠在空气中缓慢氧化生成氧化钠。' } },
  { id: 'rxn_na_o2_burn', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Na', count: 2 }, { itemId: 'elem_O', count: 2 } ], outputs: [ { itemId: 'comp_Na2O2', count: 1 } ], uiDisplay: { equation: '2Na + O2 -> Na2O2', conditions: '加热/点燃', principle: '钠在空气中燃烧生成淡黄色的过氧化钠。' } },
  { id: 'rxn_na_h2o', reactionType: '置换反应', inputs: [ { itemId: 'elem_Na', count: 2 }, { itemId: 'comp_H2O', count: 2 } ], outputs: [ { itemId: 'comp_NaOH', count: 2 }, { itemId: 'elem_H', count: 2 } ], uiDisplay: { equation: '2Na + 2H2O -> 2NaOH + H2↑', conditions: '常温', principle: '钠与水剧烈反应，浮、熔、游、响、红。' } },
  { id: 'rxn_na2o2_h2o', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_Na2O2', count: 2 }, { itemId: 'comp_H2O', count: 2 } ], outputs: [ { itemId: 'comp_NaOH', count: 4 }, { itemId: 'elem_O', count: 2 } ], uiDisplay: { equation: '2Na2O2 + 2H2O -> 4NaOH + O2↑', conditions: '常温', principle: '过氧化钠既是氧化剂又是还原剂的歧化反应。' } },
  { id: 'rxn_na2o2_co2', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_Na2O2', count: 2 }, { itemId: 'comp_CO2', count: 2 } ], outputs: [ { itemId: 'comp_Na2CO3', count: 2 }, { itemId: 'elem_O', count: 2 } ], uiDisplay: { equation: '2Na2O2 + 2CO2 -> 2Na2CO3 + O2', conditions: '常温', principle: '呼吸面具原理，吸收二氧化碳释放氧气。' } },
  { id: 'rxn_nahco3_decomp', reactionType: '分解反应', inputs: [ { itemId: 'comp_NaHCO3', count: 2 } ], outputs: [ { itemId: 'comp_Na2CO3', count: 1 }, { itemId: 'comp_H2O', count: 1 }, { itemId: 'comp_CO2', count: 1 } ], uiDisplay: { equation: '2NaHCO3 -> Na2CO3 + H2O + CO2↑', conditions: '加热', principle: '碳酸氢钠受热不稳定分解。' } },
  { id: 'rxn_al_hcl', reactionType: '置换反应', inputs: [ { itemId: 'elem_Al', count: 2 }, { itemId: 'comp_HCl', count: 6 } ], outputs: [ { itemId: 'comp_AlCl3', count: 2 }, { itemId: 'elem_H', count: 6 } ], uiDisplay: { equation: '2Al + 6HCl -> 2AlCl3 + 3H2↑', conditions: '常温', principle: '铝与强酸反应放出氢气。' } },
  { id: 'rxn_al_naoh', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Al', count: 2 }, { itemId: 'comp_NaOH', count: 2 }, { itemId: 'comp_H2O', count: 2 } ], outputs: [ { itemId: 'comp_NaAlO2', count: 2 }, { itemId: 'elem_H', count: 6 } ], uiDisplay: { equation: '2Al + 2NaOH + 2H2O -> 2NaAlO2 + 3H2↑', conditions: '常温', principle: '铝的特殊性质，能与强碱溶液反应放出氢气。' } },
  { id: 'rxn_al2o3_naoh', reactionType: '复分解反应', inputs: [ { itemId: 'comp_Al2O3', count: 1 }, { itemId: 'comp_NaOH', count: 2 } ], outputs: [ { itemId: 'comp_NaAlO2', count: 2 }, { itemId: 'comp_H2O', count: 1 } ], uiDisplay: { equation: 'Al2O3 + 2NaOH -> 2NaAlO2 + H2O', conditions: '常温', principle: '两性氧化物与强碱反应。' } },
  { id: 'rxn_aloh3_naoh', reactionType: '复分解反应', inputs: [ { itemId: 'comp_AlOH3', count: 1 }, { itemId: 'comp_NaOH', count: 1 } ], outputs: [ { itemId: 'comp_NaAlO2', count: 1 }, { itemId: 'comp_H2O', count: 2 } ], uiDisplay: { equation: 'Al(OH)3 + NaOH -> NaAlO2 + 2H2O', conditions: '常温', principle: '两性氢氧化物与强碱反应。' } },
  { id: 'rxn_thermite', reactionType: '置换反应', inputs: [ { itemId: 'elem_Al', count: 2 }, { itemId: 'comp_Fe2O3', count: 1 } ], outputs: [ { itemId: 'comp_Al2O3', count: 1 }, { itemId: 'elem_Fe', count: 2 } ], uiDisplay: { equation: '2Al + Fe2O3 -> Al2O3 + 2Fe', conditions: '高温', principle: '铝热反应，放出大量热，常用于焊接钢轨。' } },
  { id: 'rxn_fe_h2o', reactionType: '置换反应', inputs: [ { itemId: 'elem_Fe', count: 3 }, { itemId: 'comp_H2O', count: 4 } ], outputs: [ { itemId: 'comp_Fe3O4', count: 1 }, { itemId: 'elem_H', count: 8 } ], uiDisplay: { equation: '3Fe + 4H2O(g) -> Fe3O4 + 4H2', conditions: '高温', principle: '铁与水蒸气在高温下反应。' } },
  { id: 'rxn_fe_hno3_dilute', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Fe', count: 3 }, { itemId: 'comp_HNO3', count: 8 } ], outputs: [ { itemId: 'comp_FeNO3_2', count: 3 }, { itemId: 'comp_NO', count: 2 }, { itemId: 'comp_H2O', count: 4 } ], uiDisplay: { equation: '3Fe + 8HNO3(稀) -> 3Fe(NO3)2 + 2NO↑ + 4H2O', conditions: 'Fe过量', principle: '铁与稀硝酸反应，铁过量时生成亚铁盐。' } },
  { id: 'rxn_fecl3_fe', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_FeCl3', count: 2 }, { itemId: 'elem_Fe', count: 1 } ], outputs: [ { itemId: 'comp_FeCl2', count: 3 } ], uiDisplay: { equation: '2FeCl3 + Fe -> 3FeCl2', conditions: '常温', principle: '三价铁离子具有氧化性，能将铁单质氧化为二价铁。' } },
  { id: 'rxn_fecl2_cl2', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_FeCl2', count: 2 }, { itemId: 'elem_Cl', count: 2 } ], outputs: [ { itemId: 'comp_FeCl3', count: 2 } ], uiDisplay: { equation: '2FeCl2 + Cl2 -> 2FeCl3', conditions: '常温', principle: '氯气具有强氧化性，能将二价铁氧化为三价铁。' } },
  { id: 'rxn_feoh2_o2', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_FeOH2', count: 4 }, { itemId: 'elem_O', count: 2 }, { itemId: 'comp_H2O', count: 2 } ], outputs: [ { itemId: 'comp_FeOH3', count: 4 } ], uiDisplay: { equation: '4Fe(OH)2 + O2 + 2H2O -> 4Fe(OH)3', conditions: '常温', principle: '氢氧化亚铁在空气中极易被氧化，颜色由白变灰绿再变红褐。' } },
  { id: 'rxn_mno2_hcl', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_MnO2', count: 1 }, { itemId: 'comp_HCl', count: 4 } ], outputs: [ { itemId: 'comp_MnCl2', count: 1 }, { itemId: 'elem_Cl', count: 2 }, { itemId: 'comp_H2O', count: 2 } ], uiDisplay: { equation: 'MnO2 + 4HCl(浓) -> MnCl2 + Cl2↑ + 2H2O', conditions: '加热', principle: '实验室制取氯气的经典方法。' } },
  { id: 'rxn_cl2_h2o', reactionType: '歧化反应', inputs: [ { itemId: 'elem_Cl', count: 2 }, { itemId: 'comp_H2O', count: 1 } ], outputs: [ { itemId: 'comp_HCl', count: 1 }, { itemId: 'comp_HClO', count: 1 } ], uiDisplay: { equation: 'Cl2 + H2O <=> HCl + HClO', conditions: '常温', principle: '氯气溶于水，部分与水发生歧化反应。' } },
  { id: 'rxn_cl2_caoh2', reactionType: '歧化反应', inputs: [ { itemId: 'elem_Cl', count: 4 }, { itemId: 'comp_CaOH2', count: 2 } ], outputs: [ { itemId: 'comp_CaCl2', count: 1 }, { itemId: 'comp_CaClO2', count: 1 }, { itemId: 'comp_H2O', count: 2 } ], uiDisplay: { equation: '2Cl2 + 2Ca(OH)2 -> CaCl2 + Ca(ClO)2 + 2H2O', conditions: '常温', principle: '工业制取漂白粉的反应。' } },
  { id: 'rxn_so2_h2o', reactionType: '化合反应', inputs: [ { itemId: 'comp_SO2', count: 1 }, { itemId: 'comp_H2O', count: 1 } ], outputs: [ { itemId: 'comp_H2SO3', count: 1 } ], uiDisplay: { equation: 'SO2 + H2O <=> H2SO3', conditions: '常温', principle: '酸性氧化物溶于水生成对应的酸。' } },
  { id: 'rxn_so2_o2', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_SO2', count: 2 }, { itemId: 'elem_O', count: 2 } ], outputs: [ { itemId: 'comp_SO3', count: 2 } ], uiDisplay: { equation: '2SO2 + O2 <=> 2SO3', conditions: '催化剂，加热', principle: '工业制硫酸的核心步骤，可逆反应。' } },
  { id: 'rxn_cu_h2so4', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Cu', count: 1 }, { itemId: 'comp_H2SO4', count: 2 } ], outputs: [ { itemId: 'comp_CuSO4', count: 1 }, { itemId: 'comp_SO2', count: 1 }, { itemId: 'comp_H2O', count: 2 } ], uiDisplay: { equation: 'Cu + 2H2SO4(浓) -> CuSO4 + SO2↑ + 2H2O', conditions: '加热', principle: '浓硫酸表现出强氧化性，将不活泼金属铜氧化。' } },
  { id: 'rxn_n2_h2', reactionType: '化合反应', inputs: [ { itemId: 'elem_N', count: 2 }, { itemId: 'elem_H', count: 6 } ], outputs: [ { itemId: 'comp_NH3', count: 2 } ], uiDisplay: { equation: 'N2 + 3H2 <=> 2NH3', conditions: '催化剂，高温高压', principle: '工业合成氨，人类固氮的重要里程碑。' } },
  { id: 'rxn_nh3_o2', reactionType: '氧化还原反应', inputs: [ { itemId: 'comp_NH3', count: 4 }, { itemId: 'elem_O', count: 10 } ], outputs: [ { itemId: 'comp_NO', count: 4 }, { itemId: 'comp_H2O', count: 6 } ], uiDisplay: { equation: '4NH3 + 5O2 -> 4NO + 6H2O', conditions: '催化剂，加热', principle: '氨的催化氧化，工业制硝酸的基础。' } },
  { id: 'rxn_cu_hno3_conc', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Cu', count: 1 }, { itemId: 'comp_HNO3', count: 4 } ], outputs: [ { itemId: 'comp_CuNO3_2', count: 1 }, { itemId: 'comp_NO2', count: 2 }, { itemId: 'comp_H2O', count: 2 } ], uiDisplay: { equation: 'Cu + 4HNO3(浓) -> Cu(NO3)2 + 2NO2↑ + 2H2O', conditions: '常温', principle: '浓硝酸具有强氧化性，还原产物为二氧化氮。' } },
  { id: 'rxn_cu_hno3_dilute', reactionType: '氧化还原反应', inputs: [ { itemId: 'elem_Cu', count: 3 }, { itemId: 'comp_HNO3', count: 8 } ], outputs: [ { itemId: 'comp_CuNO3_2', count: 3 }, { itemId: 'comp_NO', count: 2 }, { itemId: 'comp_H2O', count: 4 } ], uiDisplay: { equation: '3Cu + 8HNO3(稀) -> 3Cu(NO3)2 + 2NO↑ + 4H2O', conditions: '常温', principle: '稀硝酸具有强氧化性，还原产物为一氧化氮。' } },
  { id: 'rxn_ch4_cl2', reactionType: '取代反应', inputs: [ { itemId: 'comp_CH4', count: 1 }, { itemId: 'elem_Cl', count: 2 } ], outputs: [ { itemId: 'comp_CH3Cl', count: 1 }, { itemId: 'comp_HCl', count: 1 } ], uiDisplay: { equation: 'CH4 + Cl2 -> CH3Cl + HCl', conditions: '光照', principle: '烷烃的特征反应，自由基取代。' } },
  { id: 'rxn_c2h4_br2', reactionType: '加成反应', inputs: [ { itemId: 'comp_C2H4', count: 1 }, { itemId: 'comp_Br2', count: 1 } ], outputs: [ { itemId: 'comp_C2H4Br2', count: 1 } ], uiDisplay: { equation: 'CH2=CH2 + Br2 -> CH2Br-CH2Br', conditions: '常温', principle: '烯烃的特征反应，碳碳双键断裂，溴原子加上去。' } },
  {
    id: 'rxn_c2h5oh_o2',
    reactionType: '氧化反应',
    inputs: [ { itemId: 'comp_C2H5OH', count: 2 }, { itemId: 'elem_O', count: 2 } ],
    outputs: [ { itemId: 'comp_CH3CHO', count: 2 }, { itemId: 'comp_H2O', count: 2 } ],
    uiDisplay: { equation: '2CH3CH2OH + O2 -> 2CH3CHO + 2H2O', conditions: 'Cu/Ag催化，加热', principle: '醇的催化氧化，脱氢生成醛。' }
  },
  {
    id: 'rxn_hgo_decomp',
    reactionType: '分解反应',
    inputs: [ { itemId: 'comp_HgO', count: 2 } ],
    outputs: [ { itemId: 'elem_Hg', count: 2 }, { itemId: 'elem_O', count: 2 } ],
    uiDisplay: { equation: '2HgO -> 2Hg + O2', conditions: '加热', principle: '氧化汞受热分解生成汞和氧气。' }
  },
  {
    id: 'rxn_nh3_hcl',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_NH3', count: 1 }, { itemId: 'comp_HCl', count: 1 } ],
    outputs: [ { itemId: 'comp_NH4Cl', count: 1 } ],
    uiDisplay: { equation: 'NH3 + HCl -> NH4Cl', conditions: '常温', principle: '氨气与氯化氢反应生成氯化铵固体，产生白烟。' }
  },
  {
    id: 'rxn_nh3_hno3',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_NH3', count: 1 }, { itemId: 'comp_HNO3', count: 1 } ],
    outputs: [ { itemId: 'comp_NH4NO3', count: 1 } ],
    uiDisplay: { equation: 'NH3 + HNO3 -> NH4NO3', conditions: '常温', principle: '氨气与硝酸反应生成硝酸铵。' }
  },
  {
    id: 'rxn_c2h4_h2o',
    reactionType: '加成反应',
    inputs: [ { itemId: 'comp_C2H4', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    outputs: [ { itemId: 'comp_C2H5OH', count: 1 } ],
    uiDisplay: { equation: 'CH2=CH2 + H2O -> CH3CH2OH', conditions: '催化剂，加热加压', principle: '乙烯与水发生加成反应生成乙醇。' }
  },
  {
    id: 'rxn_c2h2_h2',
    reactionType: '加成反应',
    inputs: [ { itemId: 'comp_C2H2', count: 1 }, { itemId: 'elem_H', count: 2 } ],
    outputs: [ { itemId: 'comp_C2H4', count: 1 } ],
    uiDisplay: { equation: 'C2H2 + H2 -> C2H4', conditions: '催化剂，加热', principle: '乙炔与氢气发生加成反应生成乙烯。' }
  },
  {
    id: 'rxn_c2h4_h2',
    reactionType: '加成反应',
    inputs: [ { itemId: 'comp_C2H4', count: 1 }, { itemId: 'elem_H', count: 2 } ],
    outputs: [ { itemId: 'comp_C2H6', count: 1 } ],
    uiDisplay: { equation: 'C2H4 + H2 -> C2H6', conditions: '催化剂，加热', principle: '乙烯与氢气发生加成反应生成乙烷。' }
  },
  {
    id: 'rxn_ch3cho_h2',
    reactionType: '还原反应',
    inputs: [ { itemId: 'comp_CH3CHO', count: 1 }, { itemId: 'elem_H', count: 2 } ],
    outputs: [ { itemId: 'comp_C2H5OH', count: 1 } ],
    uiDisplay: { equation: 'CH3CHO + H2 -> C2H5OH', conditions: '催化剂，加热', principle: '乙醛与氢气发生加成反应（还原反应）生成乙醇。' }
  },
  {
    id: 'rxn_caco3_hcl',
    reactionType: '复分解反应',
    inputs: [ { itemId: 'comp_CaCO3', count: 1 }, { itemId: 'comp_HCl', count: 2 } ],
    outputs: [ { itemId: 'comp_CaCl2', count: 1 }, { itemId: 'comp_CO2', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'CaCO3 + 2HCl -> CaCl2 + CO2↑ + H2O', conditions: '常温', principle: '实验室制取二氧化碳的常用方法。' }
  },
  {
    id: 'rxn_cu_agno3',
    reactionType: '置换反应',
    inputs: [ { itemId: 'elem_Cu', count: 1 }, { itemId: 'comp_AgNO3', count: 2 } ],
    outputs: [ { itemId: 'comp_CuNO3_2', count: 1 }, { itemId: 'elem_Ag', count: 2 } ],
    uiDisplay: { equation: 'Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag', conditions: '常温', principle: '铜置换出硝酸银溶液中的银。' }
  },
  {
    id: 'rxn_fe_cuso4',
    reactionType: '置换反应',
    inputs: [ { itemId: 'elem_Fe', count: 1 }, { itemId: 'comp_CuSO4', count: 1 } ],
    outputs: [ { itemId: 'comp_FeSO4', count: 1 }, { itemId: 'elem_Cu', count: 1 } ],
    uiDisplay: { equation: 'Fe + CuSO4 -> FeSO4 + Cu', conditions: '常温', principle: '铁置换出硫酸铜溶液中的铜。' }
  },
  {
    id: 'rxn_caoh2_co2',
    reactionType: '复分解反应',
    inputs: [ { itemId: 'comp_CaOH2', count: 1 }, { itemId: 'comp_CO2', count: 1 } ],
    outputs: [ { itemId: 'comp_CaCO3', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'Ca(OH)2 + CO2 -> CaCO3↓ + H2O', conditions: '常温', principle: '澄清石灰水变浑浊，用于检验二氧化碳。' }
  },
  {
    id: 'rxn_na2co3_hcl',
    reactionType: '复分解反应',
    inputs: [ { itemId: 'comp_Na2CO3', count: 1 }, { itemId: 'comp_HCl', count: 2 } ],
    outputs: [ { itemId: 'comp_NaCl', count: 2 }, { itemId: 'comp_CO2', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'Na2CO3 + 2HCl -> 2NaCl + CO2↑ + H2O', conditions: '常温', principle: '碳酸盐与酸反应生成二氧化碳。' }
  },
  {
    id: 'rxn_baso4_precip',
    reactionType: '复分解反应',
    inputs: [ { itemId: 'comp_BaCl2', count: 1 }, { itemId: 'comp_Na2SO4', count: 1 } ],
    outputs: [ { itemId: 'comp_BaSO4', count: 1 }, { itemId: 'comp_NaCl', count: 2 } ],
    uiDisplay: { equation: 'BaCl2 + Na2SO4 -> BaSO4↓ + 2NaCl', conditions: '常温', principle: '生成难溶的硫酸钡白色沉淀。' }
  },
  {
    id: 'rxn_kmno4_decomp',
    reactionType: '分解反应',
    inputs: [ { itemId: 'comp_KMnO4', count: 2 } ],
    outputs: [ { itemId: 'comp_K2MnO4', count: 1 }, { itemId: 'comp_MnO2', count: 1 }, { itemId: 'elem_O', count: 2 } ],
    uiDisplay: { equation: '2KMnO4 -> K2MnO4 + MnO2 + O2↑', conditions: '加热', principle: '实验室制取氧气的常用方法。' }
  },
  {
    id: 'rxn_c6h5ch3_hno3',
    reactionType: '取代反应',
    inputs: [ { itemId: 'comp_C6H5CH3', count: 1 }, { itemId: 'comp_HNO3', count: 3 } ],
    outputs: [ { itemId: 'comp_TNT', count: 1 }, { itemId: 'comp_H2O', count: 3 } ],
    uiDisplay: { equation: 'C6H5CH3 + 3HNO3 -> TNT + 3H2O', conditions: '浓硫酸，加热', principle: '甲苯的硝化反应，生成三硝基甲苯（TNT）。' }
  },
  {
    id: 'rxn_c6h6_hno3',
    reactionType: '取代反应',
    inputs: [ { itemId: 'comp_C6H6', count: 1 }, { itemId: 'comp_HNO3', count: 1 } ],
    outputs: [ { itemId: 'comp_C6H5NO2', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'C6H6 + HNO3 -> C6H5NO2 + H2O', conditions: '浓硫酸，50-60℃', principle: '苯的硝化反应，生成硝基苯。' }
  },
  {
    id: 'rxn_c2h5oh_dehydration_170',
    reactionType: '消去反应',
    inputs: [ { itemId: 'comp_C2H5OH', count: 1 } ],
    outputs: [ { itemId: 'comp_C2H4', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'CH3CH2OH -> CH2=CH2 + H2O', conditions: '浓硫酸，170℃', principle: '乙醇的分子内脱水生成乙烯。' }
  },
  {
    id: 'rxn_c2h5oh_dehydration_140',
    reactionType: '取代反应',
    inputs: [ { itemId: 'comp_C2H5OH', count: 2 } ],
    outputs: [ { itemId: 'comp_C2H5OC2H5', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: '2CH3CH2OH -> CH3CH2OCH2CH3 + H2O', conditions: '浓硫酸，140℃', principle: '乙醇的分子间脱水生成乙醚。' }
  },
  {
    id: 'rxn_ch3cooh_ch3oh',
    reactionType: '酯化反应',
    inputs: [ { itemId: 'comp_CH3COOH', count: 1 }, { itemId: 'comp_CH3OH', count: 1 } ],
    outputs: [ { itemId: 'comp_CH3COOCH3', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: 'CH3COOH + CH3OH <=> CH3COOCH3 + H2O', conditions: '浓硫酸，加热', principle: '乙酸与甲醇发生酯化反应生成乙酸甲酯。' }
  },
  {
    id: 'rxn_h2c2o4_kmno4',
    reactionType: '氧化还原反应',
    inputs: [ { itemId: 'comp_H2C2O4', count: 5 }, { itemId: 'comp_KMnO4', count: 2 }, { itemId: 'comp_H2SO4', count: 3 } ],
    outputs: [ { itemId: 'comp_K2SO4', count: 1 }, { itemId: 'comp_MnSO4', count: 2 }, { itemId: 'comp_CO2', count: 10 }, { itemId: 'comp_H2O', count: 8 } ],
    uiDisplay: { equation: '5H2C2O4 + 2KMnO4 + 3H2SO4 -> K2SO4 + 2MnSO4 + 10CO2↑ + 8H2O', conditions: '常温', principle: '高锰酸钾氧化草酸，溶液紫色褪去。' }
  },
  {
    id: 'rxn_c2h2_h2o',
    reactionType: '加成反应',
    inputs: [ { itemId: 'comp_C2H2', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    outputs: [ { itemId: 'comp_CH3CHO', count: 1 } ],
    uiDisplay: { equation: 'C2H2 + H2O -> CH3CHO', conditions: 'HgSO4/H2SO4, 加热', principle: '乙炔的水化反应，生成乙醛。' }
  },
  {
    id: 'rxn_cac2_h2o',
    reactionType: '复分解反应',
    inputs: [ { itemId: 'comp_CaC2', count: 1 }, { itemId: 'comp_H2O', count: 2 } ],
    outputs: [ { itemId: 'comp_C2H2', count: 1 }, { itemId: 'comp_CaOH2', count: 1 } ],
    uiDisplay: { equation: 'CaC2 + 2H2O -> C2H2↑ + Ca(OH)2', conditions: '常温', principle: '实验室制取乙炔的方法。' }
  },
  {
    id: 'rxn_p2o5_h2o',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_P2O5', count: 1 }, { itemId: 'comp_H2O', count: 3 } ],
    outputs: [ { itemId: 'comp_H3PO4', count: 2 } ],
    uiDisplay: { equation: 'P2O5 + 3H2O -> 2H3PO4', conditions: '加热', principle: '五氧化二磷与热水反应生成磷酸。' }
  },
  {
    id: 'rxn_c3h8o3_hno3',
    reactionType: '酯化反应',
    inputs: [ { itemId: 'comp_C3H8O3', count: 1 }, { itemId: 'comp_HNO3', count: 3 } ],
    outputs: [ { itemId: 'comp_C3H5N3O9', count: 1 }, { itemId: 'comp_H2O', count: 3 } ],
    uiDisplay: { equation: 'C3H5(OH)3 + 3HNO3 -> C3H5(NO3)3 + 3H2O', conditions: '浓硫酸，冷却', principle: '甘油的硝化反应，生成硝化甘油。' }
  },
  {
    id: 'rxn_cuso4_hydration',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_CuSO4', count: 1 }, { itemId: 'comp_H2O', count: 5 } ],
    outputs: [ { itemId: 'comp_CuSO4_5H2O', count: 1 } ],
    uiDisplay: { equation: 'CuSO4 + 5H2O -> CuSO4·5H2O', conditions: '常温', principle: '无水硫酸铜吸水变蓝，常用于检验水的存在。' }
  },
  {
    id: 'rxn_ozone_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_O', count: 3 } ],
    outputs: [ { itemId: 'comp_O3', count: 1 } ],
    uiDisplay: { equation: '3O -> O3', conditions: '高压放电', principle: '氧气在放电条件下转化为臭氧。' }
  },
  {
    id: 'rxn_silane_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Si', count: 1 }, { itemId: 'elem_H', count: 4 } ],
    outputs: [ { itemId: 'comp_SiH4', count: 1 } ],
    uiDisplay: { equation: 'Si + 4H -> SiH4', conditions: '高温高压', principle: '单质直接化合制取甲硅烷。' }
  },
  {
    id: 'rxn_hydrazine_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_N', count: 2 }, { itemId: 'elem_H', count: 4 } ],
    outputs: [ { itemId: 'comp_N2H4', count: 1 } ],
    uiDisplay: { equation: '2N + 4H -> N2H4', conditions: '催化剂', principle: '氮气与氢气在特定条件下合成联氨。' }
  },
  {
    id: 'rxn_phosgene_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_CO', count: 1 }, { itemId: 'elem_Cl', count: 2 } ],
    outputs: [ { itemId: 'comp_COCl2', count: 1 } ],
    uiDisplay: { equation: 'CO + Cl2 -> COCl2', conditions: '活性炭催化', principle: '一氧化碳与氯气化合生成光气。' }
  },
  {
    id: 'rxn_urea_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_NH3', count: 2 }, { itemId: 'comp_CO2', count: 1 } ],
    outputs: [ { itemId: 'comp_NH2CONH2', count: 1 }, { itemId: 'comp_H2O', count: 1 } ],
    uiDisplay: { equation: '2NH3 + CO2 -> CO(NH2)2 + H2O', conditions: '高温高压', principle: '工业合成尿素的反应。' }
  },
  {
    id: 'rxn_vinyl_chloride_synthesis',
    reactionType: '加成反应',
    inputs: [ { itemId: 'comp_C2H2', count: 1 }, { itemId: 'comp_HCl', count: 1 } ],
    outputs: [ { itemId: 'comp_C2H3Cl', count: 1 } ],
    uiDisplay: { equation: 'C2H2 + HCl -> C2H3Cl', conditions: 'HgCl2催化', principle: '乙炔与氯化氢加成生成氯乙烯。' }
  },
  {
    id: 'rxn_chlorobenzene_synthesis',
    reactionType: '取代反应',
    inputs: [ { itemId: 'comp_C6H6', count: 1 }, { itemId: 'elem_Cl', count: 2 } ],
    outputs: [ { itemId: 'comp_C6H5Cl', count: 1 }, { itemId: 'comp_HCl', count: 1 } ],
    uiDisplay: { equation: 'C6H6 + Cl2 -> C6H5Cl + HCl', conditions: 'FeCl3催化', principle: '苯的卤代反应。' }
  },
  {
    id: 'rxn_al2s3_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Al', count: 2 }, { itemId: 'elem_S', count: 3 } ],
    outputs: [ { itemId: 'comp_Al2S3', count: 1 } ],
    uiDisplay: { equation: '2Al + 3S -> Al2S3', conditions: '点燃', principle: '铝与硫直接化合。' }
  },
  {
    id: 'rxn_sic_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Si', count: 1 }, { itemId: 'elem_C', count: 1 } ],
    outputs: [ { itemId: 'comp_SiC', count: 1 } ],
    uiDisplay: { equation: 'Si + C -> SiC', conditions: '高温', principle: '硅与碳在高温下化合。' }
  },
  {
    id: 'rxn_bn_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_B', count: 1 }, { itemId: 'elem_N', count: 1 } ],
    outputs: [ { itemId: 'comp_BN', count: 1 } ],
    uiDisplay: { equation: 'B + N -> BN', conditions: '高温', principle: '硼与氮在高温下化合。' }
  },
  {
    id: 'rxn_wc_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_W', count: 1 }, { itemId: 'elem_C', count: 1 } ],
    outputs: [ { itemId: 'comp_WC', count: 1 } ],
    uiDisplay: { equation: 'W + C -> WC', conditions: '高温', principle: '钨与碳在高温下化合。' }
  },
  {
    id: 'rxn_gaas_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Ga', count: 1 }, { itemId: 'elem_As', count: 1 } ],
    outputs: [ { itemId: 'comp_GaAs', count: 1 } ],
    uiDisplay: { equation: 'Ga + As -> GaAs', conditions: '高温', principle: '镓与砷化合生成砷化镓。' }
  },
  {
    id: 'rxn_geo2_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Ge', count: 1 }, { itemId: 'elem_O', count: 2 } ],
    outputs: [ { itemId: 'comp_GeO2', count: 1 } ],
    uiDisplay: { equation: 'Ge + O2 -> GeO2', conditions: '加热', principle: '锗在氧气中燃烧。' }
  },
  {
    id: 'rxn_seo2_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Se', count: 1 }, { itemId: 'elem_O', count: 2 } ],
    outputs: [ { itemId: 'comp_SeO2', count: 1 } ],
    uiDisplay: { equation: 'Se + O2 -> SeO2', conditions: '点燃', principle: '硒在氧气中燃烧。' }
  },
  {
    id: 'rxn_cds_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Cd', count: 1 }, { itemId: 'elem_S', count: 1 } ],
    outputs: [ { itemId: 'comp_CdS', count: 1 } ],
    uiDisplay: { equation: 'Cd + S -> CdS', conditions: '加热', principle: '镉与硫化合生成硫化镉。' }
  },
  {
    id: 'rxn_wo3_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_W', count: 1 }, { itemId: 'elem_O', count: 3 } ],
    outputs: [ { itemId: 'comp_WO3', count: 1 } ],
    uiDisplay: { equation: 'W + 3O -> WO3', conditions: '高温', principle: '钨在高温下被氧化。' }
  },
  {
    id: 'rxn_cscl_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Cs', count: 1 }, { itemId: 'elem_Cl', count: 1 } ],
    outputs: [ { itemId: 'comp_CsCl', count: 1 } ],
    uiDisplay: { equation: 'Cs + Cl -> CsCl', conditions: '点燃', principle: '铯在氯气中剧烈燃烧。' }
  },
  {
    id: 'rxn_rbcl_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Rb', count: 1 }, { itemId: 'elem_Cl', count: 1 } ],
    outputs: [ { itemId: 'comp_RbCl', count: 1 } ],
    uiDisplay: { equation: 'Rb + Cl -> RbCl', conditions: '点燃', principle: '铷在氯气中剧烈燃烧。' }
  },
  {
    id: 'rxn_srcl2_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'elem_Sr', count: 1 }, { itemId: 'elem_Cl', count: 2 } ],
    outputs: [ { itemId: 'comp_SrCl2', count: 1 } ],
    uiDisplay: { equation: 'Sr + Cl2 -> SrCl2', conditions: '点燃', principle: '锶在氯气中燃烧。' }
  },
  {
    id: 'rxn_oleum_synthesis',
    reactionType: '化合反应',
    inputs: [ { itemId: 'comp_H2SO4', count: 1 }, { itemId: 'comp_SO3', count: 1 } ],
    outputs: [ { itemId: 'comp_H2S2O7', count: 1 } ],
    uiDisplay: { equation: 'H2SO4 + SO3 -> H2S2O7', conditions: '常温', principle: '浓硫酸吸收三氧化硫生成焦硫酸。' }
  },
];
