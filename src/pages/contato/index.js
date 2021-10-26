/* eslint-disable */
import React from 'react'
import ProgressButton from 'react-progress-button'
import Layout from '../../components/Layout'

import imgContato from '../../../static/img/contato.jpg'

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
      email: "",
      city: "",
      type: "",
      message: "",
      buttonState: ""
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
    .then(() => 
      {
        this.setState({buttonState: 'success'});
        setTimeout(() => {
          window.location.href = "http://www.studiolinsfotografia.com.br";
        }, 1000);
      }
    )
    .catch(error => {
      console.log(error);
      this.setState({buttonState: 'error'})
    });
  }

  render() {
    const { name, phone, email, city, message } = this.state;
    return (
      <Layout>
        <section className="section" style={{ marginTop: '70px', minHeight: 'calc(100vh - 82px)'}}>
          <div className="container">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold has-text-centered with-border title">
                  Contato
                </h3>
              </div>
            </div>
            <div className="content">
              <div className="columns">
                <div className="column is-6">
                  <p><strong>Olá! Tudo bem?</strong></p>
                  <p>Que bom que chegou até aqui! Fico feliz em saber que tenham se identificado com o nosso trabalho.
                  Entre em contato através do nosso formulário ou diretamente pelo nosso <strong>Whatsapp</strong> <a href="https://api.whatsapp.com/send?phone=554199190512">clicando aqui</a>.
                  Vamos criar lindas recordações juntos!</p>
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
                      <label className="label" htmlFor={'city'}>
                        Cidade
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'city'}
                          onChange={this.handleChange}
                          id={'city'}
                          required={true}
                          value={city}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'type'}>
                        Qual tipo de serviço procura?
                      </label>
                      <div className="select">
                        <select
                          name={'type'}
                          onChange={this.handleChange}
                          id={'type'}
                          value={this.state.value}
                        >
                          <option value="">--</option>
                          <option value="Casal">Casal</option>
                          <option value="Gestante">Gestante</option>
                          <option value="Recém-nascido">Recém-nascido</option>
                          <option value="Família">Família</option>
                          <option value="Feminino">Feminino</option>
                          <option value="Evento">Evento</option>
                          <option value="Outros">Outros</option>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Conte-me um pouco mais se achar necessário:
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          value={message}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <ProgressButton type={"submit"} state={this.state.buttonState} className="custom-button">
                        Enviar
                      </ProgressButton>
                      {/* <button className="btn" type="submit">
                        Enviar
                      </button> */}
                    </div>
                  </form>
                </div>                
                <div className="column is-6">
                  <img src={imgContato} alt="Imagem de um ensaio familiar" className="is-fluid notify no-padding" style={{maxHeight: '850px'}} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
