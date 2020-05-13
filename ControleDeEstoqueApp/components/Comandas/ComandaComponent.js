
import React, {Component} from 'react';
import {Text} from 'react-native';
import {ContainerSafearea} from "../Geral/Structure";
import styled from "styled-components";


const FlatList = styled.FlatList`
    width:100%;
    background-color: blue;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

const Item = styled.TouchableOpacity`
    border-radius: 5px;
    margin: 5px 5px;
    padding: 0px 15px;
    justify-content:space-between;
    flex-direction: row;
    height:100px;
    width:100px;
    background-color: #F5F5F5;

`;

const ItemText = styled.Text`
    justify-content:space-between;
    color:#636060;

`;

const ViewTeste = styled.View`
    width: 90%;
    height: 90%;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;



`;

const ItemTeste = styled.View`

    margin-top: 10px;
    border: 2px solid black;
    border-radius: 5px;
    width: 100px;
    height: 100px;

`;

//    background-color: ${props => props.cor || 'red'} ;



export default class ModalComanda extends Component{


    render(){
        return  <ContainerSafearea justify="center"   >
                     
                    <ViewTeste>

                        {this.props.comandas.map((item) => {
                            return(

                                <ItemTeste>
                                    <Text>{item.name}</Text>
                                </ItemTeste>
                            )
                            

                        })}
                        
                        

                    </ViewTeste>
                   

                </ContainerSafearea>
    }
}