import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>

        <Navbar>

          <Nav>

            <NavItem>
              <Link to='/about'>
                About
              </Link>
            </NavItem>

            <NavItem>
              <Link to='/skills'>
                Skills
              </Link>
            </NavItem>

            <NavItem>
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
