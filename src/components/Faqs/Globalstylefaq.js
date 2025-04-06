// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Import the Google Font here */
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

  :root {
    --primary_text-very-dark-desaturated-blue: hsl(238, 29%, 16%);
    --primary_text-soft-red: #66a109;
    --primary_bg-soft-violet: #66a109;
    --primary_bg-soft-blue: #66a109;
    --neutral_text-very-dark-grayish-blue: hsl(237, 12%, 33%);
    --neutral_text-dark-grayish-blue: hsl(240, 6%, 50%);
    --dividers_light-grayish-blue: hsl(240, 5%, 91%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 12px;
    width: 100%;
    height: 100vh;
  }
`;
