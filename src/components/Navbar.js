/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import logoSimple from '../img/logo-simplify.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap';


const Navbar = class extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      activeClass: 'is-transparent'
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
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const imageHeader = document.querySelector(".full-width-image");
    if (!imageHeader) {
      document.querySelector(".navbar").className = "navbar is-fixed-top  is-primary";
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    window.addEventListener("scroll", this.handleScroll);
    const imageHeader = document.querySelector(".full-width-image");

    if(!imageHeader) {
      document.querySelector(".navbar").className = "navbar is-fixed-top  is-primary";
    }
    else if (window.scrollY > 580) {
      document.querySelector(".navbar").className = "navbar is-fixed-top  is-primary";
    }
    else {
      document.querySelector(".navbar").className = "navbar is-fixed-top is-transparent";
    }
  };

  render() {
    return (
      <nav
        className={`navbar is-fixed-top is-transparent`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="logo" title="Studio Lins">
              <img src={logo} alt="Studio Lins" />
              {/* <img class="is-flex-touch is-hidden" src={logoSimple} alt="Studio Lins" /> */}
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
            className={`navbar-menu  ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered cl-effect-21">
              <Link className="navbar-item" data-hover="Home" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/sobre">
                Sobre
              </Link>
              {/* <Link className="navbar-item" to="/">
                Como funciona?
              </Link> */}
              {/* <Link className="navbar-item navbar-test" to="/portfolio">
                Portfólio
              </Link> */}
              <Dropdown className="navbar-custom-dropdown">
                <Dropdown.Toggle className="navbar-item-dropdown" id="dropdown-basic">
                  Portfólio
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown-menu">
                  <Dropdown.Item className="navbar-dropdown-item"><Link to="/portfolio">TODOS</Link></Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item"><Link to="/portfolio/2021-07-06-gestantes">GESTANTETS</Link></Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item"><Link to="/portfolio/2021-06-18-ensaio-infantil-familia">INFANTIL E FAMÍLIA</Link></Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item"><Link to="/portfolio/2021-06-14-ensaio-casal">CASAIS</Link></Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item"><Link to="/portfolio/2021-07-01-feminino">FEMININO</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contato">
                Contato
              </Link>
              <Link className="navbar-item" to="/faq">
                F.A.Q
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
