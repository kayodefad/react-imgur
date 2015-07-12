import React, { Component } from 'react';
import { Panel, Glyphicon, Row, Col } from 'react-bootstrap';

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
      <Row>
        <Col md={4}>
          Posted at {this.formatDate(new Date(this.props.image.datetime * 1000))}
          &nbsp;by&nbsp;
          <a
            href={'https://imgur.com/user/' + this.props.image.account_url}
            target='_blank'>
            {this.props.image.account_url}
          </a>
          {!this.props.image.account_url ? 'Unknown user' : ''}
        </Col>
        <Col md={8}>
          <Row>
            <Col md={3}>
              <Glyphicon glyph='eye-open' /> {this.props.image.views}
            </Col>
            <Col md={3}>
              <Glyphicon glyph='comment' /> {this.props.image.comment_count}
            </Col>
            <Col md={3}>
              <Glyphicon glyph='thumbs-up' /> {this.props.image.ups}
            </Col>
            <Col md={3}>
              <Glyphicon glyph='thumbs-down' /> {this.props.image.downs}
            </Col>
          </Row>
        </Col>

      </Row>
    );

    return (
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
    );
  }

}
