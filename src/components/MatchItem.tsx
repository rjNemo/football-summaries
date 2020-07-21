import React, { FC } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import IGame from "../types/Game";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "16px",
  },
  media: {
    height: 140,
  },
});

const MatchItem: FC<IGame> = ({
  title,
  id,
  thumbnail,
  date,
  competition: { name },
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnail} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {name}
            <br />
            <Moment format="DD MMMM YYYY - HH:mm">{date}</Moment>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={"/" + id}>
          More details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MatchItem;
