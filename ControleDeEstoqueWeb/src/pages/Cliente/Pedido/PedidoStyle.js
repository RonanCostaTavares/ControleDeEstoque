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

export const Voltar = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
`;

export const Logo = styled.img`
    height: 250px;
    border-radius: 50%;
`;