import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderJs from './common/HeaderJs';

class Daily extends Component {
  render() {
    return (
      <div>
        <HeaderJs title={'Faces'} subtitle={'My family doesn\'t get'} />
        <Link to='/image'>Visit the Gallery</Link>
      </div>
    );
  }
}

export default Daily;
