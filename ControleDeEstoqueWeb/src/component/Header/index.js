import React from 'react';

import { Navbar, Items } from './Style';

function Header() {

    return (
        <Navbar>
            <nav>
                <Items to="/"> Bar da Piscina </Items>
                <Items to="/conta"> Entrar </Items>
            </nav>
        </Navbar>
    );

}

export default Header;