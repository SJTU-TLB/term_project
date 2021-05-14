import React, { useEffect, useState } from "react";

import styles from "./Download.module.css";

export default function AppMain() {
  return (
    <div className={styles.downloadWrapper}>
      <div className={styles.downloadRoot}>
        <div className={styles.downloadLogo}></div>
        <div className={styles.downloadSlogan}>有问题，就会有答案</div>
        <div>
          <a className={styles.downloadLink}>立即下载</a>
        </div>
      </div>
      <div className={styles.footerRoot}>
          <div className={styles.footerImage}></div>
      </div>
    </div>
  );
}
