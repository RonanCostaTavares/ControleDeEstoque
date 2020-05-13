import React, { Component } from 'react';

import { Container, Voltar } from './PedidoStyle';

class Pedido extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                Fazer pedido
                <br /><br /><br />
                <Voltar to="/conta"> Voltar </Voltar>
            </Container>
        );
    }

}

export default Pedido;