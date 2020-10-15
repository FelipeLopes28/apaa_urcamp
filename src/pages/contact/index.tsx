import React from 'react';

import PageHeader from '../../components/PageHeader';
import FooterItem from '../../components/FooterItem';


import './styles.css';
import BoxItem from '../../components/BoxItem';

function Contact() {
  return (    
    <div id="page-contact" className="container">
       <PageHeader />
       
       <main>
         <BoxItem
         title="Contato"
          paragraph1="Entre em contato conosco através do formulário abaixo ou 
          mande-nos um e-mail para contato.apaadp@gmail.com. Responderemos o 
          mais breve possível ;D.">

         </BoxItem>
       </main>

       <div>
        <FooterItem/>
      </div>
      
    </div>
    
  )
}

export default Contact;