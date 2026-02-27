import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pokemonsReducer } from "./APP/REDUCERS/Pokemons.jsx";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import App from "./APP/App.jsx";
import { logger } from "./APP/MIDDLEWARES/index.jsx";

const composealt =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composealt(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composedEnhancers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
