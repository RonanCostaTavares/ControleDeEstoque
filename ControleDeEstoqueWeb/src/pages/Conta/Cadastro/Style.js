import styled from 'styled-components';

export const White = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 10px;

`;

export const Form = styled.form`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    input {
        text-align: start;
        display: flex;
        outline: none;
        border: none;
        border-bottom: groove;
        border-width: 1px;
        margin-bottom: 10px;
    }
    button {
        border: none;
        background-color: #efefef;
        font-weight: bold;
        font-size: 0.8rem;
        padding: 6px 10px;
        border-radius: 4px;
        color: black;
        margin: 0 auto;
    }
`;