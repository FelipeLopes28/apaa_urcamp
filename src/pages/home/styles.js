import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  font-family: 'Acme';

  .first-line {
    display: flex;
    margin: 0 79px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 160px;
    color: #182B8E;
  }
  h4 {
    font-size: 30px;
    color: #182B8E;
  }

  h4:first-of-type {
    color: #4147C0;
  }

  h1, h4 {
    margin: 0;
  }

  a {
    font-size: 64px;
    font-family: 'Acme';
    color: #4147C0;
  }

  button {
    background: #EFCA32;
    width: 370px;
    height: 66px;
    border-radius: 18px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;