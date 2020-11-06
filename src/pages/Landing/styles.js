import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'Acme';
   background: white;

  .first-line {
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }

  .text {
     display: flex;
     flex-direction: column;
     align-items: center;
   }

   h1 {
     font-size: 60px;
     color: #182B8E;
   }

   h4 {
     font-size: 20px;
     color: #182B8E;
   }

   h4:first-of-type {
    color: #4147C0;
   }

   h1, h4 {
     margin: 0;
   }

   img {
     margin-top: 2rem;
     height: 20rem;
   }

  button {
     margin-top: 30px;
     font-family: 'Acme';
     color: #4147C0;    
     background: #EFCA32;
     width: 200px;
     height: 45px;
     border-radius: 12px;
     border: 0;
     display: flex;
     align-items: center;
     justify-content: center;

     a {
       font-size: 30px;
       color: #4147C0;
       text-decoration: none;
     }
   }

   @media (min-width: 700px){
    .first-line{
      justify-content: space-evenly;
      flex-direction: row;
    }

    h1 {
     font-size: 140px;
    }

    h4 {
     font-size: 30px;
    }

    img {
      height: 40rem;
    }

    button {
     margin-top: 60px;
     font-size: 64px;
     width: 370px;
     height: 66px;
     
      a {
       font-size: 65px;
       text-decoration: none;
      }
    }
   }

 `; 