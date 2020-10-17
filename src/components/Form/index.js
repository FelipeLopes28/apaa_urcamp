import React from 'react';
import {Container} from './styles';

 function Form() {
 
  return (
    <Container>
         <div>
           <h3>Nome Completo</h3>
           <input type="text" />
         </div>
         <div>
           <h3>E-mail</h3>
           <input type="text" />
         </div>
         <div>
           <h3>Mensagem</h3>
           <textarea />
         </div>
         <button>Enviar</button>
    </Container>
  );
}

export default Form;

