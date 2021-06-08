import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-gapless">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section p-0">
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          {/* <p>{item.text}</p> */}
        </section>
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
