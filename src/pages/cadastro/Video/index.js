import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";
import videoRepository from "../../../repositories/videos";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });
          videoRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log("Cadastrado com sucesso.");
              history.push("/");
            });
        }}
      >
        <FormField
          label="Titulo do video:"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />
        <FormField
          label="URL:"
          value={values.url}
          name="url"
          onChange={handleChange}
        />
        <FormField
          label="Categoria:"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
