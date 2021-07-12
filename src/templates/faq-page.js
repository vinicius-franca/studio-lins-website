import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FaqPageTemplate = ({ title, content, image, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="section section--gradient" style={{ marginTop: '70px'}}>
        <div className="container">
          <h3 className="has-text-weight-semibold has-text-centered with-border">{title}</h3>
          <div className="columns">
            <div className="column is-6">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
            <div className="column is-6">
              <div style={{
                backgroundImage: `url(${
                  !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                width:`100%`,
                height:`100%`,
                margin: `20px`
              }}></div>
            </div>
          </div>
          <div className="columns" style={{ marginTop: '50px' }}>
            <div className="column is-12 has-text-centered">
              <h2 className="mt-3 is-size-4">Quer viver essa experiência com a gente? Entre em contato <a target="_blank" href="https://api.whatsapp.com/send?phone=5548999279696">AQUI!</a></h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

FaqPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.object.isRequired,
}

const FaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FaqPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

FaqPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FaqPage

export const FaqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
