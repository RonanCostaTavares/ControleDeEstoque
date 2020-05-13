import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Header & Footer
import Header from './component/Header';
import Footer from './component/Footer';

// Login, Cadastro e esqueci a senha
import Conta from './pages/Conta';

// Cliente
import Home from './pages/Cliente/Home';
import Pedido from './pages/Cliente/Pedido';
import { autenticado } from './pages/Cliente/Autenticado';

// Administrador
import Admin from './pages/Administrador/Admin';
import Comanda from './pages/Administrador/Comanda';
import Estoque from './pages/Administrador/Estoque';
import Fechamento from './pages/Administrador/Fechamento';
import Perfil from './pages/Administrador/Perfil';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        autenticado() ? (
            <Component {...props}/>
        ) :
            <Redirect to={{pathname: "/conta", state: { from: props.location }}}/>
    )}/>
)

const Routes = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = "/" component = { Home } />
                <Route exact path = "/conta" component = { Conta } />
                <PrivateRoute exact path = "/cliente/home" component = { Pedido } />
                <Route exact path = "/admin/home" component = { Admin } />
                <Route exact path = "/admin/comanda" component = { Comanda } />
                <Route exact path = "/admin/estoque" component = { Estoque } />
                <Route exact path = "/admin/fechamento" component = { Fechamento } />
                <Route exact path = "/admin/perfil" component = { Perfil } />
            </Switch>
            <Footer />
        </BrowserRouter>
    );

}

export default Routes;