import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { medias } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${medias.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${medias.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${medias.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${medias.mobile} {
            display: block;
        }
    }
`;