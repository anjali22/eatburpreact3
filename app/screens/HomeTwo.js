import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback } from 'react-native';
import SearchBarWhite from '../components/SearchBar/SearchBarWhite';
import SearchBarPinterest from '../components/SearchBar/SearchBarPinterest';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import {Constants} from 'expo';


class HomeTwo extends Component {


    render(){
        return(
            <View style = {styles.main}>
            <View style = {styles.imageContainer}>
            <Image 
                style={ styles.image } 
                source={require('./LogoSmall.png')}  
            /></View>
            
            <SearchBarPinterest  />

            {/* <View style = {styles.container}>
                <SearchBarWhite  />
            </View> */}
                          {/* <View style= {styles.suggestionContainer}> */}

                    {/* <View style= {styles.heading}>
                        <Text style={styles.headingTextStyle}>What's the best??</Text>
                    </View>
                    <View style= {styles.subHeading}>
                        <Text style={styles.subHeadingTextStyle}>Find out the most reviewed food items of the week and where you can get them best!</Text>
                    </View> */}
                    
                    <View style= {styles.foodInfoContainer}>

                    <TouchableNativeFeedback 
                    onPress={() => this._handlePressFood(food[0])}>
                        <View style= {styles.food}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.image}
                          resizeMode="contain"
                          source={require('../assets/images/cornSandwich.jpg')}
                          
                        />
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Abc</Text>
                            <Text style={styles.smallText}>Efg</Text>
                        </View>

                        </View>
                    </TouchableNativeFeedback>

                        <View style= {styles.food}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.image}
                          resizeMode="contain"
                          source={require('../assets/images/lasagna.jpg')}
                          
                        />
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Lasagna</Text>
                            <Text style={styles.smallText}>Just My Bakes</Text>
                        </View>
                        </View>
                        <View style= {styles.food}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.image}
                          resizeMode="contain"
                          source={require('../assets/images/pavBhaji.jpeg')}
                          
                        />
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Paav Bhaji</Text>
                            <Text style={styles.smallText}>Sarafa</Text>
                        </View>
                        </View>
                    </View>
                    <View style= {styles.foodInfoContainer}>
                        <View style= {styles.food}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.image}
                          resizeMode="contain"
                          source={require('../assets/images/coldCoffee.jpg')}
                          
                        />
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Cold Coffee</Text>
                            <Text style={styles.smallText}>Tinku's, MMS</Text>
                        </View>
                        </View>
                        <View style= {styles.food}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.image}
                          resizeMode="contain"
                          source={require('../assets/images/poha.jpg')}
                          
                        />
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Poha</Text>
                            <Text style={styles.smallText}>Apana, 56 Dukan</Text>
                        </View>
                        </View>
                        <View style= {styles.food}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.image}
                          resizeMode="contain"
                          source={require('../assets/images/lassi.jpg')}
                          
                        />
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Lassi</Text>
                            <Text style={styles.smallText}>Jail Road</Text>
                        </View>
                        </View>
                    </View>
                </View>
            // </View>
        );
    }
}

const styles = {
    main: {
        flex:1,
        //backgroundColor: '#E6E6E6',     grey
        backgroundColor: '#ffffff'
    },
    container: {
        backgroundColor: '#fff'
    },
    headingContainer: {
        height: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',        
    },
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    imageContainer: {
        backgroundColor:'#C2185B',
        height:150,
        width: 150,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,
    },


    suggestionContainer :{
        margin: 5,
        flex:1,
        padding:5,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor: '#d9d9d9',
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
    },
    heading:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    headingTextStyle: {
        fontSize: 18,
        //fontFamily: 'OpenSans-Semibold',
        color: '#000',
    },
    subHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    subHeadingTextStyle: {
        fontSize: 14,
        //fontFamily: 'OpenSans-Light',
        color:'#ff8342',
    },
    foodInfoContainer: {
        flex:1,
        flexDirection : 'row',
        justifyContent: 'space-around',
        
    },
    food:{
        flex:1,
        // borderWidth:1,
        // borderColor: '#d9d9d9',
        margin:2,
        alignItems:'center',
        //justifyContent: 'center',
        // borderTopLeftRadius:8,
        // borderTopRightRadius:8,
        // borderBottomLeftRadius:8,
        // borderBottomRightRadius:8,
        //backgroundColor: '#ff8342'
    },
    imageContainer:{
        
    },
    image: {  
        width: 100,
        height: 100,
    },
    subtitle: {
        paddingTop:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitleText: {
        //fontFamily: 'OpenSans-Semibold',
        color: '#000000',
        fontSize: 14,
        
    },
    smallText: {
        //fontFamily: 'OpenSans-Light',
        color: '#ff8342',
        fontSize: 12,
    },
    defaultText:{
        //fontFamily: 'OpenSans-Light',
        fontSize:15,
        color:'#7e7e7e',
    },
    textOnSelect:{
        //fontFamily: 'OpenSans-Semibold',
        fontSize:15,
        borderBottomWidth: 2, 
        borderBottomColor: '#000',
        color:'#000',
    },
    button: {
        alignItems: 'center',
        //backgroundColor: '#DDDDDD',
        paddingTop: 8,
        paddingBottom:1,
      },
}
export default HomeTwo;