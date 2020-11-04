import React from 'react';
import ReactPlayer from 'react-player';

import PageHeader from '../../components/PageHeader';
import BoxItem from '../../components/BoxItem';
// import YoutAvancos from '../../assets/images/YoutAvancos.png';
// import YoutTea from '../../assets/images/YoutTea.png';
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
                <ReactPlayer                
                url="https://www.facebook.com/apaa.dp/videos/312769286643479"
                controls
                />                
            </div>    
         </BoxItem>

         <BoxItem
         title="TEA e os Desafios Advindos da Quarentena"
         paragraph1="Bate papo on-line com Bárbara Delabary">
            <div className="box-video">
            <ReactPlayer                
                url="https://www.facebook.com/100037312303217/videos/310616856858722/"
                controls
                />  
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