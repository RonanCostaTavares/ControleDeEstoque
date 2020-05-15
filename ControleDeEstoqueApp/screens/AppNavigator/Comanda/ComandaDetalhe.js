import React,{Component} from 'react';
import { View , Text} from 'react-native';

import ModalComandaDetalhe from '../../../components/Comandas/DetalheComandaComponent';


export default class ComandaDetalhe extends Component{

    constructor(){
        super();
    }



    render(){
        return (
                    <ModalComandaDetalhe/>
        )
    }
}