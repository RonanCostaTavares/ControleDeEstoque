import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity  } from "react-native";

import {ContainerSafearea, Card ,FooterArea} from '../Geral/Structure';
import { Input } from "../Geral/Input";
import { Button, InvisibleButton } from "../Geral/Button";
import Logotipo from '../Geral/Logotipo';


export default class ModalLogin extends Component{


    render(){
        return (
                <ContainerSafearea justify='center'  backColor='#ADD8E6'>

                    <Logotipo/>
                    <Card backColor='black' pading='10px'>

                        <Input label="Email"  ChangeFunction={(email) => this.props.email(email)} />
                        <Input label="Senha" secureText="true" onSubmitEditing={this.props.handleLogin} ChangeFunction={(senha) => this.props.senha(senha)}/>
                        <Button text="Login" margin="30px" onPressButton={this.props.handleLogin} />

                    </Card>

                    <FooterArea>

                        <InvisibleButton text="Cadastro" fontSize="14px" margin="5px"  onPressButton={this.props.goToCadastro}/>
                        <InvisibleButton text="Esqueceu a senha" margin="5px" fontSize="14px"  onPressButton={this.props.goToEsqueceuSenha}/>

                    </FooterArea>


                </ContainerSafearea>
        );
    }
}
