import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        {/* <PreviewCompatibleImage imageInfo={testimonial.image} /> */}
        <div className="message-body">
          <i>{testimonial.quote}</i>
          <br />
          <strong> – {testimonial.author}</strong>
        </div>
      </article>
    ))}
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
