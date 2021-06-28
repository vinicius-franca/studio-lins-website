import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../templates/portfolio-post'

const PortfolioPostPreview = ({ entry, widgetFor }) => {
  const categories = entry.getIn(['data', 'categories'])
  return (
    <PortfolioPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      categories={categories && categories.toJS()}
      title={entry.getIn(['data', 'title'])}
      photos={entry.getIn(['data', 'photos'])}
    />
  )
}

PortfolioPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PortfolioPostPreview
