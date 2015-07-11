import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class ImgurImage extends Component {

  render() {
    return (
      <div>
        <Panel header={this.props.image.title} bsStyle='primary'>
          <img className='img-responsive center-block img-thumbnail' src={this.props.image.link} />
        </Panel>
      </div>
    );
  }

}
