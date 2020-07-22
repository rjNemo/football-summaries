import React, { FC } from "react";
import { Container } from "@material-ui/core";

import { withGame, IGameState } from "../store/GameProvider";

import Loader from "./Loader";
import MatchItem from "./MatchItem";

const MatchList: FC<IGameState> = ({ games, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {games.map((game, i) => (
        <MatchItem key={i} {...game} id={i} />
      ))}
    </Container>
  );

export default withGame((props: IGameState) => <MatchList {...props} />);
