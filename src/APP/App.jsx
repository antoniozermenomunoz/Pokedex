import { useEffect } from "react";
import { Buscador } from "./COMPONENTS/Buscador";
import { Lista } from "./COMPONENTS/Lista";
import { getPokemons, getPokemonsDetail } from "./API";
import { setPokemons } from "./ACTIONS";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const resPokemons = await getPokemons();
      const detailPokemons = await Promise.all(
        resPokemons.map((pokemon) => getPokemonsDetail(pokemon)),
      );

      dispatch(setPokemons(detailPokemons));
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <Buscador />
      <Lista items={pokemons} />
    </>
  );
}

export default App;
