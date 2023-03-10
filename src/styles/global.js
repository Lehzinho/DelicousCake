import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    -webkit-font-smoothing: antialiased;
}
body, input, button, textarea{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1rem;
    outline: none;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
botton, a{
    cursor: pointer;
    transition: filter 0.2s;
}
button:hover, a:hover{
    filter: brightness(0.9)
}
`;
