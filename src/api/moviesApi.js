/**
 * Created by gouravpal on 13/05/17.
 */
import initialState from '../reducers/initialState';

class MoviesApi {
  static getAllMovies(movieName) {
    return fetch('http://www.omdbapi.com/?s=' + movieName).then((response) => {
      return response.json();
    }).then(response => {

      if (response.Response === "True") {
        response.isLoading = "false";
        return response;
      }
      else {
        let moviesList = initialState.movies;
        moviesList.isLoading = "false";
        return moviesList;
      }
    });
  }

  /* to get a movie details based on movieId*/
  static getMovie(movieId) {

    return fetch('http://www.omdbapi.com/?i=' + movieId).then((response) => {
      return response.json();
    }).then(json => {
      json.isLoading = "false";
      return json;
    });

  }
}

export default MoviesApi;
