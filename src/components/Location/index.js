import React from 'react';
import { Container } from './styles';

import imgMap from '../../assets/images/mapa.jpg';


function Location() {
  return (
    <Container>
      <div className="information">
        <div className="address">
          <h4>Endereço:</h4>
          <p>
            Rua Moreira César, 1046, Prédio do INSS,
            segundo piso - Centro.
            Dom Pedrito - RS, 96450-000.
          </p>
        </div>

        <div className="telephone">
          <h4>Telefone:</h4>
          <p>
            (53) 9.9910.8065
          </p>
        </div>

        <div className="opening_hours">
          <h4>Horário de atendimento:</h4>
          <p>
            Segundas, quartas e sextas
            das 14h às 17h.
          </p>
        </div>
      </div>

      <div className="location_map">
        <img src={imgMap} alt="map" />
      </div>

      <footer className="rote_maps">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/dir/?api=1&destination=-30.9794647,-54.6715319`}>
          Ver rotas no Google Maps
        </a>
      </footer>

    </Container>
  );
}

export default Location;

