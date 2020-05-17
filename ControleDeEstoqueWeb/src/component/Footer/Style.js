import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Rodape = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 930px;
    height: 4vh;
    margin: 0 auto;
    border: none;
    border-top: solid;
    border-width: 2px;
`;

export const Copyright = styled(Link)`
    margin: 0;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: bold;
    color: black;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around; 
`;

export const Items = styled(Link)`
    padding: 0 10px;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: bold;
    color: black;
`;