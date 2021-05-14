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
          commentUser1Avatar: "https://pic4.zhimg.com/a73be6f94_s.jpg?source=06d4cd63",
          commentTime1: "2016-03-25",
          comment1: "都懒得理他们",
          commentUser2: "请容我插一下嘴",
          commentUser2Avatar: "https://pic4.zhimg.com/0d734d285_s.jpg?source=06d4cd63",
          commentTime2: "2016-03-25",
          comment2:
            "没人评论? 不过我确实对藤校博士资格考试的内容很感兴趣诶，这个可以给很多自学机器学习的爱好者作为参考，答主还能再提供些相关信息吗，多谢了!",
        },
      },
      {
        index: 4,
        question: "马斯克发文称特斯拉暂停使用比特币支付，会对比特币带来什么影响？",
        author: "性格如此",
        authorAvatar: "https://pic2.zhimg.com/v2-cceff55bd211b4aec2aeae8781e4c189_xs.jpg?source=1940ef5c",
        content: "我们来看一下这波下跌的引起原因是什么吧，很简单，特斯拉马斯克之前买过BTC，买完BTC的时候，马斯克说特斯拉可以接受BTC付款，BTC应声大涨，如今马斯克说拒绝BTC支付，BTC应声大跌，马斯克之前买的BTC在这波大跌之前应该已经清空了，如果再以更低的价格再买入，过两天再放出烟雾弹消息，这种情况，放证券市场里够判一辈子的了，所以大家不要神话马斯克这个人，这个人做的事情很没有底线，币圈只不过是他玩弄的资本。",
        agreeCnt: 5571,
        commentsCnt: 506,
        type: "News",
        info: "",
        secondary: {
          richContent: [
            {
              type: "p",
              content: "我们来看一下这波下跌的引起原因是什么吧，很简单，特斯拉马斯克之前买过BTC，买完BTC的时候，马斯克说特斯拉可以接受BTC付款，BTC应声大涨，如今马斯克说拒绝BTC支付，BTC应声大跌，马斯克之前买的BTC在这波大跌之前应该已经清空了，如果再以更低的价格再买入，过两天再放出烟雾弹消息，这种情况，放证券市场里够判一辈子的了，所以大家不要神话马斯克这个人，这个人做的事情很没有底线，币圈只不过是他玩弄的资本。",
            },
            {
              type: "p",
              content: "就这很多人鼓吹去中心话技术如何如何牛逼、区块链如何如何牛逼，聪明人都知道这是资本割韭菜的最佳方法，甚至不用交税，但是有很多聪明人明知道是什么也会美名其曰说它的好，为什么，靠币圈吃饭，喝汤，我也是圈里人，既得利益者，币圈没什么道德法律底线，这是一个强者恒强的世界",
            },
            {
              type: "p",
              content: "项目方、交易所、大V、都是这个圈子的配套产业链，只有韭菜是真韭菜",
            },
          ],
          editTime: "昨天 10:16",
          commentUser1: "jiangGL",
          commentUser1Avatar: "https://pic1.zhimg.com/179e6358367a39e6f20c303c6dd81210_s.jpg?source=06d4cd63",
          commentTime1: "昨天 11:01",
          comment1: "这不是证券市场，这是黑市，你奈何不了他[飙泪笑]",
          commentUser2: "神秘博士DW",
          commentUser2Avatar: "https://pic2.zhimg.com/v2-84d9417c7e481bf3df68ceb426761b5d_s.jpg?source=06d4cd63",
          commentTime2: "昨天 11:29",
          comment2: "什么理想，信仰，就tm为了钱",
        },
      },
      {
        index: 5,
        question: "计算机系学生应该怎样正确管理自己的电脑？",
        author: "牛岱",
        content:
          "看了很多答案，说的都是比如文件要分门别类，要做好备份之类的，我在这里给大家介绍一下我平时的电脑管理习惯。 为了更好的管理我们的各种应用包，最好使用包管理工具来进行各种包，软件的安装和使用。 ",
        imgUrl:
          "https://pic2.zhimg.com/50/v2-31bfe639fdc3b546b364f3885061551d_400x224.jpg",
        agreeCnt: 6006,
        commentsCnt: 180,
        type: "OnePic",
      },
      {
        index: 6,
        question: "计算机系学生应该怎样正确管理自己的电脑？",
        author: "牛岱",
        content:
          "看了很多答案，说的都是比如文件要分门别类，要做好备份之类的，我在这里给大家介绍一下我平时的电脑管理习惯。 为了更好的管理我们的各种应用包，最好使用包管理工具来进行各种包，软件的安装和使用。 ",
        imgUrl:
          "https://pic2.zhimg.com/50/v2-31bfe639fdc3b546b364f3885061551d_400x224.jpg",
        agreeCnt: 6006,
        commentsCnt: 180,
        type: "OnePic",
      },
      {
        index: 7,
        question: "计算机系学生应该怎样正确管理自己的电脑？",
        author: "牛岱",
        content:
          "看了很多答案，说的都是比如文件要分门别类，要做好备份之类的，我在这里给大家介绍一下我平时的电脑管理习惯。 为了更好的管理我们的各种应用包，最好使用包管理工具来进行各种包，软件的安装和使用。 ",
        imgUrl:
          "https://pic2.zhimg.com/50/v2-31bfe639fdc3b546b364f3885061551d_400x224.jpg",
        agreeCnt: 6006,
        commentsCnt: 180,
        type: "OnePic",
      },
      {
        index: 8,
        question: "计算机系学生应该怎样正确管理自己的电脑？",
        author: "牛岱",
        content:
          "看了很多答案，说的都是比如文件要分门别类，要做好备份之类的，我在这里给大家介绍一下我平时的电脑管理习惯。 为了更好的管理我们的各种应用包，最好使用包管理工具来进行各种包，软件的安装和使用。 ",
        imgUrl:
          "https://pic2.zhimg.com/50/v2-31bfe639fdc3b546b364f3885061551d_400x224.jpg",
        agreeCnt: 6006,
        commentsCnt: 180,
        type: "OnePic",
      },
      {
        index: 9,
        question: "计算机系学生应该怎样正确管理自己的电脑？",
        author: "牛岱",
        content:
          "看了很多答案，说的都是比如文件要分门别类，要做好备份之类的，我在这里给大家介绍一下我平时的电脑管理习惯。 为了更好的管理我们的各种应用包，最好使用包管理工具来进行各种包，软件的安装和使用。 ",
        imgUrl:
          "https://pic2.zhimg.com/50/v2-31bfe639fdc3b546b364f3885061551d_400x224.jpg",
        agreeCnt: 6006,
        commentsCnt: 180,
        type: "OnePic",
      },
    ],
  });
};
