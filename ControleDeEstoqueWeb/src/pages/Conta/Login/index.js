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
        .catch(error => { errorMessage(error)});

        event.preventDefault();
    }

    function errorMessage(error){
        if(error.code === 'auth/invalid-email'){
            alert('❌ Email inválido!');
        } else if( error.code === 'auth/user-not-found'){
            alert('❌ O email informado não está cadastrado');
        } else if (error.code === 'auth/wrong-password'){
            alert('❌ Senha incorreta!');
        }
    }

    return (
            <White>
                <h2> Faça Login </h2>
                <br />
                <Form>
                    <input type="email" onChange={e => setEmail(e.target.value) } required placeholder="Seu Email" autoFocus/>
                    <br />
                    <input type="password"  onChange={ e => setPassword(e.target.value) } required placeholder="Sua Senha" id="senha"/>
                    <br /><br />
                    <button onClick={logar} > Login </button>     
                </Form>
            </White>
    );

}

export default withRouter(Login);