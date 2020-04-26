import styled from 'styled-components';
import React,{ Component, props} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import IconEnt from 'react-native-vector-icons/Entypo';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';


const ButtonClassic = styled.TouchableHighlight`
    justify-content:center;
    align-items:center;
    width: ${props => props.width || 'auto'};
    padding:${props => props.padding || '3px 35px'} ;
    background-color:${props => props.backgroundColor || '#F5F5F5'};
    border-radius:5px;
    margin:${props => props.margin || '15px'};
`

const InvButton = styled.TouchableHighlight`
justify-content:center;
align-items:center;
width: ${props => props.width || 'auto'};
margin:${props => props.margin || '15px'};
`


const ButtonText  = styled.Text`
    color: ${props => props.color || "rgba(0, 0, 0, 0.6)"};
    font-size: ${props => props.fontSize || '16px'};
    
`

const BlckButton = styled.TouchableHighlight`
    justify-content:center;
    align-items:center;
    background-color: ${props=> props.backgroundColor || '#F5F5F5'}
    padding: ${props=> props.padding || '5px'}
    width: ${props => props.width || '100%'};
    border-radius:5px;
    margin:${props => props.margin || '15px 0px'};
`

const NavigationBtn = styled.TouchableHighlight`
    justify-content:center;
    align-items:center;
    width: 45px;
    height: 45px;
    color: ${props => props.color || "#636060"};
    background-color: ${props => props.backgroundColor || "#F5F5F5"};
    opacity: ${props => props.opacity || "0.5"};
    border: ${props => props.borderWeight || "0px"} solid ${props => props.borderColor || "#636060"};
    border-radius:5px;
    margin:${props => props.margin || '0px 20px'};
    font-size:${props => props.fontSize || '22px'};
`



class Button extends Component{

    render(){
        return(
            <ButtonClassic margin={this.props.margin} width={this.props.width} padding={this.props.padding}> 
                <ButtonText underLayColor="#636060" onPress={this.props.onPressButton} > {this.props.text} </ButtonText>
            </ButtonClassic>

        );
    }
}


class BlockButton extends Component{

    render(){
        return(
            <BlckButton backgroundColor={this.props.backgroundColor} padding={this.props.padding} margin={this.props.margin} width={this.props.width} onPress={this.props.onPressButton} > 
                <ButtonText fontSize="14px" underLayColor="#636060"   color="rgba(0, 0, 0, 0.5) " > {this.props.text} </ButtonText>
            </BlckButton>

        );
    }
}

class InvisibleButton extends Component{
    render(){
        return(
            <InvButton margin={this.props.margin} width={this.props.width}>
                <ButtonText fontSize={this.props.fontSize} underLayColor="#636060" onPress={this.props.onPressButton}> {this.props.text} </ButtonText>
            </InvButton>
        );
    }
}

class NavigationButton extends Component{

  
    render(){

        let iconStyle;
        let ButtonIcon;
        iconStyle = this.props.iconStyle;

        switch(iconStyle){
            case undefined:
                 ButtonIcon =  (<Icon size={25} styled={{padding:10}} name={this.props.name} color={ this.props.color } />);
                break;
            case "SimpleLineIcons":
                 ButtonIcon = (<SimpleIcon size={25} styled={{padding:10}} name={this.props.name} color={ this.props.color } />);
                break;
            case "Entypo":
                ButtonIcon = (<IconEnt size={25} styled={{padding:10}} name={this.props.name} color={ this.props.color } />);
                break;
        }


        return(
            <NavigationBtn 
                borderColor={this.props.borderColor}
                backgroundColor={this.props.backgroundColor} 
                borderWeight={this.props.borderWeight} 
                margin={this.props.margin} 
                opacity={this.props.opacity}
                width={this.props.width} 
                onPress={this.props.onPressButton} >
                    
               {ButtonIcon}
            </NavigationBtn>
        );
    }
}

export  { Button, InvisibleButton, BlockButton, NavigationButton }