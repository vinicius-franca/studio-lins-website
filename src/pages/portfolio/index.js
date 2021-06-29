import React from 'react'

import Layout from '../../components/Layout'
import PortfolioRoll from '../../components/PortfolioRoll'

export default class PortfolioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section" style={{ marginTop: '70px', minHeight: 'calc(100vh - 82px)'}}>
          <div className="container">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold has-text-centered with-border">
                  Portfólio
                </h3>
              </div>
            </div>
            <div className="content">
              <PortfolioRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
