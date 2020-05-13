import styled from 'styled-components';


const ContainerSafearea = styled.SafeAreaView`
    flex:1; 
    background-color: ${props => props.backColor || 'white'};;
    text-align:center;
    justify-content:${props => props.justify || 'center'};
    align-items:center;
    width:100%;
    height:100%;
    padding:0px 33px;
`;

const Card = styled.View`
    justify-content:center;
    background-color: ${props => props.backColor || 'white'};;
    align-items:center;
    border-radius:5px;
    background-color:#FFFF;
    elevation:1;
    width:80%;
    margin:10px
    padding: ${props => props.pading || "0px 0px"};

`

const FooterArea = styled.View`
    position:absolute;
    bottom:30px;
    height: auto;
    justify-content:flex-end;
    align-self:center;
`


export {ContainerSafearea,Card,FooterArea};