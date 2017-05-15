/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

export function loadMoviesSuccess(movies) {
  return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

/*thunk: make async call to api*/
export function loadMovies(movieName) {
  return function (dispatch) {
    return moviesApi.getAllMovies(movieName).then(movies => {
      dispatch(loadMoviesSuccess(movies));
      }).catch(error => {
      throw (error);
    });
  };
}
