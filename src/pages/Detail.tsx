import React, { FC } from "react";
import { useRouteMatch } from "react-router-dom";

import { withGame, IGameState } from "../store/GameProvider";

import Loader from "../components/Loader";
import MatchFull from "../components/MatchFull";

const Detail: FC<IGameState> = ({ loading, selectGameByID }) => {
  const { params } = useRouteMatch<{ slug: string }>();
  const game = selectGameByID(params.slug);

  return loading ? <Loader /> : <MatchFull game={game} />;
};

export default withGame((props: IGameState) => <Detail {...props} />);
