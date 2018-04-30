import { combineReducers } from 'redux';
import search from './search';
import restaurants from './restaurants';

export default combineReducers({
    search, restaurants
})