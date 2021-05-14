// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    code: 200,
    data: [
      {
        index: 1,
        title: "还原成都 49 中学生坠亡事件",
        desc: "坠亡前轨迹及事件时间线",
      },
      {
        index: 2,
        title: "杭州杀妻案 14 日开庭",
        desc: "回顾案件始末",
      },
      {
        index: 3,
        title: "电影《1921》选角争议",
        desc: "你看好这个阵容吗？",
      },
      {
        index: 4,
        title: "特斯拉暂停使用比特币支付",
        desc: "加密货币纷纷跳水",
      },
      {
        index: 5,
        title: "剧本杀门店大量倒闭",
        desc: "盲目创业有风险",
      },
      {
        index: 6,
        title: "比尔盖茨传记作者爆其好色",
        desc: "盖茨称「自己的婚姻没有爱情」",
      },
      {
        index: 7,
        title: "巴以冲突加剧",
        desc: "是由什么原因导致的？",
      },
      {
        index: 8,
        title: "汉服市场爆发规模或超百亿",
        desc: "汉服会成为流行吗？",
      },
    ],
  });
};
