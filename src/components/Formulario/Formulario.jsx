import React, { useState } from "react";
import "./style.css";

function Formulario({ handleAddValor }) {
	const [titulo, setTitulo] = useState("");
	const [valor, setValor] = useState("");
	const [tipo, setTipo] = useState("Entrada");

	const handleTitulo = (e) => {
		const tit = e.target.value;
		setTitulo(tit.toUpperCase());
	};

	const handleValor = (e) => {
		setValor(e.target.value);
	};

	const handleTipo = (e) => {
		setTipo(e.target.value);
	};

	const handleeAddValor = (e) => {
		e.preventDefault();
		handleAddValor(titulo, tipo, valor);
		setTitulo("");
		setValor("");
	};

	return (
		<section>
			<form className="form" onSubmit={handleeAddValor}>
				<input
					type="text"
					className="form__input--descricao"
					placeholder="Descrição"
					value={titulo}
					onChange={handleTitulo}
					required
				/>
				<input
					type="text"
					className="form__input--valor"
					placeholder="R$2,50"
					pattern="^(R\$)(\d{1,}(,\d{2})?)$"
					onChange={handleValor}
					value={valor}
					required
					onFocus={(e) => (e.target.value = "R$")}
				/>

				<section className="tipos">
					<input
						type="radio"
						name="tipo"
						id="entrada"
						value="Entrada"
						onChange={handleTipo}
						defaultChecked
					/>
					<label id="label__entrada" htmlFor="entrada">
						Entrada
					</label>

					<input
						type="radio"
						name="tipo"
						id="saida"
						value="Saida"
						onChange={handleTipo}
					/>
					<label id="label__saida" htmlFor="saida">
						Saida
					</label>
				</section>

				<button className="form__btn">Adicionar</button>
			</form>
		</section>
	);
}

export default Formulario;
