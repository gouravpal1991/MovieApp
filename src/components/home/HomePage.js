/**
 * Created by gouravpal on 10/05/17.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>PluralSight Administration</h1>
        <Link to="about" className="btn btn-primary btn-lg">Know more about developer</Link>
      </div>
    );
  }
}

export default HomePage;
