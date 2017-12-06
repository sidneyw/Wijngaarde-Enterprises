import React from 'react';
import Jumbo from '../components/Jumbo'
import Helmet from 'react-helmet'

import { bgImg } from '../utils/'
import '../styles/classicmens.scss';

const ClassicMens = () => (
  <div id="classic-mens" className="barbershop">
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Classic Mens Cuts</title>
      <meta name="description" content="A family-owned enterprise of barber shops operating on Long Island." />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Sidney Wijngaarde" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="Wijngaarde Enterprises - Classic Mens Cuts" />
      <meta property="og:url" content="www.wijnents.com/classicmens.html" />
      <meta property="og:image" content="http://www.wijnents.com/img/classicmens.jpg" />
      <meta property="business:contact_data:street_address" content="525 Main Street" />
      <meta property="business:contact_data:locality" content="Islip" />
      <meta property="business:contact_data:region" content="New York" />
      <meta property="business:contact_data:postal_code" content="11751" />
      <meta property="business:contact_data:country_name" content="United States" />

      <link rel="preload" as="image" href={require("../assets/classicmens.jpg")} />
    </Helmet>

    <Jumbo title="Classic Mens Cuts" />

    <section id="services">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-2 card">
          <i className="fa fa-trophy"></i>
          <div className="card-body">
            <h3>Top Quality Cuts</h3>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-2 card">
          <i className="fa fa-calendar"></i>
          <div className="card-body">
            <h3>No Appointments Needed</h3>
          </div>
        </div>

      </div>
    </section>
    <section id="contact">
      <h1 className="z-depth-1">Come On In</h1>

      <div id="map" style={bgImg(require('../assets/map-dark.png'))} className="pure-g">
        <div className="pure-u-11-12 pure-u-sm-1-2 pure-u-md-1-3 z-depth-1 card info">
          <h3>We'll Be Waiting For You</h3>
          <p>525 Main Street, Islip NY 11751</p>
          <a className="pure-u-3-4 pure-button button-secondary" href="https://www.google.com/maps/place/Cutting+Edge+Bayshore/@40.7190364,-73.2545904,17z/data=!3m1!4b1!4m5!3m4!1s0x89e832f2b6ee70c9:0xe553fa09bc10b00c!8m2!3d40.7190324!4d-73.2524017">
            <i className="fa fa-map-marker"></i>Get Directions
          </a>
          <a href="tel:631-224-1261" className="pure-u-3-4 pure-button button-secondary">
            <i className="fa fa-phone"></i>(631)-224-1261
          </a>
        </div>

        <div className="pure-u-11-12 pure-u-sm-1-2 pure-u-md-1-3 z-depth-1 card hours">
          <h3>Hours of Operation</h3>
          <table className="pure-table">
            <thead>
              <tr>
                  <th>Day</th>
                  <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mon</td>
                <td>10:00am - 05:00pm</td>
              </tr>
              <tr>
                <td>Tue - Fri</td>
                <td>09:00am - 06:00pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="about">
        <h1>Family Owned. Quality Assured.</h1>
        <p>
          This family owned and operated barbershop and hairstylist is located at
          525 Main Street in Islip, NY. We are the 2nd owner of this community
          staple that has been in the same location for over 20 years. Wijngaarde
          Enterprises LLC, is committed to serving our clients from the area and
          beyond with high quality and personalized service like no other. We
          value your business and hope to see you in the barbershop anytime.
        </p>
      <div className="pure-g">
      </div>
    </section>

    <footer>
      <a className="social-wrap google" href="https://www.google.com/maps/place/Cutting+Edge+Bayshore/@40.7190324,-73.2545904,17z/data=!4m13!1m7!3m6!1s0x89e832f2b6fd3223:0xb8629ddafc2cef59!2s176+W+Main+St,+Bay+Shore,+NY+11706!3b1!8m2!3d40.7190324!4d-73.2524017!3m4!1s0x89e832f2b6ee70c9:0xe553fa09bc10b00c!8m2!3d40.7190324!4d-73.2524017">
        <i className="fa fa-google"></i>
      </a>
      <a className="social-wrap facebook" href="https://www.facebook.com/cuttingedge.bayshore">
        <i className="fa fa-facebook"></i>
      </a>
      <a className="social-wrap yelp" href="https://www.yelp.com/biz/cutting-edge-hair-stylist-and-mens-care-bay-shore?osq=barbershop">
        <i className="fa fa-yelp"></i>
      </a>
    </footer>
  </div>
);

export default ClassicMens;
