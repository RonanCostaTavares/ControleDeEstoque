import React from 'react';

import { Rodape, Copyright,  Nav, Items } from './Style';

function Footer() {

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

export default Footer;