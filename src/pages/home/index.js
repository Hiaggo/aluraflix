import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import React from 'react';
import dados_iniciais from '../../data/dados_iniciais.json'
import PageDefault from '../../components/PageDefault';
/* import Menu from '../../components/Menu';
import Footer from '../../components/Footer'; */

function Home() {
  return (
    <div>
      <PageDefault>

        <BannerMain
          videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
          url={dados_iniciais.categorias[0].videos[0].url}
          videoDescription={"O que faz uma desenvolvedora front-end? Trabalhando na área, os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvoldores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
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
      
      </PageDefault>
    </div>
  );
}

export default Home;
