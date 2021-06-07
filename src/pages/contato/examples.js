import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <p>
                Formulário de exemplo
              </p>
              <ul>
                <li>
                  <Link to="/contato">Formulário Básico</Link>
                </li>
                <li>
                  <Link to="/contato/file-upload/">Formulário com upload</Link>
                </li>
              </ul>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
