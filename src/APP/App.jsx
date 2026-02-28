import { useEffect } from "react";
import { Buscador } from "./COMPONENTS/Buscador";
import { Lista } from "./COMPONENTS/Lista";
import { getPokemons } from "./API";
import { getpokemonswithdetails, setLoading } from "./ACTIONS";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Loading } from "./COMPONENTS/MESSANGES/Loading/index";

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(["data", "pokemons"], shallowEqual),
  ).toJS();
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const resPokemons = await getPokemons();
      dispatch(getpokemonswithdetails(resPokemons));
      dispatch(setLoading(false));
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <Buscador />
      {loading ? <Loading /> : <Lista items={pokemons} />}
    </>
  );
}

export default App;
