import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRollLimited extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-12 is-multiline blog-list">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="blog-list-item" key={post.id} >
              { index < 3 &&
              <Link to={post.fields.slug}>
                <article className={` tile is-child notification ${
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
                            <h3 className="has-text-white is-size-4 upper">{post.frontmatter.title}</h3>
                            <span className="has-text-white is-size-5 is-block">
                              {post.frontmatter.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </header>
                </article>
              </Link>
              }
            </div>
          ))}
      </div>
    )
  }
}

BlogRollLimited.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollLimitedQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                description
                date(formatString: "DD/MM/YYYY")
                featuredpost
                featuredimage {
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
      }
    `}
    render={(data, count) => <BlogRollLimited data={data} count={count} />}
  />
)
