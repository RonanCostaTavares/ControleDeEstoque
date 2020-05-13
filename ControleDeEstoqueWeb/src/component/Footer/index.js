import React, { Component } from 'react';

import { Rodape, Copyright,  Nav, Items } from './FooterStyle';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Rodape>
                <Copyright to="#">Copyright</Copyright>
                <Nav>
                    <Items to="#">Teste 1</Items>
                    <Items to="#">Teste 2</Items>
                </Nav>
            </Rodape>
        );
    }

}

export default Footer;