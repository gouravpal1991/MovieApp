/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

/*action will be called before loadmovies api call.
 It indicates that process has started*/
export function loadMoviesSuccess(movies) {
  return {type: types.LOAD_MOVIES_SUCCESS, movies};
}
export function loadMoviesBegin() {
  return {type: types.LOAD_MOVIES_BEGIN};
}

/*thunk: make async call to api*/
export function loadMovies(movieName) {
  return function (dispatch) {
    dispatch(loadMoviesBegin());
    return moviesApi.getAllMovies(movieName).then(movies => {
      dispatch(loadMoviesSuccess(movies));
      }).catch(error => {
      throw (error);
    });
  };
}
