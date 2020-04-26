import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { TransitionPresets } from 'react-navigation-stack';

import CustomTabBar from './components/Navigation/CustomTabBar';


import LoginScreen from './screens/AuthNavigator/LoginScreen';
import CadastroScreen from './screens/AuthNavigator/CadastroScreen';
import EsqueceSenhaScreen from './screens/AuthNavigator/EsqueceSenhaScreen';


import BalanceteScreen from './screens/AppNavigator/BalanceteScreen';
import ComandasScreen from './screens/AppNavigator/ComandasScreen';
import CardapioScreen from './screens/AppNavigator/CardapioScreen';
import EstoqueScreen from './screens/AppNavigator/EstoqueScreen';
import PerfilScreen from './screens/AppNavigator/PerfilScreen';









const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Cadastro:CadastroScreen,
  EsqueSenha: EsqueceSenhaScreen,
});

const AppTabNavigator = createBottomTabNavigator({
    Comanda: ComandasScreen,
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
          initialRouteName: initialRoute = 'Auth',
      }
  )
)


export default App;