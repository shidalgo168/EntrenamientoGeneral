import React, { Component } from 'react';
import '../css/searchbar.scss';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : ''
    }
    this.inputText = this.inputText.bind(this);
  };
  inputText(event) {
    this.setState({data: event.target.value});
  }
  render() {
    return (
      <div className="searchbar">
          <input onChange = {this.inputText} type="text" className="searchbar__textfield" placeholder="Buscar por Ubicación"/>
      </div> 
    );
  }
}

export default Searchbar;