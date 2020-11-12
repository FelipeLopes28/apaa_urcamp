import styled from 'styled-components';

export const MapBox = styled.div`
  margin: 2rem 0rem 20rem 1rem;
  justify-content: center;

  .leaflet-container {
    width: 77%;
    height: 20vh;

    @media (min-width: 600px){
      width: 80%;

    }

    @media (min-width: 700px){
      width: 82%;

    }

    @media (min-width: 900px){
      width: 39.5%;
    }
}
`;
