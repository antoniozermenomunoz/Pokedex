import { Carta } from "../Carta";

function Lista({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <Carta />;
      })}
    </ul>
  );
}

export { Lista };
