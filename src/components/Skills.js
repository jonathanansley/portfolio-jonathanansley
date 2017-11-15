import React from 'react';
import { PageHeader, Media } from 'react-bootstrap';

// icons
import html from '../imgs/skills/html.png';
import css from '../imgs/skills/css.png';
import javascript from '../imgs/skills/javascript.jpg';

// MERN icons
import mern from '../imgs/skills/mern.png';
import mongodb from '../imgs/skills/mongodb.png';
import express from '../imgs/skills/express.png';
import react from '../imgs/skills/react.png';
import nodejs from '../imgs/skills/nodejs.png';

// other icons
import mysql from '../imgs/skills/mysql.png';
import jquery from '../imgs/skills/jquery.png';

export default class Skills extends React.Component {
  render() {
    return (

      <div>

        <PageHeader>
          Skills
        </PageHeader>

          <div>

            <Media.List>

              <Media.ListItem>

                // MERN
                <Media.Left>
                  <img src={mern} className='icon-skills' alt='MERN stack' />
                </Media.Left>

                <Media.Body>
                  <Media.Heading>
                    MERN stack
                  </Media.Heading>

                  <Media>

                    <Media.Left>
                      <img className='icon-skills' src={mongodb} alt='MongoDB' />
                    </Media.Left>

                    <Media.Left>
                      <img className='icon-skills' src={express} alt='express' />
                    </Media.Left>

                    <Media.Left>
                      <img className='icon-skills' src={react} alt='React.js' />
                    </Media.Left>

                    <Media.Left>
                      <img className='icon-skills' src={nodejs} alt='Node.js' />
                    </Media.Left>

                  </Media>

                </Media.Body>

              </Media.ListItem>

              <Media.Left>
                <img className='icon-skills' src={html} alt='HTML5' />
              </Media.Left>

              <Media.Left>
                <img className='icon-skills' src={css} alt='CSS' />
              </Media.Left>

              <Media.Left>
                <img className='icon-skills' src={javascript} alt='JavaScript' />
              </Media.Left>

              <Media.Left>
                <img className='icon-skills' src={mysql} alt='MySQL' />
              </Media.Left>

              <Media.Left>
                <img className='icon-skills' src={jquery} alt='JQuery' />
              </Media.Left>

            </Media.List>

          </div>

        </div>

      );

  }

}
