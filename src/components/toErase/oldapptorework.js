import React, { Component } from 'react';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Image from './Image';

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
        <div className='container'>
          <ul className='list-of-images'>
            {
              Object
              .keys(this.state.images)
              .map(key =>
                <Image
                  key={key}
                  details={this.state.images[key]}
                />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
