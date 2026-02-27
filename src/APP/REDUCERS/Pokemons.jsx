import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "../ACTIONS/types";

const initialState = { pokemons: [], loading: false };

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      const newPokemonsFavorite = [...state.pokemons];

      const currentPokemonsIndex = newPokemonsFavorite.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonid,
      );

      if (currentPokemonsIndex < 0) {
        return state;
      }

      newPokemonsFavorite[currentPokemonsIndex].favorite =
        !newPokemonsFavorite[currentPokemonsIndex].favorite;

      return { ...state, pokemons: newPokemonsFavorite };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
