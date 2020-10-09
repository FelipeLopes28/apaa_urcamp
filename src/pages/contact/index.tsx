import React from 'react';
import { Link } from 'react-router-dom';

import imgEmail from '../../assets/images/email.svg';
import imgFacebook from '../../assets/images/facebook.svg';
import imgLetras from '../../assets/images/letras.svg';
import logoSlogan from '../../assets/images/slogan_home.png'

import './styles.css';

function Contact() {
  return (
    <div id="page-contact" className="container">
        <header className="page-header">
          <div className="top-bar-container">
            <Link to="/contact">
                <img src={imgEmail} alt="Contato" />
                contato.apaadp@gmail.com
            </Link>
            <Link to="http://www.facebook.com">
                <img src={imgFacebook} alt="Facebook" />
            </Link>
          </div>

          <div className="header-content">
            <strong>
                <img src={imgLetras} alt="Letreiro" />
                <img src={logoSlogan} alt="Logo" />
            </strong>

          </div>
          <div className="buttons-container">
              <Link to="/home" className="home">
                Home
              </Link>
              <Link to="/events" className="events">
                Eventos
              </Link>
              <Link to="/contact" className="contact">
                Contato
              </Link>
            </div>
          
        
        </header>
    </div>
    
  )
}

export default Contact;