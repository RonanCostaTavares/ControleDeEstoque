import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 650px;
    height: 650px;
`;

export const Opcoes = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: white;
    color: black;
    text-decoration: none;
    border: groove;
    border-width: 1.5px;
    border-color: grey;
    font-family: bold;
    &:hover { 
        background-color: lightgreen;
    }
`;
