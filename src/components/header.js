import React, { Component } from 'react';
import {
  Navbar,
  Alignment,
  Intent,
  Button,
  Icon,
  ControlGroup,
  InputGroup,
} from '@blueprintjs/core';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Button
              large={true}
              minimal={true}
              size="large"
              icon="barcode"
              intent={Intent.WARNING}
              text={<b>CodeName</b>}
            />
          </Navbar.Heading>
          <Navbar.Divider />
          <ControlGroup fill={true} style={{ width: '500px' }}>
            <InputGroup
              leftIcon="search"
              type="search"
              fill={true}
              onChange={this.handleFilterChange}
              placeholder="has: girl from: 12/03/2019"
            />
          </ControlGroup>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button minimal={true} icon="settings" text="Settings" />
          <Button minimal={true} icon="person" text="Account" />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default Header;
