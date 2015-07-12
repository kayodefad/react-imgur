import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ImgurImage from './ImgurImage';
import { searchGallery } from './../services/imgur';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {images: [], page: 0};
  }

  loadImages(page = 0) {
    searchGallery(undefined, undefined, page).then((result) => {
      if (this.isMounted()) {
        this.setState({images: result.data, page: page});
      }
    });
  }

  componentDidMount() {
    this.loadImages();
  }

  render() {

    return (
      <div>
        <Navbar
          brand='React Imgur viewer'
          fixedTop={true}>

          <Nav right>
            <NavItem
              onClick={() => this.loadImages(this.state.page - 1)}
              disabled={this.state.page <= 0}>
              <i className='glyphicon glyphicon-arrow-left'></i> Previous page
            </NavItem>
            <NavItem onClick={() => this.loadImages(this.state.page + 1)}>
              Next page <i className='glyphicon glyphicon-arrow-right'></i>
            </NavItem>
          </Nav>

        </Navbar>

        <div
          className='container'
          style={{paddingTop: '70px'}}>

          {this.state.images.map(function(image) {
            return (
              <ImgurImage
                image={image}
                key={image.id} />
            );
          })}

        </div>
      </div>
    );
  }
}
