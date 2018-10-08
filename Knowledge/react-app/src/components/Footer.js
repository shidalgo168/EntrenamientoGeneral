import React, { Component } from 'react';
import '../css/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div>
        <p className="credits">Desarrollado por Akurey.com Todos los derechos reservados.</p>
        <a href="terms" className="terms">Términos y Condiciones</a>
      </div>
    );
  }
}

export default Footer;