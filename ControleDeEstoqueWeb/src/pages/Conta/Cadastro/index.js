import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './../../../firebase';

import { Form, White } from './Style';

function Cadastro(props) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [endereco, setEndereco] = useState('');

    useEffect(() => {
        firebase.auth().signOut();
    }, []);

    function banco(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.database().ref('Users').child(user.uid).set({
                    uid: user.uid,
                    nome: nome,
                    cpf: cpf,
                    email: email,
                    endereco: endereco
                })
            }
        });
    }

    function cadastrar(event){
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => alert('Cadastrado com sucesso!'))
        .catch(error => { alert('Código de erro:' + error.code) });

        banco();
        event.preventDefault();
    }

    return(
            <White>
                <h2> Cadastre-se </h2>
                <br />
                <Form onSubmit={cadastrar}>
                    <input type="text" onChange={ e => setNome(e.target.value) } autoFocus placeholder="Seu nome"/>
                    <br />
                    <input type="text" onChange={ e => setCpf(e.target.value) } placeholder="Seu CPF"/>
                    <br />
                    <input type="text" onChange={ e => setEndereco(e.target.value) } placeholder="Seu Endereço"/>
                    <br />
                    <input type="email" onChange={e => setEmail(e.target.value) } placeholder="Seu Email"/>
                    <br />
                    <input type="password" onChange={ e => setPassword(e.target.value) } placeholder="Sua Senha"/>
                    <br /><br />
                    <button type="submit" > Cadastrar </button>
                </Form>
            </White>
    );  
}

export default withRouter(Cadastro);