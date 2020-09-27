import React from 'react';
import {Container} from './styles';
import slogan from './slogan_home.png';


 function Home() {
 
  return (
    <Container>
      <div className="first-line">
        <div className="text">
          <h1>A.P.A.A</h1>
          <h4>Associação de Pais e Amigos dos Autistas</h4>
          <h4>Dom Pedrito / RS</h4>
        </div>
        <img src={slogan} alt="asdadsa"/>
      </div>
      <button>
        <a>Visite-nos</a>
      </button>
    </Container>
  );
}

export default Home;

