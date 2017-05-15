/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

export function loadMovieSuccess(movie) {
  return {type: types.LOAD_MOVIE_BY_ID_SUCCESS, movie};
}

/*thunk: make async call to api*/
export function loadMovie(movieId) {
  return function (dispatch) {
    return moviesApi.getMovie(movieId).then(movie => {
      dispatch(loadMovieSuccess(movie));
    }).catch(error => {
      throw (error);
    });
  };
}