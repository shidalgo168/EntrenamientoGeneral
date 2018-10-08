import React, { Component } from 'react';
import Searchbar from './Searchbar';
import '../css/heroImage.scss';

class HeroImage extends Component {
  render() {
    return (
      <div>
        <div className="image"></div>
        <div className="title">Los Mejores agentes de seguridad</div>
        <Searchbar/>
      </div>
    );
  }
}

export default HeroImage;