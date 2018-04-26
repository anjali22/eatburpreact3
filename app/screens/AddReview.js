import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default class AddReview extends Component{
    
    state = {
        restoName: '',
        itemName: '',
        review: '',
        rating: '',
    }

    handleRestaurant = (text) => {
        this.setState({ restoName: text })
    }
    
    handleFood = (text)=> {
        this.setState({ itemName: text })
    }

    handleReview = (text)=> {
        this.setState({ review: text })
    }

    handleRating = (text)=> {
        this.setState({ rating: text })
    }
    
    addReview = (restoName, itemName, review, rating) => {
        this.onSubmitReview();
        //alert(restoName+itemName+review+rating);
    }

    async onSubmitReview() {

        var data = {
            restoName: this.state.restoName,
            itemName: this.state.itemName,
            review:  this.state.review, 
            rating: this.state.rating,
        };
        console.log(JSON.stringify(data), "data")
            try {
                let response = await fetch(
                 "http://192.168.43.101:3000/addReview",
                 {
                   method: "POST",
                   headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                   },
                  body: JSON.stringify(data)
                }
               );
                if (response.status >= 200 && response.status < 300) {
                   alert("authenticated successfully!!!");
                }
              } catch (errors) {
           
                alert(errors);
               } 
            }

    render(){
        return(
            <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Restaurant Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleRestaurant}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Food Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleFood}/>
               
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Review"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleReview}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Rating"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleRating}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addReview(this.state.itemName, this.state.review, 
                    this.state.restoName, this.state.rating)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
})