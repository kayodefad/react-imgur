import 'babel-core/register';
import React, { Component } from 'react';
import Loader from 'react-loader';
import Header from './Header';
import ImgurImageList from './ImgurImageList';
import { searchGallery } from './../services/imgur';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {images: [], page: 0, loaded: false};
  }

  async loadImages(page = 0) {
    this.setState({loaded: false});

    try {
      let result = await searchGallery(undefined, undefined, page);
      this.setState({images: result.data, page: page, loaded: true});
    } catch (e) {
      this.setState({loaded: true});
    }

  }

  componentDidMount() {
    this.loadImages();
  }

  render() {

    return (
      <Loader loaded={this.state.loaded}>
        <Header page={this.state.page} loadImages={this.loadImages.bind(this)} />
        <ImgurImageList images={this.state.images} />
      </Loader>
    );
  }
}
