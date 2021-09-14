import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --black: #000000;
        --white: #ffffff;

        --primary-color: #eeeeee;
        --secondary-color: #448BCB;
    }
`;