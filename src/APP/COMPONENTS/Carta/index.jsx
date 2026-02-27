import "./style.css";

function Carta({ item }) {
  return (
    <div className="card pokemon-card shadow-lg p-3">
      <div className="d-flex justify-content-between align-items-center mb-2 px-2">
        <h2 className="h4 fw-bold text-black m-0">{item.name}</h2>
        <button className="btn-favorite shadow-sm" title="Agregar a favoritos">
          ⭐
        </button>
      </div>

      <figure className="pokemon-img-container text-center mb-3">
        <img
          src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
          alt="pikachu"
          className="img-fluid"
        />
      </figure>

      <div className="text-center">
        <span className="badge rounded-pill type-badge px-4 py-2">
          Eléctrico
        </span>
      </div>
    </div>
  );
}

export { Carta };
