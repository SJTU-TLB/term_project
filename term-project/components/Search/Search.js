import React, { useEffect, useState } from "react";

import styles from "./Search.module.css";
import HotCard from "./HotCard/HotCard";

export default function AppMain() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/hotSearch").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <main role="main" class={styles.searchMain}>
      <div className={styles.searchContainer}>
        <section className={styles.hotSearchContainer}>
          <p style={({ fontWeight: "500" }, { fontSize: "16px" })}>热搜</p>
          <div className={styles.hotSearchList}>
          {state.list.map((i)=>{
              return(
                <HotCard data={i} />        
              );
          })}
          </div>
        </section>
      </div>
    </main>
  );
}
