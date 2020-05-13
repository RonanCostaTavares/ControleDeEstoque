import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    min-height: 90vh;
`;

export const Verify = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    text-align: start;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Logo = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 125px;

`;

export const Titulo = styled.h3`
    color: black;
    margin: 0;
`;

export const Input = styled.input`
    text-align: start;
    display: flex;
    outline: none;
    border: none;
    border-bottom: groove;
    border-width: 1px;
    padding-top: 5px;
`;

export const Btn = styled(Link)`
    border: solid 1px;
    background-color: #efefef;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 6px 10px;
    text-decoration: none;
    border-radius: 4px;
    color: black;
`;

export const Rodape = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Redirect = styled.p`
    font-size: 0.8rem;
    color: black;
    margin: 0 auto;
    text-decoration: none;
    cursor: pointer;
    &:hover { 
        color: red;
    }
`;

