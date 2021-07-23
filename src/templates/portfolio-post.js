/* eslint-disable */
import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
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
    <section className="section" style={{ marginTop: '70px', padding: '3rem 0rem'}}>
      {helmet || ''}
      <div className="content">
        <div className="columns">
          <div className="column is-12">
            <h3 className="has-text-weight-semibold has-text-centered with-border">
            { title }
            </h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <SRLWrapper options={{ buttons : { showDownloadButton: false }, caption: { showCaption: false } }}>
              <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {photos && photos.length ? (
                      photos.map((photo, i) => (
                        <div key={i + `photo`}>
                            <PreviewCompatibleImage
                              imageInfo={{ image: photo.image, alt: `Ensaio da categoria ${ title }`, }}
                            />
                        </div>
                      )
                    )) : null }
              </Masonry>
            </SRLWrapper>
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
