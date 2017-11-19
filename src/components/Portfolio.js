import React from 'react';
import { PageHeader, Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

// icons
import shoemarket from '../imgs/shoemarket.png';
import surchport from '../imgs/surchport.png';
import traintimes from '../imgs/traintimes.png';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">

        <PageHeader className="pageheader">
          Portfolio
        </PageHeader>

        <Grid>

          <Row>

            {/* ShoeMarket */}
            <Col xs={6} md={4}>

            <div>

              <h3>
                ShoeMarket
              </h3>

              <Thumbnail target="_blank" rel="noopener noreferrer" href="https://fierce-reef-37071.herokuapp.com/">

                <img src={shoemarket} className='icon-portfolio' alt="ShoeMarket app on Heroku" target="_blank" rel="noopener noreferrer" href="https://fierce-reef-37071.herokuapp.com/" />

                <p>
                  Helps sellers of athletic shoes manage the inventory, sales, and clients.
                </p>

                <p>

                  <Button bsStyle="primary" target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/ShoeMarket'>
                    Code on GitHub
                  </Button>&nbsp;

                </p>

              </Thumbnail>

            </div>

            </Col>
            {/* End of ShoeMarket */}



            {/* SurchPort */}
            <Col xs={6} md={4}>

            <h3>
              SurchPort
            </h3>

              <Thumbnail src='../imgs/surchport' alt='SurchPort' target="_blank" rel="noopener noreferrer" href='https://johnsaugy.github.io/SurchPort/'>
                <img src={surchport} className='icon-portfolio' alt="SurchPort app on Heroku" />

                <p>
                  A Better Way to Discover Your New Favorite Spot. It allows users to Search, Compare, and Save any place you would ever want to visit.
                </p>

                <p>

                  <Button bsStyle="primary" target='_blank' rel="noopener noreferrer" href='https://github.com/johnsaugy/SurchPort'>
                    Code on GitHub
                  </Button>
                </p>

              </Thumbnail>

            </Col>
            {/* End of SurchPort */}



            {/* TrainTimes */}
            <Col xs={6} md={4}>

            <h3>
              TrainTimes
            </h3>

              <Thumbnail src='../imgs/traintimes.png' alt='TrainTimes' target="_blank" rel="noopener noreferrer" href='https://jonathanansley.github.io/TrainTimes'>
                <img src={traintimes} className='icon-portfolio' alt="TrainTimes app on GitHub pages" />

                <p>
                  Incorporates Firebase to host arrival and departure data. Retrieves and manipulates this information with Moment.js.
                </p>

                <p>

                  <Button bsStyle="primary" target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/TrainTimes'>
                    Code on GitHub
                  </Button>

                </p>

              </Thumbnail>

            </Col>
            {/* End of TrainTimes */}

          </Row>

        </Grid>

      );

      </div>

    );

  }

}
