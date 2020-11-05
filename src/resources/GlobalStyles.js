import { createGlobalStyle } from "styled-components";
import { Colors } from "../resources/Colors";

export const GlobalStyles = createGlobalStyle`
html {
  font-family: RobotoCondensed, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}
button {
  background: transparent;
  border: 0;
  outline: 0;
}

body {
  height: 100vh;
  margin: 0 auto;
  overscroll-behavior: none;
  width: 100%;
  font-size: 1.6rem;
  background-color: ${Colors.black};
  color: ${Colors.white}
}

::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}
`;
