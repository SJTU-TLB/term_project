import React, { useEffect, useState } from "react";

import styles from "./HotCard.module.css";

export default function HotCard(props) {
  function getColor() {
    if (props.data.index <= 3) {
      return "#ff942d";
    } else {
      return "#bfbfbf";
    }
  }

  return (
    <div className={styles.hotSearchItem}>
      <p className={styles.hotSearchIndex} style={{ color: getColor() }}>
        {props.data.index}
      </p>
      <div className={styles.hotSearchItemText}>
        <p className={styles.hotSearchTitle}>{props.data.title}</p>
        <p className={styles.hotSearchDesc}>{props.data.desc}</p>
      </div>
    </div>
  );
}
