import React from 'react';
import { Container } from './styles';

function Map() {

  return (
    <Container>
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

      {/* <div className="map">
        <h4>Mapa aqui</h4>
      </div> */}

    </Container>
  );
}

export default Map;

