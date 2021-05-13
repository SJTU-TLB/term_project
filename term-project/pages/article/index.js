import React, { useEffect, useState } from "react";

import TopBar from "../../components/TopBar/TopBar";

import QuestionHeader from "../../components/Article/QuestionHeader";
import { ActionContent } from "../../components/Article/ActionContent";
import Article from "../../components/Article/Article";

export default function Home() {
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
    <>
      <div >
        <TopBar></TopBar>
        <Article></Article>
      </div>
    </>
  );
}
