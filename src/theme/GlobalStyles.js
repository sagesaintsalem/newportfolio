import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    margin: 0;
    transition: all 0.50s linear;
  }

  a {
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    font-family: ${({ theme }) => theme.font};
    box-shadow: ${({ theme }) => theme.colors.button.boxshadow};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }

  section {
    background-color: ${({ theme }) => theme.colors.section.background};
    color: ${({ theme }) => theme.colors.section.text};
    transition: all 0.50s linear;
  }

  

`;