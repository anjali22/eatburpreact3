import { combineReducers } from 'redux';
import search from './search';
import restaurants from './restaurants';
import user from './user.reducer';

export default combineReducers({
    search, restaurants, user
})