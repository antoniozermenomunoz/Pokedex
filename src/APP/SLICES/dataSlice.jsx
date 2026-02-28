import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetail } from "../API";
import { setLoading } from "./uiSlice";

const initialState = { pokemons: [], search: "" };

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (search, { dispatch }) => {
    dispatch(setLoading(true));
    const resPokemons = await getPokemons();
    const filtered = resPokemons.filter((pokemon) =>
      pokemon.name.includes(search.toLowerCase()),
    );
    const detailPokemons = await Promise.all(
      filtered.map((pokemon) => getPokemonsDetail(pokemon)),
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPokemons, setFavorite, setSearch } = dataSlice.actions;

export default dataSlice.reducer;
