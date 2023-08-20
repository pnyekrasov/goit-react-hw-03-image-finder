import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1
h2,
h3,
p {
  margin: 0;
}

ul { 
    margin: 0;
    padding: 0;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

/* button {
  display: block;
  padding: 4px 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #eef0f2;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #fdfdfe;
}

button:hover {
  color: #fff;
  background-color: #2d66c3;
} */



`;
