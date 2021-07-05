import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Testimonials from '../components/Testimonials'
import arrowDown from '../img/arrow-down.svg'

import imgInstagram from '../img/instagram.png'

export const IndexPageTemplate = ({
  images,
  heading,
  intro,
  testimonials
}) => (
  <div>
    <div
      className="full-width-image full-width-cover margin-top-0"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`}}>
      <Carousel showStatus={ false } showThumbs={false} showArrows={false} dynamicHeight={ false }>
        { images.map((image) => (
          <div>
            { image.childImageSharp ? (
                  <PreviewCompatibleImage
                    imageInfo={{ image: image.childImageSharp}}
                  />
              ) : null }
          </div>
        )) }
      </Carousel>
      <button type="button" className="bs__arrow">
        <img src={ arrowDown } alt="Role para baixo" />
      </button>
    </div>
    <section className="section section--gradient portfolio">
      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold has-text-centered with-border">
            Portfólio
          </h3>
        </div>
      </div>
      <Features gridItems={intro.blurbs} />
      <div className="columns">
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/portfolio">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
    <section className="section" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container">
        <h3 className="size-3 with-border with-border has-text-centered">O que os clientes dizem?</h3>
        <div className="columns">
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <h3 className="has-text-weight-semibold with-border  has-text-centered">
              Blog
            </h3>
            <div className="column is-12">
              <BlogRoll />
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Ver mais posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container-fluid">
        <div className="columns">
          <div className="column is-12">
            <h3 className="has-text-weight-semibold with-border  has-text-centered">
              Instagram
            </h3>
            <div className="column is-12">
              <a href="https://www.instagram.com/studiolinsfotografia/" target="_blank">
                <img src={imgInstagram} alt="instagram feed" className="is-fluid" style={{width: '100%'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  images: PropTypes.object,
  intro: PropTypes.object,
  testimonials: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        images={frontmatter.images}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 780, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            link
          }
        }
        testimonials {
          author
          quote
          image {
            childImageSharp {
              fluid(maxWidth: 180, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
