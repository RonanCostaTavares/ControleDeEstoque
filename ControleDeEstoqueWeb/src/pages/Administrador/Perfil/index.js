import React, { Component } from 'react';

import { Container, Back } from './PerfilStyle';

class Perfil extends Component {

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

export default Perfil;