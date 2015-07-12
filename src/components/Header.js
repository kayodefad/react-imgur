import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {

  render() {

    return (
      <Navbar
        brand='React Imgur viewer'
        fixedTop={true}>

        <Nav right>
          <NavItem
            onClick={() => this.props.loadImages(this.props.page - 1)}
            disabled={this.props.page <= 0}>
            <i className='glyphicon glyphicon-arrow-left'></i> Previous page
          </NavItem>
          <NavItem onClick={() => this.props.loadImages(this.props.page + 1)}>
            Next page <i className='glyphicon glyphicon-arrow-right'></i>
          </NavItem>
        </Nav>

      </Navbar>
    );

  }

}