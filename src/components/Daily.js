import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderJs from './common/HeaderJs';
import Image from './Image';

class Daily extends Component {
  render() {
    console.log(this.props);
    const randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
    const randomImage = `image${randomNumber}`;
    return (
      <div>
        {/* <HeaderJs title={'Faces'} subtitle={'My family doesn\'t get'} /> */}
        <div className='container'>
          <ul className='list-of-images'>
            {
              Object
              .keys(this.props.images)
              .map(key => {
                return (key === `${randomImage}`) ?
                  <Image
                    key={key}
                    details={this.props.images[key]}
                  /> :
                '';
              })
            }
          </ul>
        </div>
      </div>
        );
  }
}

export default Daily;
