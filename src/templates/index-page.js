import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Testimonials from '../components/Testimonials'

export const IndexPageTemplate = ({
  image,
  heading,
  description,
  intro,
  testimonials
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
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
      <Features gridItems={intro.albums} />
      <div className="columns">
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/portfolio">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section pt-0">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold has-text-centered with-border">O que os clientes dizem?</h3>
                <Testimonials testimonials={testimonials} />
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold with-border  has-text-centered">
                    Blog
                  </h3>
                  <div>
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
  testimonials: PropTypes.array,
  intro: PropTypes.shape({
    albums: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
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
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testimonials {
          author
          quote
        }
        intro {
          albums {
            image {
              childImageSharp {
                fluid(maxWidth: 780, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
