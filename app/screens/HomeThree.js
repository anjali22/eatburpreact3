import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback } from 'react-native';
import SearchBarWhite from '../components/SearchBar/SearchBarWhite';
import SearchBarPinterest from '../components/SearchBar/SearchBarPinterest';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import {Constants} from 'expo';

//List home Screen
class HomeThree extends Component {

    render(){
        return(
            <View style = {styles.main}>
            <View style = {styles.container}>
                <SearchBarPinterest  />
            </View>
            <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                <CategoryButton title ="Trending" color =""/>
                <CategoryButton title ="Latest" color= ""/>
                <CategoryButton title ="Must"color= ""/>
                <CategoryButton title ="Surprise" color=""/>
                <CategoryButton title ="Surprise" color=""/>

            </View>
            </View>
        );
    }
}

const styles = {
    main: {
        flex:1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#C2185B'
    }
}
    
export default HomeThree;