/**
 * Created by gouravpal on 13/05/17.
 */
class MoviesApi {
  static getAllMovies(movieName) {
    return fetch('http://www.omdbapi.com/?s=' + movieName).then((response) => {
      return response.json();
    }).then(response => {
      if (response.Response === "True")
        return response.Search;
      else
      return [];
    });

  }

  /* to get a movie details based on movieId*/
  static getMovie(movieId) {

    return fetch('http://www.omdbapi.com/?i=' + movieId).then((response) => {
      return response.json();
    }).then(json => {
      return json;
    });

  }
}

export default MoviesApi;
