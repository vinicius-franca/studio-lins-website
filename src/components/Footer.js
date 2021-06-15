import React from 'react'

import logo from '../img/logo.svg'
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
                  <h4 className="has-text-white-ter is-uppercase">Contato</h4>
                  <a href="mailto:falecom@studiolinsfotografia.com.br">falecom@studiolinsfotografia.com.br</a>
                  <p>+55 11 3333-3333</p>
                </section>
              </div>
              <div className="column is-4">
                <section>
                <div className="has-text-centered">
                  <img
                    src={logo}
                    alt="Studio Lins Fotografia"
                    style={{ width: '14em', height: '10em' }}
                  />
                </div>
                </section>
              </div>
              <div className="column is-4 social">
                <h4 className="has-text-white-ter is-uppercase">Redes Sociais</h4>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '32px', height: '32px' }}
                  />
                </a>
                <a title="linkedin" href="https://linkedin.com">
                  <img
                    className="fas fa-lg"
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: '32px', height: '32px' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '32px', height: '32px' }}
                  />
                </a>
                <a title="behance" href="https://behance.com">
                  <img
                    src={behance}
                    alt="behance"
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
