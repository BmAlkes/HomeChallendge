import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html,
body,
#root {
  height: 100%;
}

body{
    -webkit-font-smoothing:antialiased;
  background-size: cover;
  background-repeat: no-repeat;
}
body,input,textarea,button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size:1rem;
}
img{
    max-width: 100%;
}
a {
  text-decoration: none;
}
a:visited {
  color: inherit;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`;
