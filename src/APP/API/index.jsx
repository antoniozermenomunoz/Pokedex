import axios, { Axios } from "axios";

export const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};
