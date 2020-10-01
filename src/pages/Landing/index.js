import React from 'react';
import './styles.css';
// import '../../assets/styles/global.css';
//import {Container} from './styles';
import logoImg from '../../assets/images/slogan_home.png';


 function Landing() {
 
  return (
   // <Container>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
              <img src={logoImg} alt="Logo APAA"/>
          </div>

          <div className="apaa">
            <h1>A.P.A.A</h1>
            <h3>Associação de Pais e Amigos dos Autistas</h3>
            <h4>Dom Pedrito / RS</h4>
          </div>

          <div className="button-container">
            <a href="" className="visite">
              Visite-nos
            </a>
          </div>

        </div>
      </div>

     /* <div className="first-line">
        <div className="text">
          <h1>A.P.A.A</h1>
          <h4>Associação de Pais e Amigos dos Autistas</h4>
          <h4>Dom Pedrito / RS</h4>
        </div>
     
        <img src={logoImg} alt="Logo APAA"/>
      </div>  
      <button>        
          Visite-nos
      </button> */
   // </Container>
  );
}

export default Landing;

