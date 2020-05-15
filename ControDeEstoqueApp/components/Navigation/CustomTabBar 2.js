import React from "react";
import {Text} from 'react-native';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';


const TabBarArea = styled.SafeAreaView`
    flex-direction: row;
    background-color: #EEE;
`;

const TabBarItem = styled.View`
    flex:1;
    height: 65px;
    align-items: center;
`;

const TabNormal = styled.TouchableHighlight`
    align-items: center;    
`;

const TabViewIconNormal = styled.View`

    width: 25px;
    height: 25px;
    margin: 10px 0px 5px 0px;
`;

const TabBall = styled.TouchableHighlight`
    width: 100px;
    height: 100px;
    background-color: #F5F5F5;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    border: 5px solid #FFF
    marginTop: -50px;   

`;

const TabViewIconBig = styled.View`
    width: 40px;
    height: 40px;
`;

export default (props) => {


    return(
            <TabBarArea>
                {props.items.map(item=>(
                    <TabBarItem key={item.route}>
                        {item.type == 'normal' &&
                            <TabNormal underlayColor="transparent" onPress={() => props.navigation.navigate(item.route)}>
                                <>  
                                    <TabViewIconNormal>
                                        <Icon name={item.icon} size={25}/>
                                    </TabViewIconNormal>
                                    <Text>{item.text}</Text>
                                </>
                            </TabNormal>
                        }

                        {item.type == 'big' &&
                            <TabBall underlayColor="transparent" onPress={() => props.navigation.navigate(item.route)}>
                                <TabViewIconBig>
                                    <IconAnt name={item.icon} size={43}/>
                                </TabViewIconBig>
                            </TabBall>
                        }


                    </TabBarItem>

                ))}
            </TabBarArea>
    );
}