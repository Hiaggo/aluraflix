/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valorInicial = {
    titulo: '',
    text: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valorInicial);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infoDigitada) {
    const { value } = infoDigitada.target;
    setValue(
      infoDigitada.target.getAttribute('data'),
      value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://aluraflixhgg.herokuapp.com/categorias';
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
    }
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
          label="titulo da Categoria: "
          type="text"
          data="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
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
