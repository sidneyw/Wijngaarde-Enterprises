import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Bitter|Open+Sans" rel="stylesheet" defer />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
