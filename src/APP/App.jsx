import { useEffect } from "react";
import { setPokemons as setPokemonsAction } from "./ACTIONS";
import { Buscador } from "./COMPONENTS/Buscador";
import { connect } from "react-redux";
import { Lista } from "./COMPONENTS/Lista";
import { getPokemons } from "./API";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemon = async () => {
      setPokemons(await getPokemons());
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

const mapStateToProps = (state) => ({ pokemons: state.pokemons });

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
