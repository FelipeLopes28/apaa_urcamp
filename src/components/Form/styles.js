import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items: center;

  h3 {
    color: #464749;
  }
  button {
    width: 160px;
    background-color: #91fc56;
    border: none;
    color: white;
    border-radius: 5px;
    height: 30px;
    margin-bottom: 30px;
  }

  input {
    height: 40px;
  }

  textarea {
    height: 60px;
  }

  input, textarea {
    width: 300px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #7ec9f3;
    border: none;
  }
  
`;
