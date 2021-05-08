import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
html{
  box-sizing: border-box;
  font-size: 62.2%;
}
body {
  --bg: #eeee;
  --primaryText: #1B1D20;
  --secondaryText: #777;
  --TooglerBg: #181825;
  --starBg: #AFAFAF;
  background-color: var(--bg);
  color: var(--primaryText);
  font-size: 1.6rem;
}
body.dark {
  -webkit-font-smoothing: antialiased;
  --bg: #181825;
  --primaryText: #DBDBDB;
  --secondaryText: #9d9d9d;
  --TooglerBg: #e8e8e8;
  --starBg: #000;
}
`;
