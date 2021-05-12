// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
      code: 200,
      data: [
      {
        question: '如何优雅的完成前端课大作业？',
        author: '央视新闻',
        content: '《天山南北》丨从小镇到都市 从未感觉自己是外乡人',
        commentsCount: 45,
        type: 'News',
      },
      {
        title: '俄防长：已做好与西方全面开战的准备！美英法德：千万别冲动',
        author: '利刃号',
        commentsCount: 1556,
        type: 'OnePic',
        imgUrls: [
          'https://p1.pstatp.com/list/190x124/pgc-image/6549db88da2c469f8252a26f36ca7641',
        ],
      },
      {
        title: '视频丨习近平同法国德国领导人举行视频峰会',
        author: '央视新闻',
        commentsCount: 20,
        type: 'News',
      },
      {
        title: '易地搬迁，稳得住能致富',
        author: '人民日报',
        commentsCount: 1203,
        type: 'News',
      },
      {
        title:
          '志愿者“组团”为居民跑腿买药：疫情让我们距离变远 却让心更近了！',
        author: '央视网新闻',
        commentsCount: 487,
        type: 'OnePic',
      },
      {
        title: '接种新冠疫苗 构筑免疫屏障 | 预付资金做到“钱等疫苗”保障疫苗免费接种',
        author: '环球网',
        commentsCount: 128,
        type: 'OnePic',
        imgUrls: [
          'https://p3.pstatp.com/list/190x124/pgc-image/SUXbml15UIIOIO',
        ],
      },
      {
        title:
          '团中央书记处理论学习中心组开展党史第二专题学习研讨',
        author: '中国青年网',
        commentsCount: 30,
        type: 'News',
      },
      ],
  })
}