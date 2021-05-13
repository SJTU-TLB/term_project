import ActionContent from "./ActionContent";
import styles from "./QuestionMain.module.css";

export function AnsUser() {
  return (
    <div className={styles.ansUser}>
      <div className={styles.userContent}>
        <span>
          <a>
            <img className={styles.avatar} />
          </a>
        </span>
        <div className={styles.AuthorInfo}>
          <div className={styles.AuthorInfoHeader}>
            <span className={styles.AuthorInfoName}>
              <a className={styles.userLink}>蓝猫</a>
            </span>
          </div>
          <div className={styles.AuthorInfoDetail}>
            <div className={styles.AuthorInfoBadge}>
              <div className={styles.AuthorInfoBadgeText}>网络工程师</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RichContent() {
  return (
    <div className={styles.richContent}>
      <div className={styles.richContentInner}>
        <span className={styles.richText}>context</span>
      </div>
      <div>
        <div className={styles.contentTime}>
          <span>编辑于 05-10</span>
        </div>
      </div>
    </div>
  );
}

export function AnsComment() {
  return (
    <>
      <div className={styles.commentOuter}>
        <div className={styles.commentV2}>
          <div className={styles.commentUser}>
            <span className={styles.cmtAvatar}>
              <a className={styles.cmtUserLInk}>
                <img className={styles.cmtAvatarImg} />
              </a>
            </span>
            <span className={styles.cmtName}>
              <a className={styles.cmtUserLInk}>海猫</a>
            </span>
            <span className={styles.cmtTime}>10分钟前</span>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.commentText}>太牛了</div>
          </div>
        </div>

        <div className={styles.commentV2}>
          <div className={styles.commentUser}>
            <span className={styles.cmtAvatar}>
              <a className={styles.cmtUserLInk}>
                <img className={styles.cmtAvatarImg} />
              </a>
            </span>
            <span className={styles.cmtName}>
              <a className={styles.cmtUserLInk}>海猫</a>
            </span>
            <span className={styles.cmtTime}>10分钟前</span>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.commentText}>太拉了</div>
          </div>
        </div>
        <button type="button" className={styles.InAppButton}>
          打开 App 查看更多评论
        </button>
      </div>
    </>
  );
}
