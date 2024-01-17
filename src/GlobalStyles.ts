import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

*, *::before, *::after {
    box-sizing: border-box;
}

a:link {
    text-decoration: none;
}
a:visited, a:active {
color: inherit
}

html {
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -webkit-text-adjust: none;
}

input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
}
input:focus {
    outline: none;
}

button {
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    text-align: inherit;
    background: none;
    box-shadow: none;
    padding: 0;
    cursor: pointer;
    border: none;
    color: inherit;
    font: inherit;
}

ol, ul, menu, summary {
    list-style: none;
}
`;

export default GlobalStyles;
