import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: 'Open Sans', sans-serif;
}
#root{
  margin:0;
  padding: 0;
}

body{
  overflow: overlay;
}

::-webkit-scrollbar {
  width: 0.5vw;
}

::-webkit-scrollbar-track {
  background-color: rgba(00, 00, 00, 0.5);
}

::-webkit-scrollbar-thumb {
  background: #232323;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #121212;
  border-color: black;
  border-width: 5px;
}

`

export default GlobalStyle;