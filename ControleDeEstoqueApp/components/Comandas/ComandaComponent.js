
import React, {Component} from 'react';
import {Text} from 'react-native';
import {ContainerSafearea} from "../Geral/Structure";
import styled from "styled-components";
import { ScrollView } from 'react-native-gesture-handler';

const ViewTitle = styled.View`
    width: 100%;
    align-items:center;
`;

const ViewTeste = styled.View`
    width: 90%;
    height: 90%;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;
    
`;

const ItemTeste = styled.TouchableOpacity`

    margin-top: 10px;
    justify-content: center;
    border: 2px solid black;
    align-items:center;
    border-radius: 5px;
    width: 90px;
    height: 100px;
    background-color: #F5F5F5;


`;

//    background-color: ${props => props.cor || 'red'} ;



export default class ModalComanda extends Component{


    render(){
        return  <ContainerSafearea justify="center" backColor='#ADD8E6'  >
                    <ScrollView>

                        <ViewTitle >
                            <Text style={{fontSize: 30}}>{this.props.nomeLabel}</Text>
                        </ViewTitle>

                        <ViewTeste>

                            {this.props.comandas.map((item) => {
                                return(

                                    <ItemTeste onPress={this.props.nextTelaComanda}>
                                        <Text>{item.name}</Text>
                                    </ItemTeste>
                                )
                                

                            })}
                            
                            

                        </ViewTeste>
                    </ScrollView>

                </ContainerSafearea>
    }
}