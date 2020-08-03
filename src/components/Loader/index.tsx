import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";

const Loader: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
