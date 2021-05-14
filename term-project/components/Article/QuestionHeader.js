import styles from "./QuestionHeader.module.css";
import React from "react";

export default function QuestionHeader(props) {
  return (
    <>

      <div className={styles.QuestionHeadContent}>
          <div className={styles.QuestionHeadTitle}>
            <a>{props.question}</a>
          </div>
        </div>
    </>
  );
}
