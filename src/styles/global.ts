import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --bg: #F3F5FA;
    --text-primary: #666666;
    --text-secondary: #326C99;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


  }


  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: var(--text-primary);
    background: var(--bg) }
`;
