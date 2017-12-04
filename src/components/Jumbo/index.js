import React from 'react';
import PropTypes from 'prop-types';

import { bgImg } from '../../utils/'
import './styles.scss'

const ChimpForm = `
  <div id="mc_embed_signup pure-u-4-5">
    <h2>Subscribe to our mailing list</h2>
    <form
      action="//wijnents.us16.list-manage.com/subscribe/post?u=f6f65c2f018c6f19f35a3f492&amp;id=949e0f980d"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate pure-form pure-g"
      target="_blank"
      novalidate>
      <div id="mc_embed_signup_scroll">
        <input type="text" value="" name="FNAME" class="pure-u-3-4 pure-u-md-1-3" placeholder="First Name" id="mce-FNAME">
        <input type="email" value="" name="EMAIL" class="pure-u-3-4 pure-u-md-1-3 required email" placeholder="Email" id="mce-EMAIL">
        <input type="submit" style="min-height: 0" value="Subscribe" name="subscribe"
        id="mc-embedded-subscribe" class="pure-u-3-4 pure-u-md-1-6 button pure-button button-primary">

        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->

        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f6f65c2f018c6f19f35a3f492_949e0f980d" tabindex="-1" value=""></div>
        <!-- <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button pure-button button-primary"></div> -->
      </div>
    </form>
  </div>
`;

const Jumbo = ({ title, }) => (
  <header className="pure-g landing">
    <div className="pure-u-1 pure-g darken">
      <div className="pure-u-1">
        <h1>{title}</h1>
        <div className="pure-g form-wrap" dangerouslySetInnerHTML={{ __html: ChimpForm }}>
        </div>
      </div>
    </div>
  </header>
);

Jumbo.propTypes = {
  title: PropTypes.string
};

export default Jumbo;
