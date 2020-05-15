import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { TransitionPresets } from 'react-navigation-stack';

import CustomTabBar from './components/Navigation/CustomTabBar';


import LoginScreen from './screens/AuthNavigator/LoginScreen';
import CadastroScreen from './screens/AuthNavigator/CadastroScreen';
import EsqueceSenhaScreen from './screens/AuthNavigator/EsqueceSenhaScreen';

import ComandaDetalhe from './screens/AppNavigator/Comanda/ComandaDetalhe'
import BalanceteScreen from './screens/AppNavigator/Balancete/BalanceteScreen';
import ComandasScreen from './screens/AppNavigator/Comanda/ComandasScreen';
import CardapioScreen from './screens/AppNavigator/Cardapio/CardapioScreen';
import EstoqueScreen from './screens/AppNavigator/EstoqueScreen';
import PerfilScreen from './screens/AppNavigator/PerfilScreen';


const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Cadastro:CadastroScreen,
  EsqueSenha: EsqueceSenhaScreen,
});

const ComandaStack = createStackNavigator({
  pedidos: ComandasScreen,
  detalheComanda: ComandaDetalhe,
},{
  navigationOptions:{
      headerShown:false
  },
  initialRoute: "pedidos"
})

const AppTabNavigator = createBottomTabNavigator({
    Comanda: ComandaStack,
    Balancete: BalanceteScreen,
    Cardapio: CardapioScreen,
    Estoque: EstoqueScreen,
    Perfil: PerfilScreen,
  },
  {
      tabBarComponent:(props)=>(
          <CustomTabBar
            {...props}
            items={[
                {type:'normal', text:'Comanda', icon:'home' , route: 'Comanda'},
                {type:'normal', text:'Balancete', icon:'star' , route: 'Balancete'},
                {type:'normal', text:'Cardapio', icon:'bar-graph' , route: 'Cardapio'},
                {type:'normal', text:'Estoque', icon:'tools' , route: 'Estoque'},
                {type:'normal', text:'Perfil', icon:'tools' , route: 'Perfil'},

            ]}
          />
      )
  }
);

const App = createAppContainer(
  createSwitchNavigator(
      {

          App: AppTabNavigator,
          Auth: AuthStack,
      },
      {
          initialRouteName: initialRoute = 'App',
      }
  )
)


export default App;


//Firebase
import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyAkrQIIdUGcdmksE02dbJQSrBX4XDLXlf4",
  authDomain: "bardapiscina-e7099.firebaseapp.com",
  databaseURL: "https://bardapiscina-e7099.firebaseio.com",
  projectId: "bardapiscina-e7099",
  storageBucket: "bardapiscina-e7099.appspot.com",
  messagingSenderId: "772657669302",
  appId: "1:772657669302:web:661ec3748f322a58dcb217",
  measurementId: "G-M8H31FK8D2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);