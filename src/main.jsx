import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pokemonsReducer } from "./APP/REDUCERS/Pokemons.jsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./APP/App.jsx";

const store = createStore(pokemonsReducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
