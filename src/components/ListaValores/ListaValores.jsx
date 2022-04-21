import React from "react";
import Valor from "../Valor/Valor";
import "./style.css";

function ListaValores({ valores, handleDeleteValor }) {
  return (
    <section>
      <ul className="lista-valores">
        {valores.map((valor, key) => (
          <Valor
            key={key}
            id={valor.id}
            titulo={valor.titulo}
            valor={valor.valor}
            tipo={valor.tipo}
            handleDeleteValor={handleDeleteValor}
          />
        ))}
      </ul>
    </section>
  );
}

export default ListaValores;
