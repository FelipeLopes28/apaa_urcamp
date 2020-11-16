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

  /* p {
    margin-left: 0rem;
  } */

  /* .address{
      width: 33.5rem;
    } */

  .rote_maps{
    border-radius: 0.8rem;
    align-items: center;
    text-align: center;
    width: 79vw;
    height: 3.2vh;
    background: #92fc57;
    z-index: 2;
    margin-top: -22rem;
    margin-left: 2rem;
  }

  .rote_maps a{
    line-height: 24px;
    color: #484747;
    text-decoration: none;
  }

  .location_map{
      z-index: 1;
    }

  @media (min-width: 700px){
    flex-direction: column;

    p {
      margin-left: 0rem;
    }

    .information{
      display: flex;
      flex-direction: row;
    }
    .address{
      width: 28rem;
      margin-right: 2rem;
    }

    .opening_hours{
      width: 26rem;
      margin-left: 2rem;
    }

    .location_map{
      z-index: 1;
    }

    .rote_maps{
      width: 39.2vw;
      height: 3vh;
    }

  }`;
