import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Menu extends React.Component {
  render() {
    return (

      <div className='menubar'>

        <Navbar>

          <Nav bsStyle="tabs" onSelect={this.handleSelect}>

            <NavItem eventKey="1">
              <Link to='/about'>
                About
              </Link>
            </NavItem>

            <NavItem eventKey="2">
              <Link to='/skills'>
                Skills
              </Link>
            </NavItem>

            <NavItem eventKey="3">
              <Link to='/portfolio'>
                Portfolio
              </Link>
            </NavItem>

          </Nav>

        </Navbar>

      </div>

    );

  }

}
