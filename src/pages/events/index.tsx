import React from 'react';


import PageHeader from '../../components/PageHeader';
import BoxItem from '../../components/BoxItem';
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
         </BoxItem>

         <BoxItem
         title="TEA e os Desafios Advindos da Quarentena"
         paragraph1="Bate papo on-line com Bárbara Delabary">           
         </BoxItem>
       </main>

      <div>
        <FooterItem/>
      </div>

    </div> 
  )
}

export default Events;