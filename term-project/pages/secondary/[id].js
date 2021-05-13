import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import TopBar from "../../components/TopBar/TopBar";

function Home(props) {
  const router = useRouter();
  const { id } = router.query;

  return <div>id : {id}</div>;
}

export default Home;
