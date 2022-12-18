import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body,
    html,
    #root {
        height: 100%;
        background-image: url('./Assets/green-bg.png');
        background-repeat: no-repeat;
        background-size: cover;

    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a,
    a:hover {
        color: inherit;
    }
`;
