import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Testimonials from '../components/Testimonials'

import imgInstagram from '../img/instagram.png'

export const IndexPageTemplate = ({
  image,
  heading,
  intro,
  testimonials
}) => (
  <div>
    <div
      className="full-width-image full-width-cover margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
    </div>
    <section className="section section--gradient portfolio">
      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold has-text-centered with-border">
            {heading}
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
    <section className="section has-background-grey-lighter">
      <div className="container">
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
              <img src={imgInstagram} alt="instagram feed" className="is-fluid" style={{width: '100%'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.array,
  testimonials: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
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
        heading
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 80) {
              ...GatsbyImageSharpFluid
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
