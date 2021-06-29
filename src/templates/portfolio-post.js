import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Masonry from 'react-masonry-css'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PortfolioPostTemplate = ({
  contentComponent,
  categories,
  title,
  helmet,
  photos
}) => {
  /* const PostContent = contentComponent || Content */

  return (
    <section className="section" style={{ marginTop: '70px'}}>
      {helmet || ''}
      <div className="container content">
        <h3 className="has-text-weight-lighter has-text-centered with-border">
          { title }
        </h3>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {/* <PostContent content={content} /> */}
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                {photos && photos.length ? (
                  photos.map((photo, i) => (
                    <div key={i + `photo`}>
                      <PreviewCompatibleImage
                        imageInfo={{ image: photo.image, alt: `imagem do portfolio`, }}
                      />
                    </div>
                  )
                )) : null }
            </Masonry>
            {categories && categories.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Categorias</h4>
                <ul className="taglist">
                  {categories.map((category) => (
                    <li key={category + `categoria`}>
                      <Link to={`/portfolio/categories/${kebabCase(category)}/`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  photos: PropTypes.array,
  helmet: PropTypes.object,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Portfólio">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        categories={post.frontmatter.categories}
        title={post.frontmatter.title}
        photos={post.frontmatter.photos || {}}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        categories
        photos {
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
