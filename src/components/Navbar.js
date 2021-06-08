import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }


  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }
  componentDidMount = () => {
    window.addEventListener('scroll', () => {
       let activeClass = 'is-primary';
       if(window.scrollY <= 680){
           activeClass = 'is-transparent';
       }
       this.setState({ activeClass });
    });
  }

  render() {
    return (
      <nav
        className={`navbar is-fixed-top ${this.state.activeClass}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="logo" title="Studio Lins">
              <img src={logo} alt="Studio Lins" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/sobre">
                Sobre
              </Link>
              <Link className="navbar-item" to="/portfolio">
                Portfólio
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contato">
                Contato
              </Link>
              <Link className="navbar-item" to="/contato/examples">
                Formularios (exemplo)
              </Link>
            </div>
            {/* <div className="navbar-end has-text-centered">
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
