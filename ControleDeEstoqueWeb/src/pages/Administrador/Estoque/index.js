import React, { Component } from 'react';

import { Container, Back } from './EstoqueStyle';

class Estoque extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Back to="/admin/home"> Voltar </Back>
            </Container>
        );
    }

}

export default Estoque;