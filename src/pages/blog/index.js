import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns">
          <div className="column is-12" style={{ marginTop: '100px' }}>
            <h3 className="has-text-weight-semibold has-text-centered with-border">
              Blog
            </h3>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
