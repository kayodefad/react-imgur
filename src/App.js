import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Image from './Image';
import { searchGallery } from './services/imgur';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {images: [], page: 0};
  }

  loadImages(page) {
    searchGallery(undefined, undefined, page).then((result) => {
      this.setState({images: result.data});
    });
  }

  prevPage() {
    this.state.page--;
    this.loadImages(this.state.page);
  }

  nextPage() {
    this.state.page++;
    this.loadImages(this.state.page);
  }

  componentDidMount() {
    this.loadImages();
  }

  render() {
    var containerStyle = {
      paddingTop: '70px'
    };

    return (
      <div>
        <Navbar brand='React-Bootstrap' fixedTop={true}>
          <Nav right>
            <NavItem onClick={this.prevPage.bind(this)} disabled={this.state.page <= 0}>
              <i className='glyphicon glyphicon-arrow-left'></i> Previous page
            </NavItem>
            <NavItem onClick={this.nextPage.bind(this)}>
              Next page <i className='glyphicon glyphicon-arrow-right'></i>
            </NavItem>
          </Nav>
        </Navbar>
        <div className='container' style={containerStyle}>
          {this.state.images.map(function(image) {
            return (
              <Image image={image} key={image.id}/>
            );
          })}
        </div>
      </div>
    );
  }
}
