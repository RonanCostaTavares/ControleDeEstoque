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

export const Back = styled(Link)`
    font-size: 1.8rem;
    color: black;
    margin: 0 auto;
    text-decoration: none;
    &:hover { 
        color: red;
    }
`;