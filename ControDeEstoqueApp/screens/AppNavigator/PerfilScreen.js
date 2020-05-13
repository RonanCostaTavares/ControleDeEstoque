import React,{Component} from 'react';
import { View , Text} from 'react-native';
import Firebase from 'firebase'



import {ContainerSafearea, Card ,FooterArea} from '../../components/Geral/Structure';
import { Button, InvisibleButton } from "../../components/Geral/Button";

export default class PerfilScreen extends Component{

    constructor(){
        super();
    }

    Logout= () => {

        Firebase.auth().signOut().then(() => this.props.navigation.navigate("Auth")).catch(error => {
            Alert.alert('Error', error.message)
          });;
    }



    render(){
        return (
                <ContainerSafearea>
                    <Button text="Login" margin="30px" onPressButton={this.Logout} />
                </ContainerSafearea>
        )
    }
}