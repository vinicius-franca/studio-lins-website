import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Testimonials = ({ testimonials }) => (
  <div>
    <h3 className="size-5 with-border with-border__left">O que os clientes dizem?</h3>
    <div className="columns">
      <Carousel showStatus={ false }>
        {testimonials.map((testimonial) => (
        <div className="column is-6">
          <article key={v4()} className="columns">
            <div className="column is-2">
              {testimonial.image ? (
                <div className="image">
                  <PreviewCompatibleImage
                    imageInfo={{ image: testimonial.image, alt: `${testimonial.author}`}}
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
      </Carousel>
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
