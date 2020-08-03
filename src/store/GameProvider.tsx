import React, { FC, createContext, useState, useEffect } from "react";

import apiClient from "../api";

import IGame from "../types/Game";

export interface IGameState {
  games: IGame[];
  loading: boolean;
  setGames: React.Dispatch<React.SetStateAction<IGame[]>>;
  selectGameByID: (slug: string) => IGame;
  filterGamesByText: (text: string) => void;
}

export const GameContext = createContext<IGameState>({
  games: [],
  loading: true,
  setGames: () => {},
  selectGameByID: () => {
    return {} as IGame;
  },
  filterGamesByText: () => {},
});

const GameProvider: FC = ({ children }) => {
  const [games, setGames] = useState<IGame[]>([]);
  const [loading, setLoading] = useState(true);

  const selectGameByID = (slug: string): IGame => {
    const id = parseInt(slug);
    return games[id];
  };

  const filterGamesByText = (text: string): void =>
    setGames(games.filter((g) => g.title.includes(text)));

  useEffect(() => {
    apiClient
      .get("/")
      .then(({ data }) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        return <div>{JSON.stringify(err, null, 2)}</div>;
      });
  }, []);

  return (
    <GameContext.Provider
      value={{ games, loading, setGames, selectGameByID, filterGamesByText }}
    >
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
