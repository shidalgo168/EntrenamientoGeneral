import React, { Component } from 'react';
import Grid from './Grid';
import '../css/searchbar.scss';
import '../css/grid.scss';

const URL_TO_RETRIEVE_DATA = 'https://api.myjson.com/bins/uptto';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch(URL_TO_RETRIEVE_DATA)
      .then(response => response.json())
      .then(dataJson => this.setState({ data: dataJson }));
  }

  render() {
    if(this.state.data.companies){
      return (
        <div>
          <div className="searchbar">
            <input onChange = {this.inputText} type="text" className="searchbar__textfield" placeholder="Buscar por Ubicación"/>
          </div> 
          <div className="agent-section">
            {this.state.data.companies.map((agent, i) => <Grid key = {i} data = {agent} />)}
          </div>
        </div>
        );
    }
    return (
      <div>
        <div className="searchbar">
          <input onChange = {this.inputText} type="text" className="searchbar__textfield" placeholder="Buscar por Ubicación"/>
        </div>
        <div className="agent-section"></div>
      </div>
      );
    }
  }
  

export default Searchbar;