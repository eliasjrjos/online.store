import { createGlobalStyle } from 'styled-components';
import { devices } from './media-queries';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 60px;

        @media ${devices.tablet} {
            padding: 15px;
        }

        @media ${devices.mobile} {
            padding: 10px;
        }
    }
  
    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box
    }
`;