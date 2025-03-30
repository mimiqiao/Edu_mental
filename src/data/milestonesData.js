const milestonesData = [
  { 
    id: 1, 
    name: '0岁', 
    milestones: ['感官探索:视觉追踪', '基础运动:头部控制', '情绪表达:基本哭闹'],
    descriptions: {
      '感官探索:视觉追踪': '婴儿开始能够追踪移动的物体，这是视觉发展的第一步。家长可以用色彩鲜艳的玩具缓慢移动来刺激婴儿的视觉追踪能力。',
      '基础运动:头部控制': '婴儿逐渐能够控制头部运动，这是大运动发展的基础。家长可以在俯卧时间帮助婴儿练习抬头，增强颈部肌肉力量。',
      '情绪表达:基本哭闹': '婴儿通过哭闹表达基本需求，这是最早的沟通方式。家长应学会识别不同类型的哭声，及时响应但不过度干预，帮助婴儿建立安全感。'
    },
    tips: {
      '感官探索:视觉追踪': ['好奇心', '模式识别'],
      '基础运动:头部控制': ['好奇心', '依恋关系'],
      '情绪表达:基本哭闹': ['情绪调节能力', '依恋关系']
    }
  },
  { id: 2, name: '1岁', milestones: ['语言发展:简单发音', '社交互动:眼神交流', '精细动作:抓握物品', '情绪识别:基本表情'],
    descriptions: {
      '语言发展:简单发音': '婴儿开始发出简单的音节如"ba"、"ma"等，这是语言发展的初期表现。家长应多与婴儿对话，回应他们的发音，鼓励语言发展。',
      '社交互动:眼神交流': '婴儿开始能够与照顾者进行眼神交流，这是社交能力的重要基础。家长应多与婴儿进行面对面的互动，建立良好的亲子关系。',
      '精细动作:抓握物品': '婴儿开始能够有意识地抓握物品，这是精细动作发展的标志。家长可以提供适合抓握的安全玩具，鼓励婴儿练习。',
      '情绪识别:基本表情': '婴儿开始能够识别基本的面部表情，这是情绪理解的第一步。家长可以通过夸张的表情变化帮助婴儿学习识别不同情绪。'
    },
    tips: {
      '语言发展:简单发音': ['好奇心', '依恋关系'],
      '社交互动:眼神交流': ['依恋关系', '同伴关系'],
      '精细动作:抓握物品': ['好奇心', '模式识别'],
      '情绪识别:基本表情': ['情绪调节能力', '依恋关系']
    }
  },
  { id: 3, name: '2岁', milestones: ['语言发展:简单词汇', '社交互动:分享玩具', '情绪管理:短暂等待', '自我意识:认识自己'],
    descriptions: {
      '语言发展:简单词汇': '幼儿开始使用简单的词汇表达需求，如"要"、"不要"等。家长应鼓励孩子表达，并扩展他们的词汇量。',
      '社交互动:分享玩具': '幼儿开始学习与同伴分享玩具，这是社交技能的重要发展。家长应示范分享行为，并适时引导孩子分享。',
      '情绪管理:短暂等待': '幼儿开始能够短暂等待需求满足，这是情绪调节能力的发展。家长可以通过小游戏帮助孩子练习等待。',
      '自我意识:认识自己': '幼儿开始认识到自己是独立的个体，这是自我意识的发展。家长可以通过镜子游戏帮助孩子认识自己。'
    },
    tips: {
      '语言发展:简单词汇': ['好奇心', '模式识别'],
      '社交互动:分享玩具': ['同伴关系', '情绪调节能力'],
      '情绪管理:短暂等待': ['情绪调节能力', '依恋关系'],
      '自我意识:认识自己': ['好奇心', '依恋关系']
    }
  },
  { id: 4, name: '3岁', milestones: ['语言表达:简单句子', '社交游戏:平行游戏', '情绪调节:表达需求', '自理能力:简单穿衣', '认知发展:颜色识别'],
    descriptions: {
      '语言表达:简单句子': '幼儿能够使用2-3个词的简单句子表达想法，语言能力快速发展。家长应多与孩子对话，鼓励他们表达完整句子。',
      '社交游戏:平行游戏': '幼儿喜欢与同伴一起玩，但通常是各自玩各自的，这是社交游戏的初期形式。家长可以提供足够的游戏空间和玩具。',
      '情绪调节:表达需求': '幼儿开始能够用语言表达需求而不是哭闹，这是情绪调节的进步。家长应鼓励孩子用语言表达感受和需求。',
      '自理能力:简单穿衣': '幼儿开始尝试自己穿脱简单的衣物，自理能力发展。家长应提供容易穿脱的衣物，鼓励孩子自己尝试。',
      '认知发展:颜色识别': '幼儿能够识别和命名基本颜色，认知能力发展。家长可以通过颜色分类游戏帮助孩子学习颜色。'
    },
    tips: {
      '语言表达:简单句子': ['好奇心', '模式识别'],
      '社交游戏:平行游戏': ['同伴关系', '情绪调节能力'],
      '情绪调节:表达需求': ['情绪调节能力', '依恋关系'],
      '自理能力:简单穿衣': ['好奇心', '依恋关系'],
      '认知发展:颜色识别': ['好奇心', '模式识别']
    }
  },
  { id: 5, name: '4岁', milestones: ['社交技能:轮流游戏', '情绪理解:识别他人情绪', '语言能力:讲述简单故事', '创造力:自由绘画', '问题解决:简单冲突'],
    descriptions: {
      '社交技能:轮流游戏': '幼儿能够与同伴轮流玩游戏，社交技能进一步发展。家长可以通过棋盘游戏等帮助孩子练习轮流的概念。',
      '情绪理解:识别他人情绪': '幼儿开始能够识别他人的基本情绪，同理心发展。家长可以通过绘本故事讨论角色的情绪。',
      '语言能力:讲述简单故事': '幼儿能够讲述简单的故事或经历，语言表达能力增强。家长应认真倾听孩子的讲述，并适当提问。',
      '创造力:自由绘画': '幼儿开始有意识地创作绘画作品，创造力发展。家长应提供丰富的绘画材料，鼓励孩子自由表达。',
      '问题解决:简单冲突': '幼儿开始尝试用语言解决与同伴的简单冲突。家长可以引导孩子用语言表达问题，并共同寻找解决方案。'
    },
    tips: {
      '社交技能:轮流游戏': ['同伴关系', '情绪调节能力'],
      '情绪理解:识别他人情绪': ['情绪调节能力', '依恋关系'],
      '语言能力:讲述简单故事': ['好奇心', '模式识别'],
      '创造力:自由绘画': ['好奇心', '模式识别'],
      '问题解决:简单冲突': ['情绪调节能力', '同伴关系']
    }
  },
  { id: 6, name: '5岁', milestones: ['社交合作:团队游戏', '情绪调节:延迟满足', '认知能力:数数到20', '语言表达:完整句子', '创造力:角色扮演', '自理能力:独立吃饭'],
    descriptions: {
      '社交合作:团队游戏': '幼儿能够参与简单的团队游戏，合作能力发展。家长可以组织小型的团队游戏活动，帮助孩子学习合作。',
      '情绪调节:延迟满足': '幼儿能够等待更长时间满足需求，情绪调节能力提高。家长可以通过渐进式等待练习帮助孩子发展这项能力。',
      '认知能力:数数到20': '幼儿能够数数到20左右，数学能力发展。家长可以通过日常生活中的计数活动帮助孩子练习。',
      '语言表达:完整句子': '幼儿能够使用完整的句子表达想法，语言能力成熟。家长应继续鼓励孩子表达清晰完整的想法。',
      '创造力:角色扮演': '幼儿喜欢进行角色扮演游戏，想象力丰富。家长可以提供各种道具，支持孩子的角色扮演游戏。',
      '自理能力:独立吃饭': '幼儿能够独立完成吃饭过程，自理能力增强。家长应鼓励孩子自己吃饭，培养独立性。'
    },
    tips: {
      '社交合作:团队游戏': ['同伴关系', '情绪调节能力'],
      '情绪调节:延迟满足': ['情绪调节能力', '依恋关系'],
      '认知能力:数数到20': ['好奇心', '模式识别'],
      '语言表达:完整句子': ['好奇心', '模式识别'],
      '创造力:角色扮演': ['好奇心', '同伴关系'],
      '自理能力:独立吃饭': ['好奇心', '依恋关系']
    }
  },
  { id: 7, name: '6岁', milestones: ['学习能力:专注15分钟', '社交技能:建立友谊', '情绪管理:应对挫折', '认知发展:简单加减', '创造力:故事创作', '责任感:简单家务'],
    descriptions: {
      '学习能力:专注15分钟': '儿童能够专注于一项任务约15分钟，专注力发展。家长可以通过计时器帮助孩子练习专注完成任务。',
      '社交技能:建立友谊': '儿童开始建立稳定的友谊关系，社交能力发展。家长应尊重孩子的友谊选择，并提供社交机会。',
      '情绪管理:应对挫折': '儿童开始能够用适当的方式应对小挫折，情绪管理能力提高。家长可以在孩子遇到挫折时引导他们表达感受并寻找解决方案。',
      '认知发展:简单加减': '儿童能够进行简单的加减运算，数学能力发展。家长可以通过实物操作帮助孩子理解加减概念。',
      '创造力:故事创作': '儿童能够创作简单的故事，创造力发展。家长可以鼓励孩子讲故事并记录下来。',
      '责任感:简单家务': '儿童能够完成简单的家务任务，责任感培养。家长可以分配适合年龄的家务，帮助孩子建立责任感。'
    },
    tips: {
      '学习能力:专注15分钟': ['好奇心', '模式识别'],
      '社交技能:建立友谊': ['同伴关系', '情绪调节能力'],
      '情绪管理:应对挫折': ['情绪调节能力', '依恋关系'],
      '认知发展:简单加减': ['好奇心', '模式识别'],
      '创造力:故事创作': ['好奇心', '模式识别'],
      '责任感:简单家务': ['好奇心', '依恋关系']
    }
  },
  { id: 8, name: '7岁', milestones: ['学习策略:记忆方法', '社交理解:同理心发展', '情绪表达:复杂情感', '认知能力:时间概念', '问题解决:多步问题', '独立性:自我管理'],
    descriptions: {
      '学习策略:记忆方法': '儿童开始使用简单的记忆策略如重复、分类等，学习能力提高。家长可以教孩子使用记忆技巧帮助学习。',
      '社交理解:同理心发展': '儿童能够更好地理解他人的感受和观点，同理心增强。家长可以通过讨论不同情境中人们的感受来培养同理心。',
      '情绪表达:复杂情感': '儿童能够表达更复杂的情感如骄傲、羞愧等，情绪表达能力发展。家长应鼓励孩子表达各种情感并给予适当回应。',
      '认知能力:时间概念': '儿童对时间概念如小时、分钟等有更清晰的理解。家长可以通过日常活动帮助孩子理解时间概念。',
      '问题解决:多步问题': '儿童能够解决需要多个步骤的问题，思维能力发展。家长可以引导孩子将复杂问题分解为小步骤解决。',
      '独立性:自我管理': '儿童开始能够管理自己的日常事务如整理书包等，独立性增强。家长应逐步放手让孩子自己管理事务。'
    },
    tips: {
      '学习策略:记忆方法': ['好奇心', '模式识别'],
      '社交理解:同理心发展': ['同伴关系', '情绪调节能力'],
      '情绪表达:复杂情感': ['情绪调节能力', '依恋关系'],
      '认知能力:时间概念': ['好奇心', '模式识别'],
      '问题解决:多步问题': ['好奇心', '模式识别'],
      '独立性:自我管理': ['好奇心', '依恋关系']
    }
  },
  { id: 9, name: '8岁', milestones: ['学习能力:自主学习', '社交关系:群体融入', '情绪调节:自我安慰', '认知发展:逻辑思维', '创造力:项目设计', '责任感:任务完成'],
    descriptions: {
      '学习能力:自主学习': '儿童能够独立完成一些学习任务，自主学习能力发展。家长可以提供适当的学习资源和支持，鼓励孩子自主学习。',
      '社交关系:群体融入': '儿童能够更好地融入群体活动，社交能力发展。家长可以鼓励孩子参与集体活动，培养社交技能。',
      '情绪调节:自我安慰': '儿童能够使用一些策略自我安慰，情绪调节能力提高。家长可以教孩子使用深呼吸等技巧调节情绪。',
      '认知发展:逻辑思维': '儿童的逻辑思维能力明显发展，能够进行更复杂的思考。家长可以通过逻辑游戏和讨论培养孩子的思维能力。',
      '创造力:项目设计': '儿童能够设计和完成小型项目，创造力发展。家长可以提供材料和空间支持孩子的创意项目。',
      '责任感:任务完成': '儿童能够负责任地完成分配的任务，责任感增强。家长可以给予孩子适当的责任并肯定他们的努力。'
    },
    tips: {
      '学习能力:自主学习': ['好奇心', '模式识别'],
      '社交关系:群体融入': ['同伴关系', '情绪调节能力'],
      '情绪调节:自我安慰': ['情绪调节能力', '依恋关系'],
      '认知发展:逻辑思维': ['好奇心', '模式识别'],
      '创造力:项目设计': ['好奇心', '模式识别'],
      '责任感:任务完成': ['好奇心', '依恋关系']
    }
  },
  { id: 10, name: '9岁', milestones: ['学习动机:内在驱动', '社交技能:冲突解决', '情绪管理:压力应对', '认知能力:抽象思维', '创造力:创新方案', '独立性:时间管理', '道德发展:是非判断'],
    descriptions: {
      '学习动机:内在驱动': '儿童开始因为兴趣和成就感而学习，内在动机发展。家长应关注孩子的兴趣点，鼓励他们探索和学习。',
      '社交技能:冲突解决': '儿童能够用更成熟的方式解决与同伴的冲突，社交技能提高。家长可以教孩子使用"我信息"等沟通技巧解决冲突。',
      '情绪管理:压力应对': '儿童开始发展应对压力的策略，情绪管理能力增强。家长可以教孩子识别压力信号并使用适当方式应对。',
      '认知能力:抽象思维': '儿童的抽象思维能力发展，能够理解更复杂的概念。家长可以通过讨论抽象概念帮助孩子发展这一能力。',
      '创造力:创新方案': '儿童能够提出创新的解决方案，创造力发展。家长应鼓励孩子思考不同的解决方案并尝试实施。',
      '独立性:时间管理': '儿童开始能够管理自己的时间，独立性增强。家长可以帮助孩子制定时间表并练习时间管理。',
      '道德发展:是非判断': '儿童的道德判断能力发展，能够理解更复杂的道德问题。家长可以通过讨论日常生活中的道德困境帮助孩子发展判断力。'
    },
    tips: {
      '学习动机:内在驱动': ['好奇心', '模式识别'],
      '社交技能:冲突解决': ['同伴关系', '情绪调节能力'],
      '情绪管理:压力应对': ['情绪调节能力', '依恋关系'],
      '认知能力:抽象思维': ['好奇心', '模式识别'],
      '创造力:创新方案': ['好奇心', '模式识别'],
      '独立性:时间管理': ['好奇心', '依恋关系'],
      '道德发展:是非判断': ['好奇心', '依恋关系']
    }
  },
  { id: 11, name: '10岁', milestones: ['学习策略:自我评估', '社交理解:群体动态', '情绪表达:复杂情感', '认知发展:批判思维', '问题解决:多角度思考', '责任感:团队贡献', '自我认知:优势识别'],
    descriptions: {
      '学习策略:自我评估': '儿童能够评估自己的学习过程和成果，元认知能力发展。家长可以教孩子使用反思日志等方式进行自我评估。',
      '社交理解:群体动态': '儿童对群体中的角色和关系有更深入的理解，社交认知发展。家长可以通过讨论群体活动帮助孩子理解社交动态。',
      '情绪表达:复杂情感': '儿童能够表达更复杂的情感如矛盾、困惑等，情绪表达能力提高。家长应创造安全的环境让孩子表达各种情感。',
      '认知发展:批判思维': '儿童开始发展批判性思维能力，能够质疑和分析信息。家长可以鼓励孩子提出问题并寻找证据支持观点。',
      '问题解决:多角度思考': '儿童能够从多个角度思考问题，思维能力发展。家长可以引导孩子考虑问题的不同方面和可能的解决方案。',
      '责任感:团队贡献': '儿童理解自己在团队中的责任，愿意为团队做贡献。家长可以鼓励孩子参与团队活动并承担适当责任。',
      '自我认知:优势识别': '儿童开始识别自己的优势和不足，自我认知能力发展。家长可以帮助孩子发现并发展他们的优势领域。'
    },
    tips: {
      '学习策略:自我评估': ['好奇心', '模式识别'],
      '社交理解:群体动态': ['同伴关系', '情绪调节能力'],
      '情绪表达:复杂情感': ['情绪调节能力', '依恋关系'],
      '认知发展:批判思维': ['好奇心', '模式识别'],
      '问题解决:多角度思考': ['好奇心', '模式识别'],
      '责任感:团队贡献': ['同伴关系', '依恋关系'],
      '自我认知:优势识别': ['好奇心', '依恋关系']
    }
  },
  { id: 12, name: '11岁', milestones: ['学习能力:深度思考', '社交关系:亲密友谊', '情绪调节:自我激励', '认知发展:系统思维', '创造力:原创作品', '独立性:目标设定', '道德发展:价值观形成', '自我管理:习惯养成'],
    descriptions: {
      '学习能力:深度思考': '儿童能够进行更深入的思考和研究，学习能力提高。家长可以提供丰富的学习资源和支持孩子的深入探索。',
      '社交关系:亲密友谊': '儿童发展更亲密的友谊关系，社交能力发展。家长应尊重孩子的友谊选择并提供适当的指导。',
      '情绪调节:自我激励': '儿童能够使用内在动机激励自己，情绪调节能力增强。家长可以帮助孩子发现内在动机并设定个人目标。',
      '认知发展:系统思维': '儿童开始发展系统思维能力，能够理解事物之间的复杂关系。家长可以通过讨论系统如生态系统等帮助孩子发展这一能力。',
      '创造力:原创作品': '儿童能够创作更具原创性的作品，创造力发展。家长应提供各种创作材料和机会支持孩子的创意表达。',
      '独立性:目标设定': '儿童能够设定并追求个人目标，独立性增强。家长可以帮助孩子制定切实可行的目标并支持他们实现。',
      '道德发展:价值观形成': '儿童的个人价值观开始形成，道德判断能力发展。家长可以通过讨论日常生活中的道德选择帮助孩子形成积极的价值观。',
      '自我管理:习惯养成': '儿童能够形成稳定的日常习惯，自我管理能力发展。家长可以帮助孩子建立规律的作息和良好的习惯。'
    },
    tips: {
      '学习能力:深度思考': ['好奇心', '模式识别'],
      '社交关系:亲密友谊': ['同伴关系', '情绪调节能力'],
      '情绪调节:自我激励': ['情绪调节能力', '依恋关系'],
      '认知发展:系统思维': ['好奇心', '模式识别'],
      '创造力:原创作品': ['好奇心', '模式识别'],
      '独立性:目标设定': ['好奇心', '依恋关系'],
      '道德发展:价值观形成': ['好奇心', '依恋关系'],
      '自我管理:习惯养成': ['好奇心', '依恋关系']
    }
  },
  { id: 13, name: '12岁', milestones: ['认知能力:抽象推理', '社交技能:群体领导', '情绪管理:压力应对', '学习策略:自主学习', '创造力:复杂项目', '独立性:决策能力', '道德发展:伦理思考', '自我认知:身份探索'],
    descriptions: {
      '认知能力:抽象推理': '青少年能够进行更复杂的抽象推理和假设性思考。家长可以通过讨论抽象概念和哲学问题帮助发展这一能力。',
      '社交技能:群体领导': '青少年开始展现领导能力，能够在群体中担任组织角色。家长可以鼓励孩子参与团队活动并承担领导责任。',
      '情绪管理:压力应对': '青少年面临更多压力，需要发展有效的应对策略。家长可以教孩子识别压力信号并使用健康方式应对。',
      '学习策略:自主学习': '青少年能够独立规划和管理学习过程。家长应提供适当的学习资源和支持，同时给予自主空间。',
      '创造力:复杂项目': '青少年能够设计和完成更复杂的创意项目。家长可以提供材料和空间支持孩子的创意表达。',
      '独立性:决策能力': '青少年开始做出更独立的生活决策。家长可以在安全范围内给予决策机会并提供指导。',
      '道德发展:伦理思考': '青少年能够思考更复杂的道德和伦理问题。家长可以通过讨论现实生活中的道德困境帮助发展判断力。',
      '自我认知:身份探索': '青少年积极探索个人身份和价值观。家长应提供安全的环境支持这一探索过程。'
    },
    tips: {
      '认知能力:抽象推理': ['好奇心', '模式识别'],
      '社交技能:群体领导': ['同伴关系', '情绪调节能力'],
      '情绪管理:压力应对': ['情绪调节能力', '依恋关系'],
      '学习策略:自主学习': ['好奇心', '模式识别'],
      '创造力:复杂项目': ['好奇心', '模式识别'],
      '独立性:决策能力': ['好奇心', '依恋关系'],
      '道德发展:伦理思考': ['好奇心', '依恋关系'],
      '自我认知:身份探索': ['好奇心', '依恋关系']
    }
  }];

export default milestonesData;