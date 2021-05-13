import { ActionContent } from "./ActionContent";
import styles from "./Article.module.css";
import QuestionHeader from "./QuestionHeader";
import { AnsComment, AnsUser, RichContent } from "./QuestionMain";
import OtherQuestion from "./OtherQuestion";

export default function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.Outer}>
        <QuestionHeader></QuestionHeader>
        <div className={styles.ansCard}>
          <div className={styles.ansContentMain}>
            <AnsUser></AnsUser>

            <RichContent></RichContent>
            <ActionContent /*
            commentsCnt={props.data.commentsCnt}
            agreeCnt={props.data.agreeCnt} */
            ></ActionContent>
            <AnsComment></AnsComment>
          </div>
        </div>
        <div className={styles.ViewAllCard}>
          <button type="button" className={styles.ViewAllButton}>
            查看全部 112 个回答
          </button>
        </div>
        <OtherQuestion></OtherQuestion>
      </div>
    </div>
  );
}
