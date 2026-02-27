import { SET_POKEMONS } from "./types";
import { getPokemonsDetail } from "../API";

export const setPokemons = (payload) => ({ type: SET_POKEMONS, payload });

export const getpokemonswithdetails =
  (pokemons = []) =>
  async (dispatch) => {
    const detailPokemons = await Promise.all(
      pokemons.map((pokemon) => getPokemonsDetail(pokemon)),
    );
    dispatch(setPokemons(detailPokemons));
  };
