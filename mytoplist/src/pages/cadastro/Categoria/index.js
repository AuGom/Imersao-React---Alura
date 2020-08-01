import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function CadastroCategoria() {
  const valoresIniciais = { nome: "", descricao: "", cor: "" };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  useEffect(() => {
    const url = "http://localhost:8080/categorias";
    fetch(url).then(async (response) => {
      const resposta = await response.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro da Categoria:{values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria:"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          value={values.descricao}
          name="dascricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor:"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.nome}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
