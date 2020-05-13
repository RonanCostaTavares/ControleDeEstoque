import React,{Component} from 'react';
import {Alert} from 'react-native';
import Firebase from 'firebase'


import ModalEsqueceuSenha from '../../components/Login/EsqueceuSenhaComponent';

export default class EsqueceSenhaScreen extends Component{

    constructor(){
        super();

        this.state={
            email: '',
        }
    }


    SendEmail = () => {

        Firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {

            Alert.alert('Sucesso', 'Email enviado com sucesso')
        
        }).catch(erro => {
            if(erro,code === 'auth/user-not-found'){

                Alert.alert('Usuário não cadastrado', 'Por favor insira um email válido.')

            }else if (erro.code === 'auth/invalid-email') {

                Alert.alert('Usuário não cadastrado', 'Por favor insira um email')

            } else {

                Alert.alert('Erro', 'Tente novamente mais tarde')
            }
        })
        
    }


    render(){
        return (
                    <ModalEsqueceuSenha 
                    handleEmail={(email) => this.setState({email})}

                    buttonEsqueciSenha={this.SendEmail}
                    />
        )
    }
}