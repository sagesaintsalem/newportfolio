import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: #000000;
    color: #FFFFFF;
    font-family: "Heebo", sans-serif;
    margin: 0;
    transition: all 0.50s linear;
  }

  a {
    cursor: pointer;
    text-decoration: bold;
    color: #c4b5fd;
  }

  a::hover {
    text-decoration: underline;
  }

  a:visited {
    color: #86efac;
  }

  // button {
  //   border: 0;
  //   display: inline-block;
  //   padding: 6px 12px;
  //   font-size: 18px;
  //   border-radius: 4px;
  //   margin-top: 5px;
  //   cursor: pointer;
  //   background-color: #c4b5fd;
  //   color: #000000;
  // }

  // button:hover {
  //   background-color: #E8E8FF;
  // }

  // button a {
  //   color: black;
  // }

  

  

  

`;