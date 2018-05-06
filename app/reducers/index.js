import { combineReducers } from 'redux';

import user from './user.reducer';
import review from './review.reducer';
import restaurants from './restaurants.reducer';
import foodItems from './foodItems.reducer';
import search from './search.reducer';

export default combineReducers({
    search, restaurants, foodItems, review, user
})