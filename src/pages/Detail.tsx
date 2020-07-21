import React, { FC, useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import Loader from "../components/Loader";
// import MatchItem from "../components/MatchItem";

const Detail: FC = () => {
  //   const [game, setGame] = useState([]);
  const [loading, _] = useState(true);
  const { params } = useRouteMatch<{ slug: string }>();

  useEffect(() => {}, []);
  console.log(params.slug);

  return loading ? <Loader /> : <div>{/* <MatchItem {...game} /> */}</div>;
};

export default Detail;
