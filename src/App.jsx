import Formulario from "./components/Formulario";
import ListaValores from "./components/ListaValores";
import Valores from "./components/Valores";
import "./assets/css/app.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [valores, setValores] = useState([]);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);

  const addValor = (titulo, tipo, valor) => {
    const newValor = {
      id: nanoid(),
      titulo: titulo,
      valor: valor,
      tipo: tipo,
    };

    const newValores = [...valores, newValor];

    setValores(newValores);
  };

  const deleteValor = (id) => {
    const novoValor = valores.filter((valor) => valor.id !== id);
    setValores(novoValor);
  };

  useEffect(() => {
    let income = 0;
    let expense = 0;

    for (let i in valores) {
      if (valores[i].tipo === "Entrada") {
        const val = valores[i].valor.split("$", 2);

        const a = val[1].replace(",", ".");

        const valorFinal = parseFloat(a);

        income += valorFinal;
      } else {
        const val = valores[i].valor.split("$", 2);

        const a = val[1].replace(",", ".");

        const valorFinal = parseFloat(a);

        expense += valorFinal;
      }
    }

    setEntrada(income);
    setSaida(expense);
  }, [valores]);

  return (
    <div className="container">
      <header>
        <h1>Controle suas finanças</h1>
      </header>
      <main className="main__content">
        <Formulario handleAddValor={addValor} />
        <Valores entrada={entrada} saida={saida} />
      </main>
      <ListaValores valores={valores} handleDeleteValor={deleteValor} />
    </div>
  );
}

export default App;
