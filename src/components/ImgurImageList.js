import React, { Component } from 'react';
import ImgurImage from './ImgurImage';

export default class ImgurImageList extends Component {

  render() {

    return (
      <div
        className='container'
        style={{paddingTop: '70px'}}>

        {this.props.images.map(function(image) {
          return (
            <ImgurImage
              image={image}
              key={image.id} />
          );
        })}

      </div>
    );
  }
}