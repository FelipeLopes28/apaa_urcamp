import React from 'react';
import { Link } from 'react-router-dom'
import {Container} from './styles';
import logoImg from '../../assets/images/slogan_home.png';


 function Landing() {
 
  return (
   <Container>
      <div className="first-line">
        <div className="text">
          <h1>A.P.A.A</h1>
          <h4>Associação de Pais e Amigos dos Autistas</h4>
          <h4>Dom Pedrito / RS</h4>
        </div>
     
        <img src={logoImg} alt="Logo APAA"/>
      </div>  
      <button>
          <Link to={"/home"}>
            Visite-nos
          </Link>
      </button> 
    </Container>
  );
}

export default Landing;

