import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

// icons
import logo from '../logo.svg';
import linkedin from '../imgs/linkedin.png';
import github from '../imgs/github.png';

export default class Footer extends React.Component {
  render() {
    return (

      <div className='footer'>

            <a href="https://www.linkedin.com/in/jonathanansley/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className='icon-footer' alt="Connect with me on LinkedIn" />
            </a>

            <a href="https://github.com/jonathanansley" target="_blank" rel="noopener noreferrer">
              <img src={github} className='icon-footer' alt="Connect with me on GitHub" />
            </a>

      </div>

    );

  }

}
