/**
 * Created by gouravpal on 13/05/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesListActions from '../../../actions/moviesListActions';
import MoviesListPresentation from '../presentation/MoviesListPresentation';
import NoMovieFoundPresentation from '../presentation/NoMovieFoundPresentation';
import ProgressView from '../../common/ProgressView';

class MoviesList extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {movies} = this.props;
    debugger;
    return (
      <div>


        {
          (movies.isLoading == "true") ? <ProgressView/> :
          (movies.Search.length > 0) ? <MoviesListPresentation movies={movies.Search}/> : <NoMovieFoundPresentation/>
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.moviesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesListActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
