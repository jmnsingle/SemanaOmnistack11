import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }
  html, body,  #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dddce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    resize: vertical;
    min-height: 140px;
    color: #333;
    border: 1px solid #dddce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }

  .button {
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    /* border: 0; */
    border: ${props => props.theme.title === 'light' ? 0 : '2px solid #fff'};
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    /* text-decoration: none; */
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.3s;
    transition: border-color 0.3s;
  }

  .button:hover {
    filter: brightness(90%);
    border-color: #666;
  }

  .back-link {
      font-size: 18px;
      font-weight: 500;
      color: ${props => props.theme.colors.text};
      margin-top: 40px;
      transition: opacity 0.3s;

      display: flex;
      align-items: center;
    }

    .back-link:hover {
      opacity: 0.8;
    }

    .back-link svg {
      margin-right: 10px;
    }
`;
