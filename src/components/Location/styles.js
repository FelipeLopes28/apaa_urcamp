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
    margin-left: 3rem;
  }

  p {
    margin-left: 2rem;
  }

  .rote_maps{
    border-radius: 0.8rem;
    align-items: center;
    text-align: center;
    width: 75vw;
    height: 3.2vh;
    background: #92fc57;
    z-index: 2;
    margin-top: -22rem;
    margin-left: 3rem;
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
      margin-left: 1rem;
    }

    .information{
      display: flex;
      flex-direction: row;
    }
    .address{
      width: 28rem;
    }

    .opening_hours{
      width: 26rem;
      margin-left: 1rem;
    }

    .location_map{
      z-index: 1;
    }

    .rote_maps{
      width: 39.2vw;
      height: 3vh;
      /* margin-top: -3rem; */
    }

  }`;
