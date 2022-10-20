import styled, { createGlobalStyle } from 'styled-components';
//import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    /* * {
        box-sizing: border-box;
    }
    a {
        all: unset;
    } */
    body{
        -ms-overflow-style: none;
        margin:0px;
        background-color: rgb(248,248,250);
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const BackCenter = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;
