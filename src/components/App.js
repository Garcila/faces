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
      return (
        <div>
          <Daily images={this.state.images} />
        </div>
      );
    }
    return <Gallery images={this.state.images} />;
  }
  changeView() {
    this.setState({ singleImage: !this.state.singleImage });
  }

  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <HeaderJs
            changeView={this.changeView.bind(this)}
            title={'Faces...'}
            subtitle={'My family doesn\'t get'}
            go={'all'}
          />
        </div>
        {this.showGallery()}
      </div>
    );
  }
}

export default App;
