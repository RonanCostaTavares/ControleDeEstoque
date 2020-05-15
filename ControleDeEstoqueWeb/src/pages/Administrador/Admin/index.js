import React from 'react';

import { Container, Menu, Opcoes } from './Style';

function Admin() {

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

export default Admin;