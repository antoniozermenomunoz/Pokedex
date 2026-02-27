import { useDispatch } from "react-redux";
import "./style.css";
import { setFavorite } from "../../ACTIONS";

function Carta({ item }) {
  console.log(item);
  const dispatch = useDispatch();
  const Favorito = () => {
    dispatch(setFavorite({ pokemonid: item.id }));
  };
  return (
    <div className="card pokemon-card shadow-lg p-3">
      <div className="d-flex justify-content-between align-items-center mb-2 px-2">
        <h2 className="h4 fw-bold text-black m-0">{item.name}</h2>
        {item.favorite ? (
          <button
            className="btn-favorite shadow-sm"
            title="Quitar de favoritos"
            onClick={Favorito}
          >
            🌟
          </button>
        ) : (
          <button
            className="btn-favorite shadow-sm"
            title="Agregar a favoritos"
            onClick={Favorito}
          >
            ⭐
          </button>
        )}
      </div>

      <figure className="pokemon-img-container text-center mb-3">
        <img
          src={item.sprites.front_default}
          alt={item.name}
          className="img-fluid"
        />
      </figure>

      <div className="text-center">
        {item.types.map((tipo) => {
          return (
            <span
              key={tipo.slot}
              className="badge rounded-pill type-badge px-4 py-2"
            >
              {tipo.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export { Carta };
