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

            <Grid>

              // MERN
              <Row>

                <Col xs={6} md={4}>
                  <img src={mern} className='icon-skills' alt='MERN stack' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={mongodb} alt='MongoDB' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={express} alt='express' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={react} alt='React.js' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={nodejs} alt='Node.js' />
                </Col>

              </Row>

              <Row>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={html} alt='HTML5' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={css} alt='CSS' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={javascript} alt='JavaScript' />
                </Col>

              </Row>

              <Row>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={mysql} alt='MySQL' />
                </Col>

                <Col xs={6} md={4}>
                  <img className='icon-skills' src={jquery} alt='JQuery' />
                </Col>

              </Row>

            </Grid>

          </div>

        </div>

      );

  }

}
