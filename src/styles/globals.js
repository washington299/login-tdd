import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :root {
        --black: #000000;
        --white: #ffffff;
        --gray: #cccccc;
        --red: #f00000;

        --primary-color: #eeeeee;
        --secondary-color: #448BCB;

        --extra-small-size: 0.5rem;
        --small-size: 1rem;
        --medium-size: 1.5rem;
        --large-size: 2rem;
        --extra-large-size: 2.5rem;
    }
`;