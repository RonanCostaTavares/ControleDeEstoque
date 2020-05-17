import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './../../../firebase';

import {  White, Form } from './Style';

function RedefinirSenha(){

    const [email, setEmail] = useState('');


    function forgot(event){
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => { alert('✔️ Link para redefinição de senha enviado ao E-mail informado!') })
            .catch(error => { errorMessage(error)});

        event.preventDefault();
    }

    function errorMessage(error){
        return error.code === 'auth/user-not-found' ? alert('❌ O email informado não está cadastrado!') : alert('❌ Por favor, digite um email válido!');
    }

    return(
            <White>
                <h2> Enviar link de recuperação </h2>
                <br />
                <Form>
                    <input type="email" onChange={ e => {setEmail(e.target.value)} } autoFocus placeholder="Seu Email" required/>
                    <br /><br />
                    <button onClick={forgot}> Enviar </button>
                </Form>
            </White>
    );  
}

export default withRouter(RedefinirSenha);