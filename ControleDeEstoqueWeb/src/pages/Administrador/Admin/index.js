import React, { Component } from 'react';

import { Container, Menu, Opcoes } from './AdminStyle';


class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Menu>
                    <Opcoes to="/admin/comanda">Comanda</Opcoes>
                    <Opcoes to="/admin/estoque">Estoque</Opcoes>
                    <Opcoes to="/admin/fechamento">Fechamento</Opcoes>
                    <Opcoes to="/admin/perfil">Perfil</Opcoes>
                </Menu>
            </Container>
        );
    }

}

export default Admin;