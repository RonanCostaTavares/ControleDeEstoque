import React, { Component } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from './../../firebase';
import Media from './../../media/media.png';

import { Container, Verify, Logo, Titulo, Input, Btn, Rodape, Redirect, Form } from './ContaStyle';

class Conta extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            senha: '',
            user: '',
            nome: '',
            cpf: '',
            uid: '',
            endereco: '',
            status: true,
            esqueci: true,

        };

        // funções Firebase
        this.logar = this.logar.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
        this.enviar = this.enviar.bind(this);
        this.auth = this.auth.bind(this);

        // Funções de apoio/validação
        this.escolha = this.escolha.bind(this);
        this.esquecido = this.esquecido.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
        this.mascara_cpf = this.mascara_cpf.bind(this);
    }

    componentDidMount() {
        this.auth();
        firebase.auth().signOut();
    }

    auth() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.database().ref('Users').child(user.uid).set({
                    uid: user.uid,
                    nome: this.state.nome,
                    cpf: this.state.cpf,
                    email: this.state.email,
                    endereco: this.state.endereco
                })
            }
        });

    }

    logar() {


        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then(() => { toast.success("✔️ Seja bem-vindo!") })
            .catch(error => { this.errorMessage(error) });

    }

    errorMessage(error) {

        switch (error.code) {
            case 'auth/user-not-found':
                toast.error("✖️ O email informado não está cadastrado!");
                break;
            case 'auth/wrong-password':
                toast.error("✖️ Senha incorreta!")
                break;
            default:
                toast.error("✖️ Email e/ou senha inválido(s)");
        }

    }

    cadastrar() {

        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then(() => { toast.success(" ✔️ Cadastrado com sucesso!") })
            .catch(error => {
                alert('Código de erro:' + error.code)
            });


    }

    enviar() {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                alert('✔️ Link para redefinição de senha enviado ao E-mail informado!')
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    return toast.error('✖️ O E-mail digitado não está cadastrado.');
                }
                if (error.code === 'auth/invalid-email') {
                    return toast.error('✖️ Por favor preencha o campo com um E-mail válido!');
                }
            });
    }

    escolha() { this.state.status ? this.setState({ status: false }) : this.setState({ status: true }) }

    esquecido() { this.state.esqueci ? this.setState({ esqueci: false }) : this.setState({ esqueci: true }) }

    mascara_cpf() {
        let cpf = document.getElementById('cpf');
        if (cpf.value.length === 3 || cpf.value.length === 7) {
            cpf.value += "."
        } else if (cpf.value.length === 11) {
            cpf.value += "-"
        }
    }

    render() {
        return (
            <Container>
                {console.log(this.contaa)}
                <ToastContainer draggable={true} transition={Bounce} autoClose={3000} pauseOnHover={false} position={toast.POSITION.TOP_RIGHT} limit={1} />
                <Logo src={Media} />
                <br /><br />
                {this.state.esqueci ?
                    <div>
                        {this.state.status ?

                            // Login

                            <Verify>
                                <Titulo>Faça Login</Titulo>
                                <br /><br />
                                <Input type="email" placeholder="Insira seu E-mail aqui" onChange={event => { this.setState({ email: event.target.value }) }} />
                                <br />
                                <Input type="password" placeholder="Insira sua senha aqui" onChange={event => { this.setState({ senha: event.target.value }) }} />
                                <br /><br />
                                <Btn onClick={this.logar} to="/conta" > Login </Btn>
                                <br /><br />
                                <Rodape>
                                    <Redirect onClick={this.escolha}> Cadastrar </Redirect>
                                    <Redirect onClick={this.esquecido} > Esqueci a senha </Redirect>
                                </Rodape>
                            </Verify>

                            :

                            // Cadastrar

                            <Verify>
                                <Titulo>Cadastre-se</Titulo>
                                <Form>
                                    <br /><br />
                                    <Input type="text" placeholder="Insira seu nome" maxLength="60" onChange={event => { this.setState({ nome: event.target.value }) }} />
                                    <br />
                                    <Input type="text" id="cpf" placeholder="Insira seu cpf" autoComplete="off" maxLength="14" onKeyUp={this.mascara_cpf} onChange={event => { this.setState({ cpf: event.target.value }) }} />
                                    <br />
                                    <Input type="text" placeholder="Insira seu endereço" maxLength="90" onChange={event => { this.setState({ endereco: event.target.value }) }} />
                                    <br />
                                    <Input type="email" placeholder="Insira seu E-mail" onChange={event => { this.setState({ email: event.target.value }) }} />
                                    <br />
                                    <Input type="password" placeholder="Insira sua senha" onChange={event => { this.setState({ senha: event.target.value }) }} />
                                </Form>
                                <br /><br />
                                <Btn onClick={this.cadastrar}>Cadastrar</Btn>
                                <br /><br />
                                <Rodape>
                                    <Redirect onClick={this.escolha}> Logar </Redirect>
                                    <Redirect onClick={this.esquecido} > Esqueci a senha </Redirect>
                                </Rodape>
                            </Verify>
                        }
                    </div>

                    :

                    // Esqueci a Senha

                    <Verify>
                        <Titulo>Informe seu Email</Titulo>
                        <br /><br /><br /><br />
                        <Input type="text" placeholder="Informe seu Email" onChange={event => { this.setState({ email: event.target.value }) }} />
                        <br /><br />
                        <Btn onClick={this.enviar}>Enviar Email</Btn>
                        <br /><br /><br /><br />
                        <Rodape>
                            <Redirect onClick={this.esquecido}> Logar </Redirect>
                        </Rodape>
                    </Verify>
                }
            </Container>
        );
    }
}
export default Conta;