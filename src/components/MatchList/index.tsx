import React, { FC } from "react";
import { Container, Grid } from "@material-ui/core";

import { withGame, IGameState } from "../../store/GameProvider";

import Loader from "../Loader";
import MatchItem from "../MatchItem";

const MatchList: FC<IGameState> = ({ games, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Grid container justify="center" spacing={3}>
        {games.map((game, i) => (
          <Grid key={i} item sm={6} md={4}>
            <MatchItem {...game} id={i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

export default withGame((props: IGameState) => <MatchList {...props} />);
