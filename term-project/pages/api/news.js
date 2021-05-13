// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    code: 200,
    data: [
      {
        index: 0,
        question: "如何优雅的完成前端课大作业？",
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
              type: "p",
              children: "这是第1个段落", 
            },
            {
              type: "p",
              children: "这是第2个段落", 
            },
            {
              type: "img",
              children: "/avatars/author1.png", 
            },
            {
              type: "p",
              children: "这是第一个段落", 
            },
            {
              type: "img",
              children: "/avatars/author1.png", 
            },
            {
              type: "p",
              children: "这是第4个段落", 
            },
            {
              type: "p",
              children: "这是第5个段落", 
            },
            {
              type: "p",
              children: "这是第6个段落", 
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
        index: 2,
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
        index: 3,
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
        index: 4,
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
