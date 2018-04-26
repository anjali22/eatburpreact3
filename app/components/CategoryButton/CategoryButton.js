import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
} from 'react-native';

export default class CategoryButton extends React.Component{

    constructor(props){
        super(props)
      }
      
    render() {
        return (
            
               



<TouchableHighlight onPress={this.props.onPress} style={ styles.imageContainer }>
    <Text>{this.props.title}</Text>
    {/* <Image 
    style={ styles.image } 
    source={require('./coffee.png')}  
    /> */}
</TouchableHighlight> 

  



           
        );
    }
}

const styles = {
    container:{
        flex: 1,
    },
    imageContainer: {
        backgroundColor:'#C2185B',
        height:60,
        width: 60,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,
      },
      image: {
        height:60,
        width: 60,
        borderRadius: 64
      },
}