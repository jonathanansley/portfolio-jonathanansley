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

// education
import pmp from '../imgs/skills/pmp.png';
import mba from '../imgs/skills/mba.png';
import clearance from '../imgs/skills/clearance.png';

export default class Skills extends React.Component {
  render() {
    return (

      <div>

        <PageHeader>
          Skills
        </PageHeader>

          <div>

            <Grid className='grid'>

              <Row>

                {/* <Col xs={6} md={5} className='icon-skill'>
                  MERN stack
                  <img src={mern} className='icon-skill' alt='MERN stack' />
                </Col>
 */}
                <Col xs={6} md={5}>
                  MongoDB
                  <img className='icon-skill' src={mongodb} alt='MongoDB' />
                </Col>

                <Col xs={6} md={5}>
                  express
                  <img className='icon-skill' src={express} alt='express' />
                </Col>

                <Col xs={6} md={5}>
                  React.js
                  <img className='icon-skill' src={react} alt='React.js' />
                </Col>

                <Col xs={6} md={5}>
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

              <Row>

                <Col xs={6} md={4}>
                  Active DoD Secret Clearance
                  <img className='icon-skill' src={clearance} alt='Active DoD Secret Clearance' />
                </Col>

                <Col xs={6} md={4}>
                  Project Management Professional (PMP)®
                  <img className='icon-skill' src={pmp} alt='Project Management Professional' />
                </Col>

                <Col xs={6} md={4}>
                  Master of Business Administration
                  <img className='icon-skill' src={mba} alt='Master of Business Administration' />
                </Col>

              </Row>

            </Grid>

          </div>

        </div>

      );

  }

}
