import React from 'react'

import Layout from '../../components/Layout'
import PortfolioRoll from '../../components/PortfolioRoll'

export default class PortfolioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns" style={{marginTop:'100px'}}>
          <div className="column is-12">
            <h3 className="has-text-weight-lighter has-text-centered with-border">
              Portfólio
            </h3>
          </div>
        </div>
        <section className="section" style={{ paddingTop: 0,  minHeight: 'calc(100vh - 82px'}}>
          <div className="container">
            <div className="content">
              <PortfolioRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
