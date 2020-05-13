import React, { Component } from 'react';

import Media from './../../../media/media.png';
import { Container, Logo } from './HomeStyle';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Logo src={ Media } alt=""/>
            </Container>
        );
    }

}

export default Home;