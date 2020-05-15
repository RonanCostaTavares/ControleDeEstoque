import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './../../../firebase';

import {  White, Form } from './Style';

function RedefinirSenha(){

    const [email, setEmail] = useState('');


    function forgot(event){
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => { alert('✔️ Link para redefinição de senha enviado ao E-mail informado!') })
            .catch(error => { console.log(error.code)});

        event.preventDefault();
    }

    return(
            <White>
                <h2> Enviar link de recuperação </h2>
                <br />
                <Form>
                    <input type="email" onChange={ e => {setEmail(e.target.value)} } autoFocus placeholder="Seu Email"/>
                    <br /><br />
                    <button onClick={forgot}> Enviar </button>
                </Form>
            </White>
    );  
}

export default withRouter(RedefinirSenha);