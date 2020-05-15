import React,{Component} from 'react';
import { View , Text, Alert} from 'react-native';
import Firebase from 'firebase'


import {ContainerSafearea, Card ,FooterArea} from '../../../components/Geral/Structure';
import ModalComanda from '../../../components/Comandas/ComandaComponent';



export default class ComandasScreen extends Component{

    static navigationOptions = {
        header: null
    };

    constructor(){
        super();

        this.state={
            Teste: [{"name":"APT 105/2", "id": 1},
                    {"name":"APT 2595/1", "id": 2},
                    {"name":"APT 159/2", "id": 3},
                    {"name":"APT 1235/1", "id": 4},
                    {"name":"APT 105/2", "id": 1},
                    {"name":"APT 2595/1", "id": 2},
                    {"name":"APT 159/2", "id": 3},
                    {"name":"APT 1235/1", "id": 4},
                    {"name":"APT 105/2", "id": 1},
                    {"name":"APT 2595/1", "id": 2},
                    {"name":"APT 159/2", "id": 3},
                    {"name":"APT 1235/1", "id": 4},
                    {"name":"APT 105/2", "id": 1},
                    {"name":"APT 2595/1", "id": 2},
                    {"name":"APT 159/2", "id": 3},
                    {"name":"APT 1235/1", "id": 4},
                    {"name":"APT 105/2", "id": 1},
                    {"name":"APT 2595/1", "id": 2},
                    {"name":"APT 159/2", "id": 3},
                    {"name":"APT 1235/1", "id": 4},
                    {"name":"APT 105/2", "id": 1},
                    {"name":"APT 2595/1", "id": 2},
                    {"name":"APT 159/2", "id": 3},
                    {"name":"APT 1235/1", "id": 4}
          ],
        }
    }


    NextTela = () => {

        this.props.navigation.navigate("detalheComanda")

       
    }
    


    render(){
        return (
                    <ModalComanda 
                        comandas= {this.state.Teste}
                        nomeLabel= 'Comandas'
                        nextTelaComanda= {this.NextTela}
                    />
        )
    }
}