import { ActionContent } from "./ActionContent";
import styles from "./Article.module.css";
import QuestionHeader from "./QuestionHeader";
import { AnsComment, AnsUser, RichContent } from "./QuestionMain";
import OtherQuestion from "./OtherQuestion";

export default function Article(props) {

  
  if (props.data != undefined) {
    console.log(props);
    return (
      <div className={styles.article}>
        <div className={styles.Outer}>
          <QuestionHeader question={props.data.question}></QuestionHeader>
          <div className={styles.ansCard}>
            <div className={styles.ansContentMain}>
              <AnsUser user={props.data.author} info={props.data.info} avatar={props.data.authorAvatar}></AnsUser>
              <RichContent secondary={props.data.secondary}></RichContent>
              <ActionContent agreeCnt={props.data.agreeCnt} commentsCnt={props.data.commentsCnt}></ActionContent>
              <AnsComment secondary={props.data.secondary}></AnsComment>
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
  }else{
    return (
      <div></div>
    )
  }
}
