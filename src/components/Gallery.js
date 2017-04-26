import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {
  render() {
    console.log(this.props);
    const { images } = this.props;
    return (
        <div className='container'>
          <ul className='list-of-images'>
            {
              Object
              .keys(images)
              .map(key =>
                <Image
                  key={key}
                  details={images[key]}
                />)
            }
          </ul>
        </div>
        );
  }
}

export default Gallery;
