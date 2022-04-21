import React from "react";
import "./style.css";

function Valores({ entrada, saida }) {
  const total = entrada - saida;

  return (
    <section className="valores">
      <h4>Entrada: R${entrada.toFixed(2)} </h4>
      <h4>Saída: -R${saida.toFixed(2)}</h4>
      <h2 className="valores__total">
        Receita final:
        {total >= 0
          ? ` R$${total.toFixed(2)}`
          : ` -R$${(total * -1).toFixed(2)}`}
      </h2>
    </section>
  );
}

export default Valores;
