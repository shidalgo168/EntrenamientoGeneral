import React, { Component } from 'react';
import '../css/grid.scss';

class Grid extends Component {
  render() {
    if(this.props.data.isCertified){
      return (
        <div className="agent">
          <p className="agent__name">{this.props.data.name}</p>
          <div alt="ribbon" className="agent__ribbon"/>
          <div className="agent__separator"></div>
          <img className="agent__photo" src="{this.props.data.image}"/>
          <div className="agent__description">{this.props.data.description}</div>
          <div className="agent__price">Desde: ${this.props.data.rate} / {this.props.data.hours} horas</div>
          <div className="agent__button">
            <div className="agent__button-text">Contratar</div>
          </div>
        </div>
      );
    }
    return (
      <div className="agent">
        <p className="agent__name">{this.props.data.name}</p>
        <div className="agent__separator"></div>
        <img className="agent__photo" src="{this.props.data.image}"/>
        <div className="agent__description">{this.props.data.description}</div>
        <div className="agent__price">Desde: ${this.props.data.rate} / {this.props.data.hours} horas</div>
        <div className="agent__button">
          <div className="agent__button-text">Contratar</div>
        </div>
      </div>
    );
    
  }
}

export default Grid;