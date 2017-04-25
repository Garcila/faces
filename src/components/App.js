import React, { Component } from 'react';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Image from './Image';
import Daily from './Daily';

import imagesData from '../imagesData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: imagesData
    };
  }

  render() {
    return (
      <div className='App'>
        <HeaderJs title={'Faces'} subtitle={'My family doesn\'t get'} />
        < Daily images={this.state.images} />
      </div>
    );
  }
}

export default App;
