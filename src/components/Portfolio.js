import React from 'react';

// icons
import shoemarket from '../imgs/shoemarket.png';
import surchport from '../imgs/surchport.png';
import traintimes from '../imgs/traintimes.png';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">

			  <h1>Portfolio</h1>

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

							<a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/ShoeMarket'>Github Link</a>

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

							<a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/johnsaugy/SurchPort'>Github Link</a>

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

              <a className='git-link' target='_blank' rel="noopener noreferrer" href='https://github.com/jonathanansley/TrainTimes'>Github Link</a>

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
