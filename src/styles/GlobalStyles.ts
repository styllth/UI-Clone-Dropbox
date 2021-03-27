import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input {
    font-family: Roboto, sans-serif;
  }
  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-tertiary: #fff;
    --color-quaternary: #000;

    --color-blue: #0061ff;
    --color-gray: #acacaca1;
    --color-border: #bdc4c9;

    --color-input-border: #d9d9d9;
    --color-input-background: #d9d9d9;
    --color-input-checkbox-label: #637381;

  }

  a {
    color: var(--color-blue);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
