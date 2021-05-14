import React, { useEffect, useState } from "react";

import styles from "./AppMain.module.css";
import StoryCard from "./StoryCard/StoryCard";
import DownloadGuide from "../Download/DownloadGuide";

export default function AppMain() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <main role="main" className={styles.AppMain}>
      <div className={styles.TopStoryMain}>
        {state.list.map((i) => {
          return <StoryCard data={i} />;
        })}
      </div>
      <DownloadGuide></DownloadGuide>
    </main>
  );
}
