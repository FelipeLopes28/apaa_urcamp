import React from 'react';

import PageHeader from '../../components/PageHeader';
import BoxItem from '../../components/BoxItem';
import FooterItem from '../../components/FooterItem';

import './styles.css';


function Home() {
  return (
    <div id="page-home" className="container">
       <PageHeader />
       <main>
         <BoxItem 
          title="Começamos assim..."
          paragraph1="&nbsp;&nbsp;&nbsp;&nbsp;A Associação de Pais e Amigos dos Autistas de Dom Pedrito, 
              teve seu início através de um grupo de mães que possuem filhos 
              em diferentes idades que são portadores do Espectro Autista - TEA.
              Há a necessidade de se trocar experiências,  e conversar sobre assuntos variados. 
              As reuniões começaram em março de 2010, com um pequeno grupo de mães." 
              
            paragraph2="&nbsp;&nbsp;&nbsp;&nbsp;No decorrer dos meses a APAA foi crescendo, seguimos com nossas reuniões, 
              que acontecem em locais cedidos pela prefeitura, encontrando mais famílias com autismo, 
              a cada nova reunião chegava uma nova mãe e assim gradativamente ganhamos mais força e determinação 
              para montarmos uma Associação que representasse nossa luta diária com nossos filhos. Hoje a APAA tem 
                43 famílias cadastradas."
              
            paragraph3="&nbsp;&nbsp;&nbsp;&nbsp;O principal motivo de se formar a APAA foi a falta de uma entidade  apropriada  
              para tratar especificamente dos portadores de TEA pois este influencia significamente a vida das crianças 
              afetadas e de suas famílias pela necessidade de diversos serviços educacionais, de saúde e entre outros.">
          </BoxItem>

         <BoxItem 
          title="O que é TEA?"
          paragraph1="&nbsp;&nbsp;&nbsp;&nbsp;Transtorno do Espectro do Autismo (TEA) – CID 10 - F 84.0,  é uma condição de saúde caracterizada 
              por déficit na comunicação social (socialização e comunicação verbal e não verbal) e comportamento 
              (interesse restrito e movimentos repetitivos). Não há só um, mas muitos subtipos do transtorno. 
              Tão abrangente que se usa o termo “ESPECTRO” pelos vários níveis de comprometimento — há desde pessoas com 
              outras doenças e condições associadas (comorbidades), como deficiência intelectual e epilepsia, até pessoas 
              independentes, com vida comum, algumas nem sabem que são autistas, pois jamais tiveram diagnóstico."
            paragraph2="&nbsp;&nbsp;&nbsp;&nbsp;A ONU (Organização das Nações Unidas), no fim de 2007, definiu todo 2 de abril como sendo o Dia Mundial de 
              Conscientização do Autismo (no original em inglês: World Autism Awareness Day). Vários eventos, palestras e 
              caminhadas são realizadas em alusão à data, em todo o Mundo.">
          </BoxItem>
       </main>
       <div>
          <FooterItem/>
       </div>
    </div>    
  )
}

export default Home;