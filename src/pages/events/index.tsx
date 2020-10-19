import React from 'react';

import PageHeader from '../../components/PageHeader';
import BoxItem from '../../components/BoxItem';
import YoutAvancos from '../../assets/images/YoutAvancos.png';
import YoutTea from '../../assets/images/YoutTea.png';
import FooterItem from '../../components/FooterItem';


import './styles.css';


function Events() {
  return (
    <div id="page-events" className="container">
       <PageHeader />

       <main>
         <BoxItem
         title="Inclusão Social - Avanços e Desafios"
         paragraph1="Bate papo on-line sobre Inclusão Social">
            <div className="box-video">
                <a
                  target="_blank" 
                  rel = "noopener noreferrer"
                  href="https://www.facebook.com/watchparty/607360153479565/">
                  <img src={YoutAvancos} alt="live" className="youtube"/>
                </a>
            </div>    
         </BoxItem>

         <BoxItem
         title="TEA e os Desafios Advindos da Quarentena"
         paragraph1="Bate papo on-line com Bárbara Delabary">
            <div className="box-video">
                <a
                  target="_blank" 
                  rel = "noopener noreferrer"
                  href="https://www.facebook.com/100037312303217/videos/310616856858722/">
                  <img src={YoutTea} alt="live" className="youtube"/>
                </a>
            </div>          
         </BoxItem>
       </main>

      <div>
        <FooterItem/>
      </div>

    </div> 
  )
}

export default Events;