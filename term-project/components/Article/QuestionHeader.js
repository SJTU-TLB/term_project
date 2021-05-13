import styles from "./QuestionHeader.module.css";
import React from "react";

export default function QuestionHeader() {
  return (
    <>

      <div className={styles.QuestionHeadContent}>
          <div className={styles.QuestionHeadTitle}>
            <a href="/question/455019826">如何优雅的完成前端大作业？</a>
          </div>
        </div>
    </>
  );
}
