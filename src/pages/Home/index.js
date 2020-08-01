import React from "react";

import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

//http: //localhost:8080/categorias?_embed=videos

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "The Leftovers é a nova série original HBO, um drama enigmático em que dois por cento da população desaparece de forma repentina e sem qualquer explicação, e o mundo inteiro tenta lidar com esta situação improvável. A história gira em torno de Kevin Garvey (Justin Theroux), pai de família e chefe de polícia de um pequeno subúrbio nova-iorquino, que se esforça para recuperar a sensação de normalidade diante de uma situação que parece impossível."
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
