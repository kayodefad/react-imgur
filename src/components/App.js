import React, { Component } from 'react';
import Header from './Header';
import ImgurImageList from './ImgurImageList';
import { searchGallery } from './../services/imgur';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {images: [], page: 0};
  }

  loadImages(page = 0) {
    searchGallery(undefined, undefined, page).then((result) => {
      this.setState({images: result.data, page: page});
    });
  }

  componentDidMount() {
    this.loadImages();
  }

  render() {

    return (
      <div>
        <Header page={this.state.page} loadImages={this.loadImages.bind(this)} />
        <ImgurImageList images={this.state.images} />
      </div>
    );
  }
}
