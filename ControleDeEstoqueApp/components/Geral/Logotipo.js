import React, {Component} from 'react';
import { View, Image } from "react-native";

import css from '../style';


export default class Logotipo extends Component {

    render(){
        return <View style={css.LogoLogin}>
                <Image source={require('../images/Logotipo.jpg')}
                    style={{width: 200, height: 200, alignSelf: 'center',borderRadius: 100, justifyContent: 'center'}}/>
                </View>
    }
}