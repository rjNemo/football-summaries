import React, { FC, createContext, useState, useEffect } from "react";

import apiClient from "../api";

import IGame from "../types/Game";

export interface IGameState {
  games: IGame[];
  loading: boolean;
  setGames: React.Dispatch<React.SetStateAction<IGame[]>>;
}

export const GameContext = createContext<IGameState>({
  games: [],
  loading: true,
  setGames: () => {},
});

const GameProvider: FC = ({ children }) => {
  const [games, setGames] = useState<IGame[]>([]);
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

  return (
    <GameContext.Provider value={{ games, loading, setGames }}>
      {children}
    </GameContext.Provider>
  );
};

export const withGame = (Component: any) => (props: any) => (
  <GameContext.Consumer>
    {(store) => <Component {...props} {...store} />}
  </GameContext.Consumer>
);

export default GameProvider;
