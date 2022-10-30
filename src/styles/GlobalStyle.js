import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    
    body{
        font-family: Arial, Helvetica, sans-serif;
        background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    }

    
    input {
        background-color: #eee;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ddd;
        margin: 10px 0 5px 0;
        padding: 20px;
        box-sizing: border-box;

        :focus {
            outline: none;
            box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        }
    }
`