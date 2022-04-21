import React from "react";
import "./style.css";

function Valor({ id, titulo, valor, tipo, handleDeleteValor }) {
  if (tipo === "Entrada") {
    return (
      <div className="valor entrada">
        <h4 className="lista-valores__desc">{titulo}</h4>
        <p className="lista-valores__valor">{valor}</p>
        <button className="item-btn" onClick={() => handleDeleteValor(id)}>
          Excluir
        </button>
      </div>
    );
  }
  return (
    <div className="valor saida">
      <h4 className="lista-valores__desc">{titulo}</h4>
      <p className="lista-valores__valor">-{valor}</p>
      <button className="item-btn" onClick={() => handleDeleteValor(id)}>
        Excluir
      </button>
    </div>
  );
}

export default Valor;
