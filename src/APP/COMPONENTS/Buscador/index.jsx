import { useDispatch } from "react-redux";
import { setSearch } from "../../SLICES/dataSlice";
import "./style.css";

function Buscador() {
  const dispatch = useDispatch();
  const Buscar = (e) => {
    dispatchEvent(setSearch({ search: e }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="search-wrapper">
            <label
              htmlFor="pokedex-search"
              className="form-label fw-bold text-pokemon-blue"
            >
              BUSCAR POKÉMON
            </label>

            <div className="input-group custom-search-group">
              <span className="input-group-text bg-pokemon-red text-white border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input
                id="pokedex-search"
                type="text"
                className="form-control pokedex-input"
                placeholder="Nombre o número..."
                onChange={(evento) => {
                  dispatch(setSearch(evento.target.value));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Buscador };
