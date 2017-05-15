/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function homeReducer(state=initialState.movie, action) {
  switch (action.type) {
    case types.LOAD_MOVIE_BY_ID_SUCCESS:
      return action.movie;
    default:
      return state;
  }
}
