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
        .catch(error => {  errorMessage(error) });

        banco();
        event.preventDefault();
    }

    function errorMessage(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('❌ Email já cadastro!');
        } else if(error.code === 'auth/invalid-email'){
            alert('❌ Email inválido!');
        } else if(error.code === 'auth/weak-password'){
            alert('❌ Senha fraca!');
        }
    }

    function mascara_cpf(){
        let cpf = document.getElementById('cpf');
        if (cpf.value.length === 3 || cpf.value.length === 7) {
            cpf.value += "."
        } else if (cpf.value.length === 11) {
            cpf.value += "-"
        }
    }

    return(
            <White>
                <h2> Cadastre-se </h2>
                <br />
                <Form onSubmit={cadastrar}>
                    <input type="text" onChange={ e => setNome(e.target.value) } autoFocus placeholder="Nome" required minLength="10"/>
                    <br />
                    <input type="text" id= "cpf" onChange={ e => setCpf(e.target.value) } placeholder="CPF (apenas números)" required onKeyUp={mascara_cpf} minLength="14" maxLength="14"/>
                    <br />
                    <input type="text" onChange={ e => setEndereco(e.target.value) } placeholder="Endereço" required minLength="10"/>
                    <br />
                    <input type="email" onChange={e => setEmail(e.target.value) } placeholder="Email" required minLength="11"/>
                    <br />
                    <input type="password" onChange={ e => setPassword(e.target.value) } placeholder="Senha (8 a 16 caracteres)" required minLength="8" maxLength="16"/>
                    <br /><br />
                    <button type="submit" > Cadastrar </button>
                </Form>
            </White>
    );  
}

export default withRouter(Cadastro);