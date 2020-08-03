import React, { FC } from "react";
import Moment from "react-moment";
import { Container, Typography } from "@material-ui/core";

import IGame from "../../types/Game";
import useStyles from "./styles";

const MatchFull: FC<{ game: IGame }> = ({ game }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography gutterBottom variant="h5" component="h3">
        {game.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {game.competition.name}
        <br />
        <Moment format="DD MMMM YYYY - HH:mm">{game.date}</Moment>
      </Typography>

      <div
        className={classes.video}
        dangerouslySetInnerHTML={{ __html: game.videos[0].embed }}
      ></div>
    </Container>
  );
};

export default MatchFull;
