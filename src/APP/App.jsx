import { useEffect } from "react";
import { Buscador } from "./COMPONENTS/Buscador";
import { Lista } from "./COMPONENTS/Lista";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Loading } from "./COMPONENTS/MESSANGES/Loading/index";
import { fetchPokemonsWithDetails } from "./SLICES/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <>
      <Buscador />
      {loading ? <Loading /> : <Lista items={pokemons} />}
    </>
  );
}

export default App;
