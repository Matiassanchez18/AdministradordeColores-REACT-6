import React from "react";
import Colores from "./Colores";

const ListaColores = ({arrayColores}) => {
  return (
  <section>
    <article>
      {
        arrayColores.map((colores, posicion)=>(
          <Colores key={posicion} colores={colores}></Colores>
        ))
      }
      
    </article>
  </section>
  );
};

export default ListaColores;
