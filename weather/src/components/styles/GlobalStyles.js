import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Open Sans', sans-serif !important;
  text-decoration: none !important;
}
#root{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://wallpapercave.com/wp/wp3223743.jpg');
}
`;
export default GlobalStyle;
