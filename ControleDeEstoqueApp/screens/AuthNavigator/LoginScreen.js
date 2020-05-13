import React,{Component, useCallback} from 'react';
import { Alert} from 'react-native';

import ModalLogin from '../../components/Login/LoginComponent';

import Firebase from 'firebase'

export default class LoginScreen extends Component{

    static navigationOptions = {
        header: null
    };

    constructor(){
        super();


        this.state={

            email: '',
            senha: '',


        }

    }

    DoLogin = () => {

        if(this.state.email !== '') {
            if(this.state.senha !== ''){
                Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then(() => {
                    this.props.navigation.navigate("App")
                })
                .catch(error => {
                    Alert.alert('Error', error.message)
                  });
                
            }else {
                Alert.alert('Por favor','Digite sua senha')
            }
        }else {
            Alert.alert('Por favor','Digite seu email')
        }

    }

    ToCadastro = () => {

        this.props.navigation.navigate("Cadastro")
    }


    ToEsqueceuSenha = () => {

        this.props.navigation.navigate("EsqueSenha")
    }
    


    render(){
        return (
            <ModalLogin  
                    email= {(email) => this.setState({email})}
                    senha= {(senha) => this.setState({senha})}
                    handleLogin={this.DoLogin}
                    goToCadastro={this.ToCadastro}
                    goToEsqueceuSenha={this.ToEsqueceuSenha}
                    />
        )
    }
}