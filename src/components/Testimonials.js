import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Testimonials = ({ testimonials }) => (
  <Carousel showStatus={ false } infiniteLoop={ true } showIndicators={ false } autoPlay={ true } showThumbs={false} showArrows={true} dynamicHeight={ false } className="testimonials">
    {testimonials.map((testimonial) => (
        <article key={v4()} className="is-flex is-flex-direction-row is-justify-content-center is-align-content-center is-flex-wrap-nowrap">
          <div>
            {testimonial.image ? (
              <div className="image is-circle is-128x128">
                <PreviewCompatibleImage
                  imageInfo={{ image: testimonial.image, alt: `${testimonial.author}`, className: "is-rounded"}}
                />
              </div>
            ) : null}
          </div>
          <div className="has-text-left">
            <p className="is-size-4">{testimonial.quote}</p>
            <br />
            <strong> – {testimonial.author}</strong>
          </div>
        </article>
    ))}
  </Carousel>
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
