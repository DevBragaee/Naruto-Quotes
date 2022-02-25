// importando o template string "createGlobalStyle" do Styled-components
import { createGlobalStyle } from 'styled-components';
import cbImage from '../../images/bg.jpeg';
/* Criando a constante "estilo global" ,que formatarar o body da pagina */
export const GlobalStyle = createGlobalStyle`
 
  body {
    background: url(${cbImage}) center no-repeat;  
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;
