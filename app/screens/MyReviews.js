import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet, 
    Button, 
    Image, 
    ListView, 
    ScrollView,
    NativeModules,
    Alert, 
    FlatList,
    Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { fetchReviews, fetchReviewsSuccess, fetchReviewsFailure } from '../actions/review.action';
import deviceStorage from "../services/storage.service";

class MyReviews extends Component {


    componentDidMount(){
        //get user details
        //pass token here
        this.props.dispatch(fetchReviews());
    }


    onLogoutPress = () => {
        console.log("on logout press");      
        this.props.navigation.navigate('SignedOut');
        deviceStorage.deleteJWT();
    };

    render(){
        return(
            <View style = {{
                backgroundColor: '#fff',
            }}>
                <Text style= {{
                    fontFamily: 'open-sans-semibold',
                    fontSize: 20
                }}
                >My Reviews</Text>

                <FlatList
                 data={this.props.reviewsList}
                 extraData={this.state}
                 keyExtractor={this._keyExtractor}
                 renderItem={({item}) => <Text>{item.review}</Text>}
               />

               <TouchableOpacity onPress={this.onLogoutPress}>
               <View >
                 <Text >
                   Logout
                 </Text>
               </View>
             </TouchableOpacity> 
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
   
    reviewsList: state.review.reviewsList,
    reviewsListLoading: state.review.reviewsListLoading,
    reviewsListError: state.review.reviewsListError

});

export default connect(mapStateToProps)(MyReviews);