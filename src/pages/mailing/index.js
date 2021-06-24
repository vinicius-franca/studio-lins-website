import React from 'react'
import { Link } from 'gatsby'
import ProgressButton from 'react-progress-button'
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
      phone:"",
      shop:""
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({buttonState: 'loading'})
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      }),
    })
    .then(() => this.setState({buttonState: 'success'}))
    .catch(error => {
      console.log(error);
      this.setState({buttonState: 'error'})
    });
  }

  render() {
    const { name, phone, shop } = this.state;
    return (
      <Layout>
        <section className="section" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 82px)'}}>
          <div className="container">
            <h3 className="has-text-weight-semibold has-text-centered with-border" style={{marginBottom: '50px'}}>Cadastre-se</h3>
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
                    name="mailing"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="mailing" />
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
                      <label className="label" htmlFor={'phone'}>
                        Telefone
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'phone'}
                          onChange={this.handleChange}
                          id={'phone'}
                          required={true}
                          value={phone}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'shop'}>
                        Loja onde escaneou o QRCODE?
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'shop'}
                          onChange={this.handleChange}
                          id={'shop'}
                          required={true}
                          value={shop}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <ProgressButton type={"submit"} state={this.state.buttonState}>
                        Enviar
                      </ProgressButton>
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
