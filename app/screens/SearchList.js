import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ListView,
} from 'react-native';
import food from '../data/food';
import SearchBarPinterest from '../components/SearchBar/SearchBarPinterest';
import { changeSearchedText } from '../actions/search';
import { changeSelectedFood } from '../actions/search';

//to remove error: this.props.dispatch is not a function
import { connect } from 'react-redux';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SearchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchedFood: [], 
            text: ''
        };  
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => { 
        try {
            const response = await fetch('http://192.168.43.101:3000/getFoodItems');
            const json = await response.json();
            //console.log(json, "json");
            this.setState({data: json.docs});
            //console.log(this.state.data,"dataaa=============");
        } catch( error) {
            console.error(error);
        }
    }

    _handlePressFood = (food) => {
        // console.log("handel press food", food._id);
        // console.log(changeSelectedFood(food._id));
        this.props.dispatch(changeSelectedFood(food._id));
        this.props.navigation.navigate('searchResultsList', { foodId: food._id });        
    } 

    renderFood = (food) => {
        return (
          <View           
          style= {styles.listItem}>
            <Text 
              style={styles.listItemText}
              onPress={() => this._handlePressFood(food)}
            >
            {food.name}</Text>
            <Text style = {{
                fontFamily: 'open-sans-light',
                fontSize: 15,
                color: '#abb2b9',
            }}>{food.tags[0]}, {food.tags[1]}, {food.tags[2]}, {food.tags[3]}</Text>
          </View>
        );
    };

    handleChangeText = (searchedText) => {
        //console.log(searchedText,'first condition');
        
        //console.log(changeSearchedText(searchedText));
       this.props.dispatch(changeSearchedText(searchedText));
        
        var searchedFood = this.state.data.filter(function(food) {
          return food.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
        });
        this.setState({searchedFood: searchedFood});
        this.setState({text: searchedText});
        console.log('anjaliiiiiiiiiii',this.state.text);
    }

    onSearchSubmit = () => {
        console.log("in on search submit");
        console.log(this.state.text, "========text==============");
        const param = this.state.text;
        this.props.navigation.navigate('searchResultsList', { searchQuery: param });        
    }

    render(){
        return(
        
        <View style= {styles.container}>
            
        <SearchBarPinterest
         autoFocus={true}
         //onChangeText = {(text) => this._handleOnChangeText(text)} />
         onChangeText={this.handleChangeText}
         //value={this.state.text}
         onSubmitEditing={this.handleChangeText} />
        <View style={{backgroundColor:'#f7f7f7',marginTop: 20,}}>
        <ListView
         dataSource={ds.cloneWithRows(this.state.searchedFood)}
         renderRow={this.renderFood} />
        </View>
        </View>

        );
    }
}

const styles = {
    container:{
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    defaultText:{
        fontSize:15,
        color:'#7e7e7e',
    },
    textOnSelect:{
        fontSize:15,
        borderBottomWidth: 1, 
        borderBottomColor: '#3d3d3d',
        color:'#3d3d3d',
    },
    button: {
        alignItems: 'center',
        //backgroundColor: '#DDDDDD',
        paddingTop: 8,
        paddingBottom:1,
      },
    listItem: {

        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7',
        justifyContent: 'flex-start',
        padding: 5,
    },
    listItemText: {
        fontSize: 20,
        fontFamily: 'open-sans-semibold',
    }
};

export default connect() (SearchList) ;