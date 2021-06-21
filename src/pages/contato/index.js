import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

import imgContato from '../../img/lins-135-.jpg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));
    e.preventDefault()
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <Layout>
        <section className="section" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 82px)'}}>
          <div className="container">
            <h3 className="has-text-weight-semibold has-text-centered with-border" style={{marginBottom: '50px'}}>Contato</h3>
            <div className="content">
              <div className="columns">
                <div className="column is-6">
                  <img src={imgContato} alt="Imagem de um ensaio familiar" className="is-fluid box notify" style={{width: '100%'}} />
                </div>
                <div className="column is-6">
                  <form
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    name="contact"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Nome
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        E-mail
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Mensagem
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                          value={message}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="btn" type="submit">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <h2 className="mt-3 is-size-4">Quer viver essa experiência com a gente? Entre em contato <Link to="/contato">AQUI!</Link></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
