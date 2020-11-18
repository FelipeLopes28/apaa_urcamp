import React from "react";

import PageHeader from "../../components/PageHeader";
import FooterItem from "../../components/FooterItem";
import Location from "../../components/Location";
import BoxItem from "../../components/BoxItem";

import "./styles.css";

function Contact() {
  return (
    <div id="page-contact" className="container">
      <PageHeader />

      <main>
        <BoxItem
          title="Contato"
          paragraph1="&nbsp;&nbsp;&nbsp;&nbsp;Envie uma mensagem pra gente pelo
          número abaixo ou um e-mail para apaadp@gmail.com.
          Responderemos o mais breve possível ;D."
        >
          <Location />
        </BoxItem>
      </main>

      <div>
        <FooterItem />
      </div>
    </div>
  );
}

export default Contact;
