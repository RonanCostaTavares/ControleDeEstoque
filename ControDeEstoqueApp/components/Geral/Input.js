import styled from 'styled-components';
import React, { props, Component } from 'react';

const InputArea = styled.View`
    justify-content:${props => props.justify || "center"};
    width: ${props => props.width || "100%"};
`;

const TextArea = styled.TextInput`
    padding-top:10px;
    line-height:20px;
    font-size: 18px;
    border-style: solid ;
    border-bottom-color: #8A8F9E; 
    border-bottom-width: 1px;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    margin: ${props => props.margin || "10px 25px"};
`;

const FocusArea = styled.View`
    width:100%;
    border-radius:5px;
    &{TextArea}:active &{
        background-color:#F5F5F5
      }
`;

const Label = styled.Text`
    font-weight:600;
    font-size:18px;
    color:#636060
    margin: ${props => props.margin || "8px 20px"}

`;


class Input extends Component{

    render(){

        let secureText;
        if(!this.props.secureText){
            let secureText = 'secureTextEntry'
        }
        let width;
        if(!this.props.width){
            width = this.props.width
        }else{
            width = "100%"
        }


        return (
            
        <InputArea width={ this.props.width == undefined ? "100%" : this.props.width} justify={this.props.justify == undefined ? null : this.props.justify}>
            
            <Label margin={this.props.margin}> {this.props.label}</Label> 
            <FocusArea>
                <TextArea
                ref={(r) => { this._textInputRef = r; }}
                secureTextEntry={ this.props.secureText == undefined ? false : true}
                placeholder={ this.props.placeHolder == undefined ? '' :  this.props.placeHolder}
                autoComplete={false}
                value={this.props.value} 
                onSubmitEditing={this.props.onSubmitEditing}
                onChangeText={this.props.ChangeFunction}
                autoFocus={this.props.autoFocus}
                autoCapitalize={this.props.autoCapitalize}
                TextInputDisableStatus={ this.props.disabled == undefined ? false : true}
                />

            </FocusArea>
         
        </InputArea>
        )
    }
}

export { Input, InputArea,Label }