import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

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
    return date.getHours() + ':' + date.getMinutes() + ', ' + monthNames[date.getMonth() - 1] + ' ' + date.getDay();
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
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-2 col-md-offset-2'>
              <i className='glyphicon glyphicon-eye-open'></i> {this.props.image.views}
            </div>
            <div className='col-md-2'>
              <i className='glyphicon glyphicon-comment'></i> {this.props.image.comment_count}
            </div>
            <div className='col-md-2'>
              <i className='glyphicon glyphicon-thumbs-up'></i> {this.props.image.ups}
            </div>
            <div className='col-md-2'>
              <i className='glyphicon glyphicon-thumbs-down'></i> {this.props.image.downs}
            </div>
            <div className='col-md-2'>
              <i className='glyphicon glyphicon-list'></i> {this.props.image.section}
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
