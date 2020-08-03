import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// import Footer from '../../components/Footer';
// import dados_iniciais from '../../data/dados_iniciais.json';
// import Menu from '../../components/Menu';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  // eslint-disable-next-line camelcase
  const [dados_iniciais, setDados_iniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDados_iniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dados_iniciais.length === 0 && (<div>Loading</div>)}

      {dados_iniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dados_iniciais[0].videos[0].titulo}
                url={dados_iniciais[0].videos[0].url}
                videoDescription="O que faz uma desenvolvedora front-end? Trabalhando na área, os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvoldores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={dados_iniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription="O que faz uma desenvolvedora front-end? Trabalhando na área, os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvoldores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[0]}
      />

      <Carousel
        category={dados_iniciais.categorias[1]}
      />

      <Carousel
        category={dados_iniciais.categorias[2]}
      />

      <Carousel
        category={dados_iniciais.categorias[3]}
      />

      <Carousel
        category={dados_iniciais.categorias[4]}
      />

      <Carousel
        category={dados_iniciais.categorias[5]}
      />

      <Footer />
*/}
    </PageDefault>
  );
}

export default Home;
