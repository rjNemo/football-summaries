import React, { FC, useState, useEffect } from "react";

import { Container } from "@material-ui/core";

import Loader from "./Loader";
import MatchItem from "./MatchItem";

import apiClient from "../api";

const MatchList: FC = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get("/")
      .then(({ data }) => {
        setLoading(false);
        setGames(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        return <div>{JSON.stringify(err, null, 2)}</div>;
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {games.map((game, i) => (
        <MatchItem key={i} id={i} {...game} />
      ))}
    </Container>
  );
};

export default MatchList;
