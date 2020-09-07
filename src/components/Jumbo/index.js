import React from 'react';
import PropTypes from 'prop-types';

import MailChimpForm from '../MailChimpForm';
import { bgImg } from '../../utils/';
import './styles.scss';

const Jumbo = ({ title }) => (
  <header className="pure-g landing">
    <div className="pure-u-1 pure-g darken">
      <div className="pure-u-1">
        <h1>{title}</h1>
        <MailChimpForm />
      </div>
    </div>
  </header>
);

Jumbo.propTypes = {
  title: PropTypes.string,
};

export default Jumbo;
