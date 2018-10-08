import React, { Component } from 'react';
import '../css/header.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="logo"></div>

        <div className="menu-button">
          <div className="menu-button__rectangle-top"></div>
          <div className="menu-button__rectangle-mid"></div>
          <div className="menu-button__rectangle-bottom"></div>
        </div>

        <div className="options">
          <a className="options__directory" href="index">
            Directorio de Agentes
            <div className="options__directory--selected"></div>
          </a>
          <a className="options__contact" href="contact">
            Contacto
            <div className="options__contact--selected"></div>
          </a>
          <a className="options__login" href="login">
            Ingresar
            <div className="options__login--selected"></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;