import React, { Component } from 'react';

import { Navbar, Items } from './HeaderStyle';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Navbar>
                <nav>
                    <Items to="/"> Bar da Piscina </Items>
                    <Items to="/conta"> Entrar </Items>
                </nav>
            </Navbar>
        );
    }

}

export default Header;