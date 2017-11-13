import React from 'react';

// icons
import headshot from '../imgs/headshot.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div>
        About.js

        <a>
          <img src={headshot} className='icon' alt="Jonathan Ansley" />
        </a>

        <p>
          Full Stack Web Developer Arlington, Virginia area, Information Technology and Services
          PMP
          MBA
          BS in Computer Information Science
          Software professional with 18 years of experience creating databases, writing software, trouble-shooting, and managing projects.
          Have both a technical and a business background and can help your organization transform clunky systems into something you actually want to use.
          Started working with computers when I was 12 years old, and I have changed with the technology. For now, I prefer web technologies on the back end or the full stack.
        </p>

      </div>
    );
  }
}
