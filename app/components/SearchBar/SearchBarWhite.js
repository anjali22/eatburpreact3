import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class SearchBarWhite extends React.Component{

    constructor(props){
        super(props)
      }
      
    render() {
        return (
            
               

<View style={{
  paddingLeft:20,
  justifyContent: 'center',
  marginRight: 10,
  marginTop:10,
  marginLeft:10,
  marginBottom:10,
  backgroundColor: '#fff', 
  height: 50, 
  borderTopLeftRadius:4,
  borderTopRightRadius:4,
  borderBottomLeftRadius:4,
  borderBottomRightRadius:4,
  elevation:5,
  //borderWidth:1,
  //borderColor: '#e9e9e9',
  }}>
  <TextInput 
  onFocus={this.props.onPress}
  onChangeText={this.props.onChangeText}
  placeholder="What's your poison?"
  underlineColorAndroid='transparent'           //to remove underline in textinput
  style={{
    fontSize: 18,
    textAlign: 'auto',
    color: '#000000',
    fontWeight: 'normal'
  }}
  />
</View>
);
}
}

const styles = {
    container:{
        flex: 1,
    }
}