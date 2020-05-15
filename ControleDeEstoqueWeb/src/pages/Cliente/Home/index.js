import React from 'react';
import { withRouter } from 'react-router-dom';
import Media from './../../../media/media.png';
import { Container, Logo } from './HomeStyle';


function Home(){
    
    return (
        <Container>
            <Logo src={ Media } alt=""/>
        </Container>
    );
} 

export default withRouter(Home);
