import { Carta } from "../Carta";

function Lista({ items }) {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {items.length === 0 ? (
          <h1>No hay elementos</h1>
        ) : (
          items.map((item) => (
            <div className="col" key={item.id}>
              <Carta item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Lista };
