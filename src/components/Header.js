import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export default class Header extends Component {

  render() {

    return (
      <Navbar
        brand='React Imgur viewer'
        fixedTop={true}
        toggleNavKey={0}>

        <Nav right eventKey={0}>
          <NavItem
            onClick={() => this.props.loadImages(this.props.page - 1)}
            disabled={this.props.page <= 0}>
            <Glyphicon glyph='arrow-left' /> Previous page
          </NavItem>
          <NavItem onClick={() => this.props.loadImages(this.props.page + 1)}>
            Next page <Glyphicon glyph='arrow-right' />
          </NavItem>
        </Nav>

      </Navbar>
    );

  }

}