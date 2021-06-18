import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  categories,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section" style={{ marginTop: '100px'}}>
      {helmet || ''}
      <div className="container content">
        <h3 className="has-text-weight-semibold has-text-centered with-border">
          { title }
        </h3>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
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
  helmet: PropTypes.object,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
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
      }
    }
  }
`
