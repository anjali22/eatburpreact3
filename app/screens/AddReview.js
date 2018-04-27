import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, ListView } from 'react-native';
import { ImagePicker } from 'expo';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class AddReview extends Component{
    
    state = {
        restoName: '',
        itemName: '',
        review: '',
        rating: '',
        image: null, 
        restaurants: [],
        foodItems: [],
        searchedRestaurants: [],
        searchedFood: []       
    }

    componentWillMount() {
        this.fetchRestaurants();
        this.fetchFoodItems();
    }

    fetchRestaurants = async () => { 
        try {
            const response = await fetch('http://192.168.43.101:3000/getRestaurants');
            const json = await response.json();
            //console.log(json, "json");
            this.setState({restaurants: json.docs});
            //console.log(this.state.data,"dataaa=============");
        } catch( error) {
            console.error(error);
        }
    }

    fetchFoodItems = async () => { 
        try {
            const response = await fetch('http://192.168.43.101:3000/getFoodItems');
            const json = await response.json();
            //console.log(json, "json");
            this.setState({foodItems: json.docs});
            //console.log(this.state.data,"dataaa=============");
        } catch( error) {
            console.error(error);
        }
    }

    handleRestaurant = (text) => {
        var searchedRestaurants = this.state.restaurants.filter(function(restaurant) {
            return restaurant.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
          });
          this.setState({searchedRestaurants: searchedRestaurants});
          //this.setState({text: searchedText});
          //console.log('anjaliiiiiiiiiii',this.state.text);

          //this.setState({ restoName: text })

    }
    
    handleFood = (text)=> {
        var searchedFood = this.state.foodItems.filter(function(food) {
            return food.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
          });
        this.setState({searchedFood: searchedFood});
        //this.setState({ itemName: text })
    }

    handleReview = (text)=> {
        this.setState({ review: text })
    }

    handleRating = (text)=> {
        this.setState({ rating: text })
    }
    
    renderRestaurant = (restaurant) => {
        return (
          <View           
          style= {styles.listItem}>
            <Text 
              style={styles.listItemText}
              onPress={() => this._handlePressRestaurant(restaurant)}
            >
            {restaurant.name}</Text>
          </View>
        );
    };

    renderFood = (food) => {
        return (
          <View           
          style= {styles.listItem}>
            <Text 
              style={styles.listItemText}
              onPress={() => this._handlePressFood(food)}
            >
            {food.name}</Text>
            
          </View>
        );
    };

    _handlePressRestaurant = (restaurant) => {
        this.setState ( { restoName: restaurant.name})
    }

    _handlePressFood = (food) => {
        this.setState ( { itemName: food.name})        
    }


    addImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        this._handleImagePicked(pickerResult);

        console.log(pickerResult);
    
        if (!pickerResult.cancelled) {
          this.setState({ image: pickerResult.uri });
        }
    };

    _handleImagePicked = async pickerResult => {
        let uploadResponse, uploadResult;
    
        try {
          this.setState({ uploading: true });
    
          if (!pickerResult.cancelled) {
            uploadResponse = await uploadImageAsync(pickerResult.uri,
            this.state.restoName,
            this.state.itemName,
            this.state.rating,
            this.state.review);
            uploadResult = await uploadResponse.json();
            this.setState({ image: uploadResult.location });
          }
        } catch (e) {
          console.log({ uploadResponse });
          console.log({ uploadResult });
          console.log({ e });
          alert('Upload failed, sorry :(');
        } finally {
          this.setState({ uploading: false });
        }
    };



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

        let { image } = this.state;
        
        return(
            
            <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Restaurant Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleRestaurant}/>
               <ListView
                dataSource={ds.cloneWithRows(this.state.searchedRestaurants)}
                renderRow={this.renderRestaurant} />
               
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Food Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleFood}/>
               <ListView
               dataSource={ds.cloneWithRows(this.state.searchedFood)}
               renderRow={this.renderFood} />
              
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
                  () => this.addImage()
               }>
               <Text style = {styles.submitButtonText}> Add Image </Text>
               </TouchableOpacity>
                
                {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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

async function uploadImageAsync(uri, restoName, itemName, rating, review) {
    let apiUrl = 'http://192.168.43.101:3000/uploadimage';
    console.log(restoName, itemName, rating, review );
    // Note:
    // Uncomment this if you want to experiment with local server
    //
    // if (Constants.isDevice) {
    //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
    // } else {
    //   apiUrl = `http://localhost:3000/upload`
    // }
  
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];
  
    let formData = new FormData();
    formData.append('photo', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
    formData.append('name', restoName);
    formData.append('foodItem', itemName)
    formData.append('rating', rating);
    formData.append('review', review);
  
    console.log("formdata====================================", formData);
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    return fetch(apiUrl, options);
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