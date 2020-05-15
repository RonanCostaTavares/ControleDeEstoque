import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import firebase from './../../../firebase';

import { White, Form } from './Style';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        firebase.auth().signOut();
    }, []);

    function logar(event){
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => { props.history.replace("/cliente/home") })
        .catch(error => { console.log(error.code)});

        event.preventDefault();
    }

    return (
            <White>
                <h2> Faça Login </h2>
                <br />
                <Form>
                    <input type="email" onChange={e => setEmail(e.target.value) } autoFocus placeholder="Seu Email"/>
                    <br />
                    <input id="senha" type="password" onChange={ e => setPassword(e.target.value) } placeholder="Sua Senha"/>
                    <br /><br />
                    <button onClick={logar} > Login </button>     
                </Form>
            </White>
    );

}

export default withRouter(Login);