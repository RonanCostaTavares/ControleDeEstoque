import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    min-height: 90vh;
`;

export const Btn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 0.8rem;
    padding: 5px 0;
    margin: 0 auto;
    font-weight: bold;
    border-radius: 4px;
    color: #000;
    transition: 0.3s;
    
    &:hover{
        color: red;
    }
    
    &#Redefinir{
        border: none;
        background-color: transparent;
        font-size: 0.8rem;
        padding: 18px 0;
        margin: 0 auto;
        font-weight: bold;
        border-radius: 4px;
        color: #000;
        transition: 0.3s;

        &:hover{
            color: red;
        }
    }

        
`;

export const DivBtn = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

`;

export const Logo = styled.img`
    height: 250px;
    border-radius: 50%;
`;