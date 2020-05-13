import React, {Component} from 'react';
import {Text} from 'react-native';
import {ContainerSafearea} from "../Geral/Structure";
import styled from "styled-components";
import { Input} from "../Geral/Input";

const ViewInputs = styled.View`
    marginTop: 10px;
    background-color: white;
    borderWidth: 3px
    borderRadius: 10px;
    borderColor: #ebebeb;
    padding: 10px;
    width: 70%;
`;

const ViewFooter = styled.View`
    flexDirection: row;
    marginTop: 10px;
    padding: 10px;
    alignItems: center;
    width: 90%;
    justify-content: center;
    marginBottom: 3px;
    alignSelf:center;
`;

const ButtonAdicionar = styled.TouchableOpacity`
        borderColor: #8A8F9E;
        backgroundColor: white;
        borderWidth: 0.5px;
        borderRadius: 5px;
        width: 100px;
        padding: 10px;
        justify-content: center;
        flexDirection: row;
`;



export default class ModalEsqueceuSenha extends Component{


    render(){
        return  <ContainerSafearea justify="center"   backColor='#ADD8E6' >
                        <ViewInputs>
                            <Input label="Email:" placeHolder="teste@teste.com" ChangeFunction={(email) => this.props.handleEmail(email)}  />
                        </ViewInputs>

                        <ViewFooter>
                            <ButtonAdicionar onPress={this.props.buttonEsqueciSenha}>
                                <Text style={{ textAlign:"center"}}>Enviar email</Text>
                            </ButtonAdicionar>
                        </ViewFooter>

                </ContainerSafearea>
    }
}