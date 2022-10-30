import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const FormContent = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #FFF;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`
export const TitleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
`

export const Select = styled.select`
    width: 100%;
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    box-sizing: border-box;
`

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        background-color: #AE8CD4;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        border: 0;
        border-radius: 5px;
        height: 50px;
        width: 55%;
        padding: 0 20px;
        cursor: pointer;
        box-sizing: border-box;
    }
`
export const Alert = styled.small`
    color: red;
`

export const IputContent = styled.div`
    margin-bottom: 10px;
`