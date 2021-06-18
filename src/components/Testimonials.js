import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Testimonials = ({ testimonials }) => (
  <div>
      <Carousel showStatus={ false }>
        {testimonials.map((testimonial) => (
            <article key={v4()} className="columns is-vcentered">
              <div className="column is-1">
                {testimonial.image ? (
                  <div className="image is-circle is-128x128">
                    <PreviewCompatibleImage
                      imageInfo={{ image: testimonial.image, alt: `${testimonial.author}`, imgStyle: { maxHeight: '200px', borderRadius: '100%'}, className: "is-rounded"}}
                    />
                  </div>
                ) : null}
              </div>
              <div className="column is-6 has-text-left">
                <h3 className="size-3 with-border with-border__left">O que os clientes dizem?</h3>
                <i className="size-5">{testimonial.quote}</i>
                <br />
                <strong> – {testimonial.author}</strong>
              </div>
            </article>
        ))}
      </Carousel>
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
