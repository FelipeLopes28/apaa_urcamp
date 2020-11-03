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

  @media (min-width: 700px){
    flex-direction: row;

    p {
      margin-left: 1rem;
    }

    .address{
      width: 28rem;
    }

    .opening_hours{
      width: 26rem;
      margin-left: 1rem;
    }
  }

  
`;
