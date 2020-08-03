/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valorInicial = {
    titulo: '',
    text: '',
    cor: '',
  };

  const { handleChange, values, setValues } = useForm(valorInicial);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'http://aluraflixhgg.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infoDigitada) {
        infoDigitada.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues({ valorInicial });
      }}
      >
        <FormField
          label="Nome da Categoria "
          type="text"
          data="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          type="textarea"
          data="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          data="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        {categorias.length === 0 && (
        <div>
          Loading
        </div>
        )}

        <ul>
          {categorias.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
