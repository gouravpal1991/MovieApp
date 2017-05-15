/**
 * Created by gouravpal on 10/05/17.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import HomePagePresentation from '../presentation/HomePagePresentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../../actions/homeActions';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadMovie("tt1440161");
  }



  render() {
    const {movie} = this.props;

    return (
        <HomePagePresentation movie={movie}/>
    );
  }
}

HomePage.propTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movie: state.homeReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
