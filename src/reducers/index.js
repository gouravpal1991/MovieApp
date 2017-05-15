/**
 * Created by gouravpal on 13/05/17.
 */
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  homeReducer
  , moviesReducer
});

export default rootReducer;
