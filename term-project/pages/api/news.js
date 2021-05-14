// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    code: 200,
    data: [
      {
        index: 0,
        question: "如何优雅地完成前端课程大作业？",
        author: "许慎林",
        authorAvatar: "/avatars/author1.png",
        content: "在DDL的前一天新建文件夹就完事了",
        agreeCnt: 1000,
        commentsCnt: 45,
        type: "News",
        info: "西18-308南桐",
        secondary: {
          richContent: [
            {
              type: "b",
              content: "在DDL的前一天新建文件夹就完事了",
            },
            {
              type: "p",
              content: "我其实还好",
            },
            {
              type: "img",
              content:
                "https://pic1.zhimg.com/80/v2-00c4b440e1d878632ce506118e8f1573_1440w.jpg?source=1940ef5c",
            },
          ],
          editTime: "05-14",
          commentUser1: "赵子谦",
          commentUser1Avatar: "/avatars/comment1.png",
          commentTime1: "10 分钟前",
          comment1: "太对了",
          commentUser2: "赵子谦",
          commentUser2Avatar: "/avatars/comment1.png",
          commentTime2: "11 分钟前",
          comment2: "说得好",
        },
      },
      {
        index: 1,
        question: "推荐一本编程算法书籍，你推荐哪本？",
        author: "编程指北",
        authorAvatar:
          "https://pic2.zhimg.com/v2-3e1a647eea07fb3baaaf17ece120c054_xs.jpg?source=1940ef5c",
        content:
          "不要再盲目推荐《算法导论》了，这本书经典是经典，但是不一定适合不同阶段的同学。",
        agreeCnt: 186,
        commentsCnt: 2,
        type: "OnePic",
        imgUrl:
          "https://pic1.zhimg.com/50/v2-75fa130e56133d39dd6db9b94c0f04e9_400x224.jpg",
        info: "腾讯科技（深圳）有限公司 后台开发工程师",
        secondary: {
          richContent: [
            {
              type: "p",
              content:
                "不要再盲目推荐《算法导论》了，这本书经典是经典，但是不一定适合不同阶段的同学。",
            },
            {
              type: "p",
              content:
                "学习算法，切记不要一上来就开始啃《算法导论》，毕竟这本书并不适合新手学习，如果你之前的算法基础比较薄弱，只会一直陷在“拿起来又放下”的循环里。",
            },
            {
              type: "p",
              content:
                "鉴于此，我针对不同层次、不同语言的程序员，我分别选择了不同的书。",
            },
            {
              type: "p",
              content:
                "你可以看看自己究竟处于哪个层次，来对症下药。希望每位想在数据结构与算法上得到提升的同学，都能找到适合自己的学习资料，都能在现有水平上有所提高。",
            },
            {
              type: "img",
              content:
                "https://pic1.zhimg.com/50/v2-75fa130e56133d39dd6db9b94c0f04e9_400x224.jpg",
            },
            {
              type: "p",
              content:
                "可以怎么入门呢？建议还是看书+实战，实战当然也不是说要去肝ACM或者是topcoder什么的，基本上Leetcode 刷刷题也就够了。",
            },
          ],
          editTime: "03-19",
          commentUser1: "杨欣",
          commentUser1Avatar:
            "https://pic2.zhimg.com/0e6dd81202eed89ec7ee858299bbe1e5_s.jpg?source=06d4cd63",
          commentTime1: "4-28",
          comment1: "赞一个",
          commentUser2: "轩",
          commentUser2Avatar:
            "https://pic4.zhimg.com/74efbcf0d2d48aa323dc41812707bd0c_s.jpg?source=06d4cd63",
          commentTime2: "3-31",
          comment2: "算法太难了",
        },
      },
      {
        index: 2,
        question: "如何看待游戏《原神》新角色「优菈」？",
        author: "某人",
        authorAvatar:
          "https://pic4.zhimg.com/v2-e72becd01b95460f64267c168f93c229_xs.jpg?source=1940ef5c",
        content:
          "啊这，刚为帝君氪了第一个648，到优菈可能有一个小保底，现在攒了48发了，应该可以赌一把。",
        agreeCnt: 505,
        commentsCnt: 106,
        type: "OnePic",
        imgUrl:
          "https://pic4.zhimg.com/80/v2-a9b56723f0f3d54a935ce3eca25bae04_1440w.jpg?source=1940ef5c",
        info: "每天都无比快乐",
        secondary: {
          richContent: [
            {
              type: "p",
              content:
                "啊这，刚为帝君氪了第一个648，到优菈可能有一个小保底，现在攒了48发了，应该可以赌一把。",
            },
            {
              type: "p",
              content:
                "优菈这个卡池的位置实在是尴尬，前面有帝君，后面有可莉，讲真的这两个人物刻画的无比鲜活，非常惹人喜爱，对于我来说，两个都很想要 ，但是现在看来不太现实了。",
            },
            {
              type: "p",
              content:
                "现在的打算是小保底给优菈，如果歪了估计大保底的时候正好是枫源万叶，不过已经有温迪了，就很痛苦，希望不要歪，然后多攒点原石看看能不能给可莉一发保底。反正现在已经在积极准备彩礼了",
            },
            {
              type: "p",
              content:
                "优菈这个人物也是充满魅力的，自称是罪人的后裔，但是嘴上又说要复仇，在pv中充分表现了傲娇的气质，不得不说，微醺之后向空抱怨自己受了委屈的优菈真的是可爱极了，能够很好的调动男生的保护欲，但又因为优菈本身的优秀（和强势？），使得旅行者倾听就可以解决优菈的问题。印象最深刻的就是猎鹿人和蒙德百货都不卖给小优菈东西？如果这次小保底不歪或者日后复刻抽到，我立刻换上优菈把这两家店清空。",
            },
            {
              type: "p",
              content:
                "对于优菈角色特点，其实很有现实意义，很难刻画的鲜活灵动富有生气，如果米哈游真的做到刻画了一个三观正常且富有魅力的优菈形象，那只能说明这家游戏公司有极强的文学逻辑和功底，这个游戏是真正意义的制备精良。",
            },
            {
              type: "p",
              content:
                "很典型的公子的人物刻画的就不是非常成功，导致公子的三观扭曲，凡是与公子有关的任务也会显得旅行者三观扭曲，令人物魅力大打折扣，反正我实在是不太喜欢。",
            },
            {
              type: "p",
              content:
                "我当时已经想过了，如果是一个换皮手游刻画优菈人物形象的话，可能真的会出一个非常可爱傲娇的小萝莉，经常用撒娇的方式复仇，但每次“复仇”都会产生搞笑的结尾。不是说这种人物不可爱，而是过于幼稚不切实际，让人感觉这个游戏并不精良且三观奇特。罪人的后代应该如何看待自己？如何面对周围人的厌恶？先祖的对于国家罪行如何偿还？是不是可以鞠躬，受害者too，不承认三步走？是不是可以像谏山创一样动用巨额物理数字核平蒙德？",
            },
            {
              type: "p",
              content:
                "幸好是没有，幸好米哈游在pv里让我看到一个相对成熟的西风骑士团骑兵队长。目前已知的优菈自称罪人，被众人排挤，口中说着复仇但在蒙德城外保卫着蒙德，我总感觉优菈口中所谓的“复仇”是对周围冷落的抗争，是心里委屈的刻意表现，即使是这样，优菈也希望能够赎还祖先的罪业，去保卫蒙德。啊，这个女人竟然该死的甜美。无比期待优菈的语音和人物故事。",
            },
            {
              type: "p",
              content:
                "当前原神所出的所有人物（除了公子），都充满人性的魅力，且都有着良好且正确的三观，让人希望与之深交。当前优菈未出，仿佛已入芝兰之室，妙呀。",
            },
            {
              type: "p",
              content:
                "文笔不好，想到哪写到哪，有些冗长但经得起推敲，最后还是希望原神保持现在的节奏，只要质量跟得上，出的再慢一点也是很好的，米哈游希望通过原神讲好一个故事 ，宣传中国优秀价值观的野心已经显现，自来水必然是支持的。",
            },
            {
              type: "p",
              content:
                "策划如果你看到这里了求求千万不要让优菈歪掉，学生党是真的氪不起。",
            },
            {
              type: "p",
              content: "最后贴几张米游社好玩的图片",
            },
            {
              type: "img",
              content:
                "https://pic2.zhimg.com/80/v2-a34800a90da8385d855358681a01b8ac_1440w.jpg?source=1940ef5c",
            },
            {
              type: "img",
              content:
                "https://pic4.zhimg.com/80/v2-a9b56723f0f3d54a935ce3eca25bae04_1440w.jpg?source=1940ef5c",
            },
            {
              type: "img",
              content:
                "https://pic1.zhimg.com/80/v2-5aa01f045bf743d6a0ec49c46c9efc4a_1440w.jpg?source=1940ef5c",
            },
            {
              type: "img",
              content:
                "https://pic3.zhimg.com/80/v2-1b602655963c20c71d887086f1a65bc7_1440w.jpg?source=1940ef5c",
            },
            {
              type: "img",
              content:
                "https://pic1.zhimg.com/80/v2-e317a23424a4ffdbfdd0a9e6bc0029a7_1440w.jpg?source=1940ef5c",
            },
          ],
          editTime: "05-11",
          commentUser1: "云上月光苏清许",
          commentUser1Avatar:
            "https://pic2.zhimg.com/v2-1a769417e54a314709120a482ec9fb7e_s.jpg?source=06d4cd63",
          commentTime1: "5-11",
          comment1: "图不错[大笑]",
          commentUser2: "青萍末",
          commentUser2Avatar:
            "https://pic1.zhimg.com/v2-08be9cc7c48762e9369cb27be35c86c7_s.jpg?source=06d4cd63",
          commentTime2: "5-11",
          comment2: "吊图一堆，收下了，希望你不要不识抬举[doge][doge]",
        },
      },
      {
        index: 3,
        question:
          "强化学习（RL）是否是人工智能的关键之处，能够给人工智能带来质变？",
        author: "贾扬清",
        authorAvatar: "https://pic1.zhimg.com/332f2d9e4_xs.jpg?source=1940ef5c",
        content:
          "来泼下冷水，只要听见说“xxxx方法是否是人工智能的关键”，最可能的回答就是，不是。",
        agreeCnt: 975,
        commentsCnt: 55,
        type: "News",
        info: "机器学习话题下的优秀答主",
        secondary: {
          richContent: [
            {
              type: "p",
              content:
                "来泼下冷水，只要听见说“xxxx方法是否是人工智能的关键”，最可能的回答就是，",
            },
            {
              type: "b",
              content: "不是。",
            },
            {
              type: "p",
              content:
                "请不要媒体说啥就是啥，人工智能是一个大集合，往往是各种方法的融会贯通才能达到最终的效果。",
            },
            {
              type: "p",
              content:
                "举个例子，伯克利人工智能方向的博士生，入学一年以后资格考试要考这几个内容：",
            },
            {
              type: "br",
              content: "- 强化学习和Robotics",
            },
            {
              type: "br",
              content: "- 统计和概率图模型",
            },
            {
              type: "br",
              content: "- 计算机视觉和图像处理",
            },
            {
              type: "br",
              content: "- 核方法及其理论",
            },
            {
              type: "br",
              content:
                "- 人工智能：一种现代方法中的其他方面（包括搜索，CSP，逻辑，planning，等等）",
            },
            {
              type: "p",
              content: "",
            },
            {
              type: "p",
              content:
                "一个小时，两个教授随便出题，要求口试解答通过。挂两次的话，嘿嘿。（虽然真挂两次的不多）",
            },
            {
              type: "p",
              content:
                "如果真的想做人工智能，建议都了解一下，不是说都要搞懂搞透，但是至少要达到开会的时候和人在poster前面谈笑风生不出错的程度吧。",
            },
            {
              type: "p",
              content:
                "这些方向都渊源已久了，虽然你可能今天刚从新闻上看到强化学习，但是Sutton&Barto那本讲RL得书，已经是近20年以前的事情了，Q-learning那个时候就有。神经网络的一些基础理论，往前可以追溯到Hubel&Wiesel六七十年代对于视觉神经元的研究甚至更早，他们的研究还获得了1981年的诺贝尔奖。科研上的事情都不是忽然冒一个大新闻，都是无数科研工作者多年来不断推进的结果。",
            },
            {
              type: "p",
              content: "如果就想看个新闻看个热闹。。。那请当我没说。",
            },
          ],
          editTime: "2016-03-25",
          commentUser1: "凡心",
          commentUser1Avatar:
            "https://pic4.zhimg.com/a73be6f94_s.jpg?source=06d4cd63",
          commentTime1: "2016-03-25",
          comment1: "都懒得理他们",
          commentUser2: "请容我插一下嘴",
          commentUser2Avatar:
            "https://pic4.zhimg.com/0d734d285_s.jpg?source=06d4cd63",
          commentTime2: "2016-03-25",
          comment2:
            "没人评论? 不过我确实对藤校博士资格考试的内容很感兴趣诶，这个可以给很多自学机器学习的爱好者作为参考，答主还能再提供些相关信息吗，多谢了!",
        },
      },
      {
        index: 4,
        question:
          "马斯克发文称特斯拉暂停使用比特币支付，会对比特币带来什么影响？",
        author: "性格如此",
        authorAvatar:
          "https://pic2.zhimg.com/v2-cceff55bd211b4aec2aeae8781e4c189_xs.jpg?source=1940ef5c",
        content:
          "我们来看一下这波下跌的引起原因是什么吧，很简单，特斯拉马斯克之前买过BTC，买完BTC的时候，马斯克说特斯拉可以接受BTC付款，BTC应声大涨，如今马斯克说拒绝BTC支付，BTC应声大跌，马斯克之前买的BTC在这波大跌之前应该已经清空了，如果再以更低的价格再买入，过两天再放出烟雾弹消息，这种情况，放证券市场里够判一辈子的了，所以大家不要神话马斯克这个人，这个人做的事情很没有底线，币圈只不过是他玩弄的资本。",
        agreeCnt: 5571,
        commentsCnt: 506,
        type: "News",
        info: "",
        secondary: {
          richContent: [
            {
              type: "p",
              content:
                "我们来看一下这波下跌的引起原因是什么吧，很简单，特斯拉马斯克之前买过BTC，买完BTC的时候，马斯克说特斯拉可以接受BTC付款，BTC应声大涨，如今马斯克说拒绝BTC支付，BTC应声大跌，马斯克之前买的BTC在这波大跌之前应该已经清空了，如果再以更低的价格再买入，过两天再放出烟雾弹消息，这种情况，放证券市场里够判一辈子的了，所以大家不要神话马斯克这个人，这个人做的事情很没有底线，币圈只不过是他玩弄的资本。",
            },
            {
              type: "p",
              content:
                "就这很多人鼓吹去中心话技术如何如何牛逼、区块链如何如何牛逼，聪明人都知道这是资本割韭菜的最佳方法，甚至不用交税，但是有很多聪明人明知道是什么也会美名其曰说它的好，为什么，靠币圈吃饭，喝汤，我也是圈里人，既得利益者，币圈没什么道德法律底线，这是一个强者恒强的世界",
            },
            {
              type: "p",
              content:
                "项目方、交易所、大V、都是这个圈子的配套产业链，只有韭菜是真韭菜",
            },
          ],
          editTime: "昨天 10:16",
          commentUser1: "jiangGL",
          commentUser1Avatar:
            "https://pic1.zhimg.com/179e6358367a39e6f20c303c6dd81210_s.jpg?source=06d4cd63",
          commentTime1: "昨天 11:01",
          comment1: "这不是证券市场，这是黑市，你奈何不了他[飙泪笑]",
          commentUser2: "神秘博士DW",
          commentUser2Avatar:
            "https://pic2.zhimg.com/v2-84d9417c7e481bf3df68ceb426761b5d_s.jpg?source=06d4cd63",
          commentTime2: "昨天 11:29",
          comment2: "什么理想，信仰，就tm为了钱",
        },
      },
      {
        index: 5,
        question: "2021 季中赛对抗赛揭幕战 DK vs RNG 你更看好谁？",
        author: "清人风",
        authorAvatar:
          "https://pic4.zhimg.com/v2-5aab0f620e7c9b71d3c3e8976a2f5031_xs.jpg?source=1940ef5c",
        content: "DK没想象中那么强，RNG也没想象中那么弱。",
        agreeCnt: 211,
        commentsCnt: 51,
        type: "OnePic",
        imgUrl:
          "https://pic3.zhimg.com/50/v2-7b30777a3af4aa357659bd4085309f98_400x224.jpg",
        info: "华南师范大学 行政管理硕士在读",
        secondary: {
          richContent: [
            {
              type: "h",
              content: "DK没想象中那么强，RNG也没想象中那么弱。",
            },
            {
              type: "p",
              content: "因此我觉得RNG是有机会战胜DK的。",
            },
            {
              type: "p",
              content: "先来分析一下双方的弱点和强点。",
            },
            {
              type: "h",
              content: "一、DK究竟怎么了？",
            },
            {
              type: "p",
              content:
                "为什么打得跌跌撞撞？真的是汉子哥的原因吗？多多少少肯定有的，现在全世界所有战队都巴不得自家有一个牛宝，但汉子哥这种老将的好处就是即插即用。",
            },
            {
              type: "p",
              content:
                "英雄池足够深厚，虽然打不出牛宝和the shy那种级别的压制，但能掏出纳尔和杰斯这种英雄，并且能打出一定的对线压制能力，虽然上限不高，但下限是能兜底的，别忘了汉子哥可是LCK决赛的FMVP啊！",
            },
            {
              type: "p",
              content:
                "先说canyon，canyon对DK的重要加持相信不需要我多说了。在MSI开始前，如果在所有选手中让我选一个最忌讳的选手，我会选canyon。",
            },
            {
              type: "p",
              content:
                "canyon已经连续两年多项数据在LCK霸榜了，今年的状况是：KDA第三、分均经济第一、分均补刀第二、分均输出第一、分均承伤第一。",
            },

            {
              type: "p",
              content:
                "这些数据说明了，他还是那个超强的入侵刷野妖魔，看看LCK春季赛的英雄池就知道了：",
            },
            {
              type: "img",
              content:
                "https://pic2.zhimg.com/80/v2-4c26a112fe4d0a2a7a3495bf81791412_1440w.jpg?source=1940ef5c",
            },
            {
              type: "b",
              content: "但这次MSI很明显，canyon很不适应。",
            },
            {
              type: "p",
              content: "最火热的两大打野相信大家都知道了：兰博+莫甘娜。",
            },
            {
              type: "p",
              content:
                "这两个英雄，canyon的刷野思路和速度依旧是顶尖的，但操作拉胯，那兰博团战的大招释放得让我满脑袋问号，这真的是那个超强野王canyon？",
            },
            {
              type: "p",
              content:
                "如果说canyon是因为版本丧失了以往的战斗力，那Beryl简直是在犯罪。",
            },
            {
              type: "p",
              content: "容我问问各位：",
            },
            {
              type: "b",
              content: "原神真的有那么好玩吗？",
            },
            {
              type: "p",
              content:
                "我记得当年也有个天才少年，后来玩天刀玩出事了，现在来个玩原神的？",
            },
            {
              type: "p",
              content:
                "很喜欢弔人姿态的一句话：Beryl这个人不是英雄池，他是Tm的游戏池。",
            },
            {
              type: "p",
              content:
                "去年Beryl那个让苏宁痛不欲生的潘森至今让我难忘，去年我和朋友们多次说：我觉得FMVP是可以给Beryl的，他的游走才是让DWG起势的关键原因。",
            },
            {
              type: "p",
              content:
                "现在的Beryl不说和去年总决赛比了，连LCK春季赛的状态都没了，只能感慨或许真的不是所有人都能保持着对冠军的执念，或许一夺冠那刻冲击的心就会冷却下来吧，所以那么多年了，英雄联盟都没出一个三连冠，也不是所有人都是faker，哪怕历史长如NBA，近些年来乔丹科比詹姆斯也只有一个，我不希望看到Beryl沉沦下去变成下一个宁王。",
            },
            {
              type: "p",
              content:
                "好了，扯远了，canyon和Beryl是DK重要的节奏发动机，一旦两人熄火，DK的节奏就会很差，这是我个人觉得他们本次MSI最大的问题。",
            },
            {
              type: "p",
              content: "",
            },
            {
              type: "h",
              content: "二、RNG的胜点在哪？",
            },
            {
              type: "p",
              content: "前面提及到DK最大的问题在野辅，那么RNG最强的点在哪？",
            },
            {
              type: "p",
              content: "巧了，我觉得就是野辅。",
            },
            {
              type: "p",
              content:
                "先看看Wei，当时有人在我评论区问了这样一个问题：Wei现在的KDA多少了啊，很高了吧？",
            },
            {
              type: "img",
              content:
                "https://pic4.zhimg.com/80/v2-51bdc5e074bbfd8e3febbb7b32d3d179_1440w.jpg?source=1940ef5c",
            },
            {
              type: "p",
              content: "总计是：43/15/82，真的离谱。",
            },
            {
              type: "p",
              content:
                "相信看过RNG比赛的朋友都知道，Wei本次MSI的状态有多好了，基本不会犯罪，最热门的两个打野，莫甘娜和兰博的熟练度很高，起码比canyon高，再加上乌迪尔、人马、奥拉夫、狗熊等等也都在他的英雄池范围内，所以我并不担心Wei。",
            },
            {
              type: "p",
              content:
                "再说说小明吧，听过RNG麦克风的朋友都在知道，虽然RNG本次小组赛打得有点浪，打PGG那一把还差点出大事了，但后续都能给他们打回来，就是有小明在语音里指挥，强调要再谨慎一些，我记得以前RNG放出视频的时候，小明说了这样一段话：",
            },
            {
              type: "blockquote",
              content:
                "我觉得我们中、上、野，都是LPL顶尖的了，然后我希望我以后能成为一名好的指挥，但是我……怕你们都不在了。",
            },
            {
              type: "img",
              content:
                "https://pic4.zhimg.com/80/v2-e9a890753f523181c8dff9cad39a2d40_1440w.jpg?source=1940ef5c",
            },
            {
              type: "p",
              content: "哎……一语中的。",
            },
            {
              type: "p",
              content: "他真的成为了一名好的指挥，身边却只剩下了小虎。",
            },
            {
              type: "p",
              content:
                "我是FPX的粉丝，但我见证了在LPL决赛上，小明是怎么把刘青松爆锤的，这一次MSI我再次见到了小明超强的竞技状态，既然Beryl不想训练，那我不介意看着小明在赛场上告诉他训练的结果是怎样的。",
            },
            {
              type: "p",
              content: "当然除开选手状态，再说说队伍本身。",
            },
            {
              type: "p",
              content:
                "DK去年是六边形战队，BP、选手实力、团战各方面都超强，但今年牛宝出走后，不得不承认DK的进攻火力远不如去年，现在的DK是前中期稳住，等中后期发力的打法。",
            },
            {
              type: "p",
              content: "这不是巧了，RNG也是这种打法啊，但关键在于：",
            },
            {
              type: "b",
              content: "DK的团战水平下滑了。",
            },
            {
              type: "p",
              content:
                "相比之下，RNG只要是不浪的团战，画面要比DK好得多，毕竟能在进攻强如云的LPL里，通过后期脱颖而出，RNG的团战水平确实是世界顶尖的。",
            },
            {
              type: "p",
              content:
                "如果DK不能在前中期拿到优势，那么真拼到后期运营和团战，现阶段，我真的更看好RNG。",
            },
            {
              type: "p",
              content: "",
            },
            {
              type: "h",
              content: "三、RNG要注意的点",
            },
            {
              type: "p",
              content:
                "那么要如何防止DK拿到前中期的优势呢？我觉得还是有两个英雄需要注意。",
            },
            {
              type: "img",
              content:
                "https://pic1.zhimg.com/80/v2-badb905bfcbf01b45d41587b40ce5221_1440w.jpg?source=1940ef5c",
            },
            {
              type: "p",
              content:
                "佐伊就老生常谈了，这是RNG在LPL春季赛最怕的英雄，ban率高达70%，荣光哥的佐伊还是有一手的，这点不得不防。",
            },
            {
              type: "p",
              content:
                "同时鳄鱼的ban率是所有英雄中最高的，汉子哥的鳄鱼能拿出来用用，而小虎的鳄鱼从现阶段来看，熟练度还是一般，当然cryin是可以摇摆到中路的，那就需要小虎掏出卢仙这种输出英雄，所以RNG要防好这手鳄鱼的pick，避免在BP上吃亏。",
            },
            {
              type: "p",
              content:
                "只要处理好了这两个最麻烦的点，我相信DK想在前中期拿到优势，不是什么容易的事情。",
            },
            {
              type: "p",
              content:
                "当然这只是揭幕战，革命仍在继续，同志仍需努力，这只是万里长征的第一步，我不懂什么大道理，但RNG在这次MSI中确实有些“浪”，我清晰地急着古人交给我们的话，所以这两句话我也送给RNG：",
            },
            {
              type: "p",
              content: "骄兵必败。",
            },
            {
              type: "p",
              content: "生于忧患死于安乐。",
            },
            {
              type: "p",
              content: "",
            },
            {
              type: "b",
              content: "RNG加油，干掉DK！",
            },
          ],
          editTime: "昨天 20:30",
          commentUser1: "重阳",
          commentUser1Avatar:
            "https://pic1.zhimg.com/v2-8ba51588bdefeb8aff4a8bd41034b475_s.jpg?source=06d4cd63",
          commentTime1: "昨天 20:41",
          comment1: "赞",
          commentUser2: "弦切割",
          commentUser2Avatar:
            "https://pic1.zhimg.com/v2-94b095d48094842b53407c8ea0872f5f_s.jpg?source=06d4cd63",
          commentTime2: "昨天 20:31",
          comment2:
            "豹女男枪对刷野规划要求高，但打团划划水就有用；兰博R划水的话要你何用？[捂脸]",
        },
      },
      {
        index: 6,
        question: "上海交通大学和复旦大学相比，哪个更强？",
        author: "匿名用户",
        content: "泻药，上海交通大学。",
        authorAvatar:"https://pic3.zhimg.com/da8e974dc_l.jpg?source=1940ef5c",
        agreeCnt: 2,
        commentsCnt: 2,
        type: "News",
        info: "",
        secondary: {
          richContent: [
            {
              type: "h",
              content:
                "泻药，上海交通大学。",
            },
          ],
          editTime: "刚刚",
          commentUser1: "匿名用户",
          commentUser1Avatar:
            "https://pic3.zhimg.com/da8e974dc_l.jpg?source=1940ef5c",
          commentTime1: "刚刚",
          comment1: "[欢呼]",
          commentUser2: "匿名用户",
          commentUser2Avatar:
            "https://pic3.zhimg.com/da8e974dc_l.jpg?source=1940ef5c",
          commentTime2: "刚刚",
          comment2: "[欢呼]",
        },
      },
      {
        index: 7,
        question: "为什么闲鱼把网页版取消了？",
        author: "菊花庵隐士",
        authorAvatar:
          "https://pic1.zhimg.com/v2-9bffbd75101552a6172d12c131fb30fb_l.jpg?source=1940ef5c",
        content:
          "因为互联网的开创者蒂姆·伯纳斯·李是一个圣人，他给互联网注入的最原始的精神就是开源",
        agreeCnt: 5831,
        commentsCnt: 180,
        type: "News",
        info: "慷慨一诺拔剑起，悲歌热血岁月凋",
        secondary: {
          richContent: [
            {
              type: "p",
              content:
                "因为互联网的开创者蒂姆·伯纳斯·李是一个圣人，他给互联网注入的最原始的精神就是开源，平台在此，所有人来一起组成世界。",
            },
            {
              type: "p",
              content:
                "而移动互联网的革新者乔布斯是一个控制狂，他觉得所有人都必须按照他的玩法来玩才叫做完美世界。",
            },
            {
              type: "p",
              content:
                "顺便一提乔布斯因为觉得自己相信的都是对的而吃巫药把自己吃死了真是大快人心。",
            },
            {
              type: "p",
              content:
                "在WWW的世界里，你自己选择去哪里，做什么，你可以轻易的设置，定义，摁一下F12就能搞清楚后台发生了什么，资本家们要好好做产品跪着请你来，你可以在十七八个社区游荡，没有人能强迫你留下。",
            },
            {
              type: "p",
              content:
                "在APP的世界里，你被摁着头逼你去做这个做那个，你根本不知道后台发生了什么，找不到那个刚刚点了保存的文件到底被存在哪个目录，资本家们骗你进门，给你什么他们说了算，一个一年打开一次的东西，必须赖在你的手机里每天自启。",
            },
          ],
          editTime: "05-13",
          commentUser1: "j加油",
          commentUser1Avatar:
            "https://pic4.zhimg.com/v2-e62bc968223da8908c9e26e8f849daca_xs.jpg?source=06d4cd63",
          commentTime1: "10 分钟前",
          comment1: "开源万岁！",
          commentUser2: "潇洒的酒",
          commentUser2Avatar:
            "https://pic1.zhimg.com/v2-bbecb0619b7af0fb021df4d848a6736f_xs.jpg?source=06d4cd63",
          commentTime2: "11 分钟前",
          comment2: "看到你说乔布斯，我立马点了个赞同[赞同]",
        },
      },

      {
        index: 8,
        question: "你见过最好的设计是什么？",
        author: "唐不漏",
        authorAvatar:
          "https://pic1.zhimg.com/v2-270b7722d6d69babb02db7cf2ffb748f_xs.jpg?source=1940ef5c",
        content:
          "我觉得最好的设计就是这种，看似随意却很巧妙的展示了创意，第一眼让人不明所以，看懂之后只觉得惊艳。",
        agreeCnt: 6324,
        commentsCnt: 84,
        type: "OnePic",
        imgUrl:
          "https://pic1.zhimg.com/80/v2-0b01a4d25dd06b7a1580bfee0a80b0eb_720w.jpg?source=1940ef5c",
        info: "温润如玉，藏而不漏。",
        secondary: {
          richContent: [
            {
              type: "img",
              content:
                "https://pic1.zhimg.com/80/v2-0b01a4d25dd06b7a1580bfee0a80b0eb_720w.jpg?source=1940ef5c",
            },
            {
              type: "p",
              content:
                "我觉得最好的设计就是这种，看似随意却很巧妙的展示了创意，第一眼让人不明所以，看懂之后只觉得惊艳。",
            },
            {
              type: "p",
              content: "居然在598赞的时候被折叠了……",
            },
            {
              type: "p",
              content: "需要我来描述一下这张图……",
            },
            {
              type: "p",
              content: "这张图是刷微博的时候看见的 还有水印哈哈",
            },
            {
              type: "p",
              content:
                "二维码是我手动切开的因为知乎有自动识别二维码的功能 会变成一个网址 正常是可以扫的！",
            },
          ],
          editTime: "2017-10-16",
          commentUser1: "座头鲸",
          commentUser1Avatar:
            "https://pic1.zhimg.com/v2-e34c55f1b59653c1245c6e5ef8246a1a_s.jpg?source=06d4cd63",
          commentTime1: "2017-10-16",
          comment1: "有时候解决问题就是这么简单",
          commentUser2: "董正与",
          commentUser2Avatar:
            "https://pic4.zhimg.com/d617ec359543e1e2ec84b5a3df168acb_s.jpg?source=06d4cd63",
          commentTime2: "2017-10-16",
          comment2: "这应该不是截图做的",
        },
      },

      {
        index: 9,
        question: "自称是国家安全局的人可以认为全是骗子么？",
        author: "Anonymous",
        authorAvatar: "https://pic3.zhimg.com/da8e974dc_l.jpg?source=1940ef5c",
        content: "不能。",
        agreeCnt: 1181,
        commentsCnt: 57,
        type: "News",
        info: "汽车制造/供应商管理/数码产品爱好者",
        secondary: {
          richContent: [
            {
              type: "p",
              content: "不能。",
            },
            {
              type: "p",
              content: "前女友交大研究生。",
            },
            {
              type: "p",
              content: "有一阵子在某幢所有门都有门禁的楼里做项目。",
            },
            {
              type: "p",
              content:
                "某天买到了一个她心心念念挺久的小东西，急着去找她邀功，说是在那幢楼里暂时走不开。",
            },
            {
              type: "p",
              content:
                "刚好看到某个学长掏了门卡要进楼，想着给她个惊喜，就跟着混了进去。",
            },
            {
              type: "p",
              content:
                "学长回头皱着眉头很疑惑的看了我一会儿，我冲他傻笑了一下他忧心忡忡的走了。",
            },
            {
              type: "p",
              content: "结果还没找到我前女友，就被个看起来极朴素的大妈盯上了。",
            },
            {
              type: "p",
              content:
                "把我喊去小房间，质问了好一通。一开始我还有点油腔滑调，后来大妈很严肃的暗示我和国安有关，不配合后果很严重，我才一本正经的解释缘由和认错。",
            },
            {
              type: "p",
              content:
                "后来亏得前女友的导师认识也挺喜欢我的，打了很多招呼才把我捞出来而且不惩罚我前女友。",
            },

            {
              type: "p",
              content:
                "事后前女友告诉我，他们这幢楼里有许多涉密的研究项目。许多看着普通的大妈大叔都是国安的。以后她在这幢楼的话就别进去找她了，给她和导师添了不少麻烦。",
            },
          ],
          editTime: "05-10",
          commentUser1: "晨光",
          commentUser1Avatar:
            "https://pic1.zhimg.com/3b0495b56166ca86fb51e1a4a30be41d_xs.jpg?source=06d4cd63",
          commentTime1: "05-10",
          comment1: "所以成了前女友？",
          commentUser2: "人非",
          commentUser2Avatar:
            "https://pic1.zhimg.com/d91080e97af26a50b7ec3f74563cd675_xs.jpg?source=06d4cd63",
          commentTime2: "05-13",
          comment2: "所以跟大妈在一起了？",
        },
      },
    ],
  });
};
