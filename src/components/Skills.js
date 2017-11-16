import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

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

              <Row>

                <Col xs={6} md={4} className='icon-skill'>
                  MERN stack
                  <img src={mern} className='icon-skill' alt='MERN stack' />
                </Col>

                <Col xs={6} md={4}>
                  MongoDB
                  <img className='icon-skill' src={mongodb} alt='MongoDB' />
                </Col>

                <Col xs={6} md={4}>
                  express
                  <img className='icon-skill' src={express} alt='express' />
                </Col>

                <Col xs={6} md={4}>
                  React.js
                  <img className='icon-skill' src={react} alt='React.js' />
                </Col>

                <Col xs={6} md={4}>
                  Node.js
                  <img className='icon-skill' src={nodejs} alt='Node.js' />
                </Col>

              </Row>

              <Row>

                <Col xs={6} md={4}>
                  HTML5
                  <img className='icon-skill' src={html} alt='HTML5' />
                </Col>

                <Col xs={6} md={4}>
                  CSS
                  <img className='icon-skill' src={css} alt='CSS' />
                </Col>

                <Col xs={6} md={4}>
                  JavaScript
                  <img className='icon-skill' src={javascript} alt='JavaScript' />
                </Col>

              </Row>

              <Row>

                <Col xs={6} md={4}>
                  MySQL
                  <img className='icon-skill' src={mysql} alt='MySQL' />
                </Col>

                <Col xs={6} md={4}>
                  JQuery
                  <img className='icon-skill' src={jquery} alt='JQuery' />
                </Col>

              </Row>

            </Grid>

          </div>

        </div>

      );

  }

}
