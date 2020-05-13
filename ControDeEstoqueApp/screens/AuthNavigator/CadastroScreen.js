import React,{Component, useRef} from 'react';
import { View , Text, Modal, Alert} from 'react-native';
import Firebase from 'firebase'


import ModalCadastro from '../../components/Login/CadastroComponent';

export default class CadastroSreen extends Component{

    constructor(){
        super();

        this.state={

            email: '',
            senha: '',
            nome: '',
            cpf:'',
            endereco:'',


        }
    }


    DoCadastro = () => {

        Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            Firebase.auth().onAuthStateChanged((user) => {
                Firebase.database().ref('Users/' + user.uid).set({

                    nome: this.state.nome,
                    cpf: this.state.cpf,
                    email: this.state.email,
                    endereco: this.state.endereco,
                    uid: user.uid
                }).then(() => {
                    Alert.alert('Sucesso', 'Cadastro Realizado com sucesso')
                    this.props.navigation.navigate("App")
                })
                
            })

        }).catch((error) => {

            console.log(error.message)
        })
        
    }


    render(){
        return (
                <ModalCadastro 
                    handleNome={(nome) => this.setState({nome})}
                    handleCpf={(cpf) => this.setState({cpf})}
                    handleEmail={(email) => this.setState({email})}
                    handleSenha={(senhaCad) => this.setState({senha:senhaCad})}
                    handleEndereco={(endereco) => this.setState({endereco})}

                    buttonCadastrarCliente={this.DoCadastro}

                    
                    />

               
        )
    }
}