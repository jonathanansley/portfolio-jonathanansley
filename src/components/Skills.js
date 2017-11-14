import React from 'react';
import { PageHeader } from 'react-bootstrap';

// icons
import css from '../imgs/skills/css.png';
import html from '../imgs/skills/html.png';
import javascript from '../imgs/skills/javascript.jpg';
import mongodb from '../imgs/skills/mongodb.png';
import express from '../imgs/skills/express.png';
import react from '../imgs/skills/react.png';
import nodejs from '../imgs/skills/nodejs.png';
import mern from '../imgs/skills/mern.png';

export default class Skills extends React.Component {
  render() {
    return (

      <div>

            <PageHeader>
              Skills
            </PageHeader>

        <div className='skill'>
          <h3>JavaScript</h3>
          <img src={javascript} className='skill-icon' alt="JavaScript" />
        </div>


        <div className='skill'>
          <h3>CSS</h3>
          <img src={css} className='skill-icon' alt="CSS" />
        </div>

{/*
        <ul>
          <li>
            HTML5
          </li>

          <li>
            GitHub
          </li>

          <li>
            PMP
          </li>

          <li>
            MongoDB
          </li>

          <li>
            Node.js
          </li>

          <li>
            MySQL
          </li>

          <li>
            React.js
          </li>

          <li>
            bootstrap
          </li>

          <li>
            jquery
          </li>

          <li>
            nodejs
          </li>

          <li>
            express
          </li>

          </ul> */}

        </div>

      );

  }

}
