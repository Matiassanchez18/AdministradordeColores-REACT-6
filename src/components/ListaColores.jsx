import React from "react";
import Colores from "./Colores";

const ListaColores = ({ arrayColores, borrarColores }) => {
  return (
    <section>
      {/* Usamos d-flex para mostrar las tarjetas en una fila */}
      <div className="d-flex flex-wrap justify-content-start">
        {arrayColores.map((color, posicion) => (
          <Colores key={posicion} color={color} borrarColores ={borrarColores} />
        ))}
      </div>
    </section>
  );
};

export default ListaColores;
