/**
 * Created by gouravpal on 13/05/17.
 */
import initialState from '../reducers/initialState';
const BASE_URL = 'http://www.omdbapi.com';
class MoviesApi {
  static getAllMovies(movieName) {
    return fetch(`${BASE_URL}/?s=` + movieName).then((response) => {
      return response.json();
    }).then(response => {
      return response;
    });
  }

  /* to get a movie details based on movieId*/
  static getMovie(movieId) {

    return fetch(`${BASE_URL}?i=` + movieId).then((response) => {
      return response.json();
    }).then(json => {
      return json;
    });
  }
}

export default MoviesApi;
