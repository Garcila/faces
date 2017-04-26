import React, { Component } from 'react';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Daily from './Daily';
import Gallery from './Gallery';

import imagesData from '../imagesData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: imagesData,
      singleImage: true
    };
  }

  showGallery() {
    if (this.state.singleImage) {
      return <Daily images={this.state.images} />;
    }
    return <Gallery images={this.state.images} />;
  }

  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <HeaderJs title={'Faces'} subtitle={'My family doesn\'t get'} />
        </div>
        {this.showGallery()}
      </div>
    );
  }
}

export default App;
