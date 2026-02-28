import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetail } from "../API";
import { setLoading } from "./uiSlice";

const initialState = { pokemons: [] };

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/export const fetchPokemonsWithDetails = createAsyncThunk",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const resPokemons = await getPokemons();
    const detailPokemons = await Promise.all(
      resPokemons.map((pokemon) => getPokemonsDetail(pokemon)),
    );
    dispatch(setLoading(false));
    dispatch(setPokemons(detailPokemons));
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return Number(pokemon.id) === Number(action.payload.pokemonId);
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
