import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

    #app {
    min-height: 100%;
    min-width: 1280px;
    background-color: #EBEFF2;
    color: #333333;
  }
  body,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form {
    margin: 0;
  }
  ol, li, ul {
    margin: 0;
    padding: 0;
  }
  input,
  button {
    outline: none;
  }
  hr {
    display: none;
  }
  span {
    -webkit-appearance: none !important;
  }
  li {
    list-style:none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
      -webkit-appearance: none !important;
      margin: 0; 
  }
  input[type="number"]{-moz-appearance:textfield;}
`;
