import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import TopBar from "../../components/TopBar/TopBar";
import Article from "../../components/Article/Article";

export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
      <div>
        <TopBar></TopBar>
        <Article data={state.list[Number(id)]}></Article>
      </div>
  );
}
