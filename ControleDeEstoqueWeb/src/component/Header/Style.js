import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 930px;
    min-height: 6vh;
    border: none;
    border-bottom: solid;
    border-width: 3px;
    margin: 0 auto;
`;

export const Nav = styled.nav`
    
`;

export const Items = styled(Link)`
    padding: 0 25px;
    font-size 1.5rem;
    font-family: bold;
    text-decoration: none;
    color: black;
`;