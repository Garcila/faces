import React, { Component } from 'react';
import Image from './Image';

class Daily extends Component {
  render() {
    console.log('zapato', this.props);
    const { images } = this.props;
    const randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
    const randomImage = `image${randomNumber}`;
    return (
        <div className='container'>
          <ul className='list-of-images'>
            {
              Object
              .keys(images)
              .map(key => {
                return (key === `${randomImage}`) ?
                  <Image
                    key={key}
                    details={images[key]}
                  /> :
                '';
              })
            }
          </ul>
        </div>
        );
  }
}

export default Daily;
