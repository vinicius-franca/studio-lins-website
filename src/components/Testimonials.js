import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Testimonials = ({ testimonials }) => (
  <div>
    
    <h3 className="has-text-weight-semibold with-border with-border__left">O que os clientes dizem?</h3>
    <div class="columns">
      {testimonials.map((testimonial) => (
      <div className="column is-6">
        <article key={v4()} className="columns">
          <div className="column is-2">
            {testimonial.image ? (
              <div className="image is-128x128">
                <PreviewCompatibleImage
                  imageInfo={{ image: testimonial.image, alt: `${testimonial.author}`, style: { borderRadius: '100%'} }}
                />
              </div>
            ) : null}
          </div>
          <div className="column is-10">
            <i>{testimonial.quote}</i>
            <br />
            <strong> – {testimonial.author}</strong>
          </div>
        </article>
      </div>
      ))}
    </div>
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

export default Testimonials
