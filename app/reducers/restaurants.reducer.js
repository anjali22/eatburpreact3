import {
    FETCH_RESTAURANTS,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE
} from '../actions/restaurants.action';

const initialState = {
    
        restaurants: [],
        restaurantsError: null,
        restaurantsLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_RESTAURANTS:// start fetching posts and set loading = true
      return { ...state,  restaurantsError: null, restaurantsLoading: true }; 
    case FETCH_RESTAURANTS_SUCCESS:// return list of posts and make loading = false
      return { ...state, restaurants: action.payload.restaurants, restaurantsError:null, restaurantsLoading: false };
    case FETCH_RESTAURANTS_FAILURE:// return error and make loading = false
      //error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, restaurants: [], restaurantsError: action.payload.error, restaurantsLoading: false};  
    default:
      return state;
    }
};

// console.log('initialState', initialState);
// console.log('changeSearchedText', reducer(initialState, changeSearchedText('pizzas')));
// console.log('changeSelectedFood', reducer(initialState, changeSelectedFood('1')));

export default reducer;