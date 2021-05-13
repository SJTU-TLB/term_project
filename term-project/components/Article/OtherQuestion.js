import styles from "./OtherQuestion.module.css";

export default function OtherQuestion() {
  return (
    <div className={styles.RelatedReadCard}>
      <div className={styles.RelatedReadings}>
        <div className={styles.RelatedReadingsTitle}>相关推荐</div>
        <div className={styles.RelatedReadingsSection}>
          <div className={styles.RelatedReadingsItem}>
            <a
              className={styles.RelatedReadingsItemMain}
              href="https://zhuanlan.zhihu.com/p/63218504"
              target="_blank">
              <div className={styles.RelatedReadingsItemContent}>
                <h3 className={styles.RelatedReadingsItemTitle}>
                  互联网公司最常见的面试算法题有哪些？
                </h3>
                <div className={styles.RelatedReadingsItemStatus}>
                  程序员吴师兄的文章 · 211 赞同
                </div>
              </div>
              <img
                className={styles.RelatedReadingsItemImg}
                src="https://pic4.zhimg.com/50/v2-8592ad9dfe585083a801454e289f3bcb_180x120.jpg?source=1940ef5c"
                alt="互联网公司最常见的面试算法题有哪些？"
              />
            </a>
          </div>
          <div className={styles.RelatedReadingsItem}>
            <a
              className={styles.RelatedReadingsItemMain}
              href="https://zhihu.com/question/24964987/answer/586425979"
              target="_blank">
              <div className={styles.RelatedReadingsItemContent}>
                <h3 className={styles.RelatedReadingsItemTitle}>
                  互联网公司最常见的面试算法题有哪些？
                </h3>
                <div className={styles.RelatedReadingsItemStatus}>
                  力扣（LeetCode）的回答 · 5,784 赞同
                </div>
              </div>
              <img
                className={styles.RelatedReadingsItemImg }
                src="https://pic2.zhimg.com/v2-009013278688f520c070b27910255cb1_180x120.jpg?source=1940ef5c"
                alt="互联网公司最常见的面试算法题有哪些？"
              />
            </a>
          </div>
          <div className={styles.RelatedReadingsItem}>
            <a
              className={styles.RelatedReadingsItemMain}
              href="https://zhuanlan.zhihu.com/p/79971028"
              target="_blank">
              <div className={styles.RelatedReadingsItemContent}>
                <h3 className={styles.RelatedReadingsItemTitle}>
                  解一道经典的腾讯算法面试题（小白也能看懂）
                </h3>
                <div className={styles.RelatedReadingsItemStatus}>
                  CSDN学院的文章 · 81 赞同
                </div>
              </div>
              <img
                className={styles.RelatedReadingsItemImg }
                src="https://pic2.zhimg.com/50/v2-57028cd955a43ae3f240e44000928ab2_180x120.jpg?source=1940ef5c"
                alt="解一道经典的腾讯算法面试题（小白也能看懂）"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
