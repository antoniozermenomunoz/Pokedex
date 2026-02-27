import { useEffect } from "react";
import { Buscador } from "./COMPONENTS/Buscador";
import { Lista } from "./COMPONENTS/Lista";
import { getPokemons } from "./API";
import { setPokemons } from "./ACTIONS";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setPokemons(await getPokemons()));
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
