import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

:root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-gray-light: #c7c7c7;
    --color-gray-normal: #8f8f8f;
    --color-gray-dark: #4f4f4f;
    --color-orange-light: #f3b664;
    --color-orange-dark: #ec8f5e;
    --color-yellow-light: #f1eb90;
    --color-yellow-normal: #ebe363;
    --color-green: #9fbb73;
}

*, *::before, *::after {
    box-sizing: border-box;
}

a:link {
    text-decoration: none;
}
a, a:visited, a:active {
color: inherit
}

html {
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -webkit-text-adjust: none;
    overflow-y: scroll; // 스크롤 생겨도 밀려나지 않게
}

body {
    font-family: Gmarket, snas-serif, Arial;
    color: var(--color-gray-dark);
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
