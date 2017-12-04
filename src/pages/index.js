import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { bgImg } from '../utils/'
import Jumbo from '../components/Jumbo'
import '../styles/wijnents.scss'

const IndexPage = () => (
  <div className="index">
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Wijngaarde Enterprises</title>
      <meta name="description" content="A family-owned enterprise of barber shops operating on Long Island." />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Sidney Wijngaarde" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="Wijngaarde Enterprises" />
      <meta property="og:url" content="www.wijnents.com" />
      <meta property="og:image" content="http://www.wijnents.com/img/cuttingedge.jpg" />
      <meta property="business:contact_data:street_address" content="176 West Main Street" />
      <meta property="business:contact_data:locality" content="Bay Shore" />
      <meta property="business:contact_data:region" content="New York" />
      <meta property="business:contact_data:postal_code" content="11706" />
      <meta property="business:contact_data:country_name" content="United States" />

      <link rel="preload" href={require('../assets/ny-skyline.jpg')} as="image" type="image/jpg" />
      <link rel="prefetch" href={require('../assets/cuttingedge.jpg')} as="image" type="image/jpg" />
      <link rel="prefetch" href={require('../assets/classicmens.jpg')} as="image" type="image/jpg" />
      <link rel="prefetch" href={require('../assets/wijnents-about.jpg')} as="image" type="image/jpg" />
    </Helmet>

    <Jumbo
      title="Wijngaarde Enterprises"
      bgUrl={require('../assets/ny-skyline.jpg')} />

    <section id="businesses">
      <h2>We're Open For Business</h2>

      <div className="pure-g card-wrap">
        <div className="pure-u-7-8 pure-u-md-1-3 z-depth-1 card">
          <div id="bayshore" style={bgImg(require('../assets/cuttingedge.jpg'))}></div>
          <div className="pure-u-1 card-body">
            <h3>Cutting Edge Bay Shore</h3>
            <p>This community staple has been serving the Bay Shore area now for
              over 55 years. Stop in or give us a call; we are here to service
              your needs.</p>
            <div className="card-icon-wrap">
              <Link className="pure-button button-primary" to="/cutting-edge">
                <i className="fa fa-external-link"></i>Visit Our Site
              </Link>
              <a className="pure-button button-primary" href="https://www.facebook.com/cuttingedge.bayshore">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="pure-button button-google" href="https://www.google.com/maps/place/Cutting+Edge+Bayshore/@40.7190364,-73.2545904,17z/data=!3m1!4b1!4m5!3m4!1s0x89e832f2b6ee70c9:0xe553fa09bc10b00c!8m2!3d40.7190324!4d-73.2524017">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pure-u-7-8 pure-u-md-1-3 z-depth-1 card">
          <div id="classicmens" style={bgImg(require('../assets/classicmens.jpg'))}></div>
          <div className="pure-u-1 card-body">
            <h3>Classic Mens West</h3>
            <p>This community staple has been serving the Islip area now for over 20 years. Stop in or give us a call; we are here to service your needs.</p>
            <div className="card-icon-wrap">
              <Link className="pure-button button-primary" to="/classic-mens">
                <i className="fa fa-external-link"></i>Visit Our Site
              </Link>
              <a className="pure-button button-primary">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="pure-button button-google">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" style={bgImg(require('../assets/wijnents-about.jpg'))}>
      <div className="darken">
        <h1>About Us</h1>
        <p className="pure-u-4-5 pure-u-md-1-2">
          At Wijngaarde Enterprises LLC , our
          mission is to provide our clients with high quality service. We have
          two Locations; 525 Main Street in Islip and 176 W. Main Street in Bay
          Shore. Please stop in for a quality haircut by our experienced staff.
          Our strength is that the staff collectively has over 100 years of
          experience. We are dedicated to making your experience like none
          other. Stop in or give us a call to see how we can be of service to
          you. Visit the site page of each location for more specific
          information.
        </p>
      </div>
    </section>

    <section id="contact">
      <h1 className='z-depth-3'>Get In Touch</h1>

      <div id="map" style={bgImg(require('../assets/wood.jpg'))} className="pure-g">
        <div className="pure-u-2-3 pure-u-md-3-5 card z-depth-2">
          <div className="pure-u-1 pure-u-md-1-2 brand">
            <h3>Wijngaarde Enterprises</h3>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 info">
            <div>
              <p className="highlight">Long Island, New York</p>
              <a href="tel:5167786841" className="pure-u-1"><i className="fa fa-phone"></i>(516)-778-6841</a>
              <a href="mailto:info@wijnents.com" className="pure-u-1"><i className="fa fa-envelope"></i>info@wijnents.com</a>
            </div>
            <div className="social">
              <a href="">
                <i className="fa fa-google"></i>
              </a>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
