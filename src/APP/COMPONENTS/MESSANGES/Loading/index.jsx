import "./Loading.css";

function Loading() {
  return (
    <div className="pokeball-loader-container">
      <div className="pokeball-wrapper">
        <div className="pokeball">
          <div className="pokeball-button"></div>
        </div>
      </div>
      <p className="pokeball-text">Cargando ...</p>
    </div>
  );
}

export { Loading };
