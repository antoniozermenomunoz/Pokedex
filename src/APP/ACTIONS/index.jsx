import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";
import { getPokemonsDetail } from "../API";

export const setPokemons = (payload) => ({ type: SET_POKEMONS, payload });
export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setFavorite = (payload) => ({ type: SET_FAVORITE, payload });

export const getpokemonswithdetails =
  (pokemons = []) =>
  async (dispatch) => {
    const detailPokemons = await Promise.all(
      pokemons.map((pokemon) => getPokemonsDetail(pokemon)),
    );
    dispatch(setPokemons(detailPokemons));
  };
