import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PortfolioRoll from '../components/PortfolioRoll'

class CategoryRoute extends React.Component {
  render() {
    const category = this.props.pageContext.category

    return (
      <Layout>
        <section className="section" style={{marginTop:'100px'}}>
          <div className="container content">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold has-text-centered with-border">
                {`${category}`}
                </h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <PortfolioRoll></PortfolioRoll>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12 has-text-center">
                  <Link className="btn" to="/portfolio">Ver mais ensaios</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CategoryRoute

export const CategoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
