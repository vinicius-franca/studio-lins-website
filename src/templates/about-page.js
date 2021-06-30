import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, image, contentComponent }) => {
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
              <div className="box notify" style={{
                backgroundImage: `url(${
                  !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundSize: 'cover',
                width:`100%`,
                height:`100%`,
                margin: `20px`
              }}></div>
            </div>
          </div>
          <div className="columns" style={{ marginTop: '50px' }}>
            <div className="column is-12 has-text-centered">
              <h2 className="mt-3 is-size-4">Quer viver essa experiência com a gente? Entre em contato <Link to="https://api.whatsapp.com/send?phone=554199190512">AQUI!</Link></h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.object.isRequired,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
