import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-12 is-multiline portfolio-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="portfolio-list-item" key={post.id}>
              <Link to={post.fields.slug}>
                <article className={` tile is-child box notification ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                  >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{ image: post.frontmatter.featuredimage, alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                        <div className="featured-thumbnail-overlay">
                          <div>
                            <h3 className="has-text-white is-size-4">{post.frontmatter.title}</h3>
                            <span className="has-text-white is-size-5 is-block">
                              &#8226;  {post.frontmatter.date} &#8226;
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </header>
                </article>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 780, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
)
