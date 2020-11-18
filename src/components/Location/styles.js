import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items: flex-start;
 color: #E4E4E4;
 margin-bottom: 1rem;

  h4 {
    margin-top: 1rem;
    margin-left: 2rem;
  }

  .location_map {
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-left: 2rem;
  }

  img {
    border-radius: 1rem;
    width: 79vw;
  }

  .rote_maps {
    border-radius: 0.9rem;
    align-items: center;
    text-align: center;
    width: 79vw;
    height: 3.2vh;
    background: #92fc57;
    z-index: 2;
    margin-top: -2.3rem;
    margin-left: 2rem;
  }

  .rote_maps a {
    line-height: 24px;
    color: #484747;
    text-decoration: none;
  }


  @media (min-width: 700px) {
    flex-direction: column;

    p {
      margin-left: 0rem;
    }

    .information {
      display: flex;
      flex-direction: row;
    }

    .address {
      width: 28rem;
      margin-right: 2rem;
    }

    .opening_hours {
      width: 26rem;
      margin-left: 2rem;
    }

    .location_map {
      z-index: 1;
    }

    img {
      width: 40vw;
      height: 33vh;
    }

    .rote_maps {
      width: 40vw;
      height: 3vh;
    }

  }`;
