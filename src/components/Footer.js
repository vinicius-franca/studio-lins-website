import React from 'react'

import logo from '../img/logo-simplify.svg'
import emailIcon from '../img/email.svg'
import whatsappIcon from '../img/whatsapp.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/linkedin.svg'
import behance from '../img/social/behance.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section>
                  <h4 className="has-text-white-ter is-uppercase mb-4">Contato</h4>
                  <a className="is-block has-text-white-ter mb-4" href="mailto:contato@studiolinsfotografia.com.br">
                    <img
                    src={emailIcon}
                    alt="Mail Icon"
                    style={{ width: '18px', height: '18px', margin: '4px 8px 0 0', float: 'left' }}
                  /> contato@studiolinsfotografia.com.br</a>
                  <a className="is-block has-text-white-ter" href="https://api.whatsapp.com/send?phone=554199190512"><img
                    src={whatsappIcon}
                    alt="Phone Icon"
                    style={{ width: '18px', height: '18px', margin: '4px 8px 0 0', float: 'left' }}
                  /> (48) 99927-9696</a>
                </section>
              </div>
              <div className="column is-4">
                <section>
                <div className="has-text-centered">
                  <img
                    src={logo}
                    alt="Studio Lins Fotografia"
                    style={{ width: '110px', }}
                  />
                </div>
                </section>
              </div>
              <div className="column is-4 social">
                <h4 className="has-text-white-ter is-uppercase">Redes Sociais</h4>
                <a title="facebook" href="https://www.facebook.com/Studio-Lins-Fotografia-105772138401127">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '32px', height: '32px' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/studiolinsfotografia">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '32px', height: '32px' }}
                  />
                </a>
              </div>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
