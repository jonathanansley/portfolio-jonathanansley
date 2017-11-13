import React from 'react';

// icons
import headshot from '../imgs/headshot.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div>

        <h1>About</h1>

        <a>
          <img src={headshot} className='icon' alt="Jonathan Ansley" />
        </a>

        <h2>
          Welcome to Jonathan Ansley's portfolio.
        </h2>

        <span>
          Full stack web developer residing in Arlington, Virginia.
          I have 18 years of experience creating databases, writing software, trouble-shooting, and managing projects.
          Have both a technical and a business background and can help your organization transform clunky systems into something you actually want to use.
          Started working with computers when I was 12 years old, and I have changed with the technology. For now, I prefer web technologies on the back end or the full stack.
        </span>

      </div>
    );
  }
}
