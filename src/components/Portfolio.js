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

        <PageHeader>
          Portfolio
        </PageHeader>

        <Grid>

          <Row>

            <Col xs={6} md={4}>

              <Thumbnail src='../imgs/shoemarket.png' alt='ShoeMarket'>
              // <img src={shoemarket} className='icon' alt="ShoeMarket app on Heroku" />

                <h3>ShoeMarket</h3>

                <p>
                  Description: ShoeMarket helps sellers of athletic shoes manage the inventory, sales, and clients.
                </p>

                <p>

                  <Button bsStyle="primary">
                    App

                    <a href="https://fierce-reef-37071.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    </a>

                  </Button>&nbsp;

                  <Button bsStyle="default" target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/ShoeMarket'>
                    Code on GitHub
                  </Button>

                </p>

              </Thumbnail>

            </Col>





            <Col xs={6} md={4}>

              <Thumbnail src='../imgs/surchport.png' alt="242x200">
                <h3>
                  SurchPort
                </h3>

                <p>
                  Description
                </p>

                <p>

                  <Button bsStyle="primary">
                    App
                  </Button>&nbsp;

                  <Button bsStyle="default">
                    Code on GitHub
                  </Button>

                </p>
              </Thumbnail>
            </Col>





            <Col xs={6} md={4}>
              <Thumbnail src='../imgs/traintimes.png' alt="242x200">
                <h3>
                  TrainTimes
                </h3>

                <p>
                  Description: TrainTimes incorporates Firebase to host arrival and departure data. The app  retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.\
                </p>

                <p>

                  <Button bsStyle="primary">
                    App
                  </Button>&nbsp;

                  <Button bsStyle="default">
                    Code on GitHub
                  </Button>

                </p>
              </Thumbnail>

            </Col>

          </Row>

        </Grid>
      );







        {/* //ShoeMarket */}
				<div id="port-group">

					<div className='row'>

            <div className="col-4">

							<h3 className='port-title'>ShoeMarket</h3>

							<div className="port-item">

                <a href="https://fierce-reef-37071.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={shoemarket} className='icon-portfolio' alt="ShoeMarket app on Heroku" />
                </a>

							</div>

							<div className='port-desc'>

							<a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/ShoeMarket'>Code on GitHub</a>

								<p>
									Description: ShoeMarket helps sellers of athletic shoes manage the inventory, sales, and clients.
								</p>

							</div>

						</div>

				</div>

        </div>
        {/* // end of ShoeMarket */}





        {/* //SurchPort */}
				<div id="port-group">

					<div className='row'>

            <div className="col-4">

							<h3 className='port-title'>SurchPort</h3>

							<div className="port-item">

                <a href="https://johnsaugy.github.io/SurchPort/" target="_blank" rel="noopener noreferrer">
                  <img src={surchport} className='icon-portfolio' alt="SurchPort app on GitHub pages" />
                </a>

							</div>

							<div className='port-desc'>

							<a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/johnsaugy/SurchPort'>Code on GitHub</a>

								<p>
									Description: SurchPort is A Better Way to Discover Your New Favorite Spot. It allows users to Search, Compare, and Save any place you'd ever want to visit.</p>

							</div>

						</div>

				</div>

        </div>
        {/* // end of SurchPort */}




        {/* //TrainTimes */}
        <div id="port-group">

          <div className='row'>

            <div className="col-4">

              <h3 className='port-title'>TrainTimes</h3>

              <div className="port-item">

                <a href="https://fierce-reef-37071.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={traintimes} className='icon-portfolio' alt="ShoeMarket app on Heroku" />
                </a>

              </div>

              <div className='port-desc'>

              <a className='git-link' target='_blank' rel="noopener noreferrer" href='https://.com/jonathanansley/TrainTimes'>Code on GitHub</a>

                <p>
                  Description: TrainTimes incorporates Firebase to host arrival and departure data. The app  retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
                </p>

              </div>

            </div>

        </div>

        </div>
        {/* // end of TrainTimes */}





      </div>

    );

  }

}
