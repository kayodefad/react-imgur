import React, { Component } from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';

export default class ImgurImage extends Component {

  formatDate(date) {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dev'
    ];
    return date.getHours() + ':' + date.getMinutes() + ', ' + monthNames[date.getMonth() - 1] + ' ' + date.getDate();
  }

  getImage() {
    if (this.props.image.cover) {
      return '//imgur.com/' + this.props.image.cover + '.jpg';
    }
    return this.props.image.link.replace('http://', '//');
  }

  render() {

    const footer = (
      <div className='row'>
        <div className='col-md-4'>
          Posted at {this.formatDate(new Date(this.props.image.datetime * 1000))}
          &nbsp;by&nbsp;
          <a
            href={'https://imgur.com/user/' + this.props.image.account_url}
            target='_blank'>
            {this.props.image.account_url}
          </a>
          {!this.props.image.account_url ? 'Unknown user' : ''}
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-3'>
              <Glyphicon glyph='eye-open' /> {this.props.image.views}
            </div>
            <div className='col-md-3'>
              <Glyphicon glyph='comment' /> {this.props.image.comment_count}
            </div>
            <div className='col-md-3'>
              <Glyphicon glyph='thumbs-up' /> {this.props.image.ups}
            </div>
            <div className='col-md-3'>
              <Glyphicon glyph='thumbs-down' /> {this.props.image.downs}
            </div>
          </div>
        </div>

      </div>
    );

    return (
      <div>
        <Panel
          header={this.props.image.title}
          footer={footer}
          bsStyle='primary'>

          <p>{this.props.image.description}</p>

          <a
            href={this.props.image.link}
            target='_blank'>

            <img
              className='img-responsive center-block img-thumbnail'
              src={this.getImage()} />
          </a>
        </Panel>
      </div>
    );
  }

}
