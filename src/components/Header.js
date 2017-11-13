import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (

      <div className='header'>

        <Navbar>

          <Nav bsStyle="tabs" onSelect={this.handleSelect}>

            <NavItem eventKey="1" title="Item">
              <Link to='/about'>
                About
              </Link>
            </NavItem>

            <NavItem eventKey="2" title="Item">
              <Link to='/skills'>
                Skills
              </Link>
            </NavItem>

            <NavItem eventKey="3" title="Item">
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
