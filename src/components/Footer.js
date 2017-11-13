import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

// icons
import logo from '../logo.svg';
import linkedin from '../imgs/linkedin.png';
import github from '../imgs/github.png';

export default class Footer extends React.Component {
  render() {
    return (

      <div>

        <span>
          <a href="#">Copyright &copy; 2017 Jonathan Ansley</a>
        </span>

        <div>

            <a href="https://www.linkedin.com/in/jonathanansley/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className='icon' alt="Connect with me on LinkedIn" />
            </a>

            <a href="https://github.com/jonathanansley" target="_blank" rel="noopener noreferrer">
              <img src={github} className='icon' alt="Connect with me on GitHub" />
            </a>

        </div>

      </div>

    );

  }

}
