/**
 * Created by gouravpal on 13/05/17.
 */
import React, {PropTypes} from 'react';
import MoviesListRow from './MoviesListRow';


const MoviesListPresentation = ({movies}) => {
  return (


        <table className="table">

          <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Movie Name</th>
            <th>ReleaseYear</th>
          </tr>
          </thead>
          <tbody>

          {movies.map(movie =>
            <MoviesListRow key={movie.imdbID} movie={movie}/>)}
          </tbody>
        </table>

  );
};

MoviesListPresentation.propTypes = {
  movies: PropTypes.object.isRequired
};


export default MoviesListPresentation;
