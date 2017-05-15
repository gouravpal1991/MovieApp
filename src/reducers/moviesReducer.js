/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moviesReducer(state = initialState.movies, action) {

  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
}
