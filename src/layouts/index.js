import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Bitter|Open+Sans" />

      <link rel="apple-touch-icon" sizes="180x180" href={require("../assets/apple-touch-icon.png")} />
      <link rel="icon" type="image/png" sizes="32x32" href={require("../assets/favicon-32x32.png")} />
      <link rel="icon" type="image/png" sizes="16x16" href={require("../assets/favicon-16x16.png")} />
      <link rel="mask-icon" href={require("../assets/safari-pinned-tab.svg")} color="#5bbad5" />
      <meta name="theme-color" content="#000" />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
