import React, { Component } from 'react';
import ImgurImage from './ImgurImage';
import { Grid } from 'react-bootstrap';

export default class ImgurImageList extends Component {

  render() {

    return (
      <Grid style={{paddingTop: '70px'}}>

        {this.props.images.map(function(image) {
          return (
            <ImgurImage
              image={image}
              key={image.id} />
          );
        })}

      </Grid>
    );
  }
}