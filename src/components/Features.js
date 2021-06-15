import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-gapless portfolio-roll">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4 portfolio-item">
        <PreviewCompatibleImage imageInfo={item} />
        <span className="portfolio-title has-text-white is-size-5">{item.text}</span>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
