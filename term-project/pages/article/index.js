import React, { useEffect, useState } from "react";

import TopBar from "../../components/TopBar/TopBar";
import AppMain from "../../components/AppMain/AppMain";

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
    <TopBar></TopBar>
    <AppMain></AppMain>
  </>
  );
}
