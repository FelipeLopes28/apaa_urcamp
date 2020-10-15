import React from 'react';

import './styles.css'

import LogoSI from '../../assets/images/LogoSI.png'
import LogoUrcamp from '../../assets/images/LogoUrcamp.png'

function FooterItem(){
  return(
    <footer className="footer">
          <strong>
            <img src={LogoUrcamp} 
                  alt="LogoUrcamp" 
                  className="LogoUrcamp"/>

            <img src={LogoSI} 
                  alt="LogoSI" 
                  className="LogoSI"/>
          </strong>
        </footer>
  )
}

export default FooterItem;