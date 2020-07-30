import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const valoresIniciais = { nome: "", descricao: "", cor: "#000" };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleValues(event) {
    setValues(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
  }

  return (
    <PageDefault>
      <h1>Cadastro da Categoria:{values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da Categoria:
            <input type="text" value={values.nome} onChange={handleValues} />
          </label>
        </div>
        <div>
          <label>
            Dercrição:
            <textarea
              type="text"
              value={values.descricao}
              onChange={handleValues}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input type="color" value={values.cor} onChange={handleValues} />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria}</li>;
        })}
      </ul>

      <Link to="/">home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
