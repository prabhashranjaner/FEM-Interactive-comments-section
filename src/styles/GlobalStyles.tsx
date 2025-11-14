import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --col-purple:hsl(238, 40%, 52%);
        --col-pink:hsl(358, 79%, 66%);
        --col-purple-light: hsl(239, 57%, 85%);
        --col-pink-light:hsl(357, 100%, 86%);

        --col-gray-1:hsl(228, 33%, 97%);
        --col-gray-2: hsl(223, 19%, 93%);
        --col-gray-3:hsl(211, 10%, 45%);
        --col-gray-4: hsl(212, 24%, 26%):

    }
    
    *,*::after,*::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
         font-family: "Rubik", sans-serif;
         font-size: 16px;
         background-color: var(--col-gray-2);
         display: flex;
        justify-content: center;
        padding: 1rem;
        position: relative;
    }

    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;

        &:disabled{
            cursor: not-allowed;
            pointer-events: none;
        }
    }

    
`;

export default GlobalStyles;
