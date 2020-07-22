import React from "react";
import { render } from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GameProvider from "./store/GameProvider";

render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
