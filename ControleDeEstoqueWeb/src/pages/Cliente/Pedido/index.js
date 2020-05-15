import React from 'react';

import Media from './../../../media/media.png';
import { Container, Voltar, Logo } from './PedidoStyle';

function Pedido(){

    return(
        <Container>
            <Logo src={Media}/>
            <h1>Home do Cliente</h1>
            <br /><br /><br />
            <Voltar to="/conta"> Voltar </Voltar>
        </Container>
    )

}

export default Pedido;