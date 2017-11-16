import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

// icons
import linkedin from '../imgs/linkedin.png';
import github from '../imgs/github.png';
import resume from '../imgs/resume.jpg';

export default class Footer extends React.Component {
  render() {
    return (

      <div className='footer'>

            <a href="https://www.linkedin.com/in/jonathanansley/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className='icon-footer' alt="Connect with me on LinkedIn" title="See my LinkedIn" />
            </a>

            <a href="https://github.com/jonathanansley" target="_blank" rel="noopener noreferrer">
              <img src={github} className='icon-footer' alt="Connect with me on GitHub"  title="See my GitHub" />
            </a>

            <a href="https://docs.google.com/document/d/1Qfe54llYMwSKYcqd2sGlTKX4pfhlfafEMTL4CWBYN4g/edit" target="_blank" rel="noopener noreferrer">
              <img src={resume} className='icon-footer' alt="Resume" title="See my resume" />
            </a>

      </div>

    );

  }

}
