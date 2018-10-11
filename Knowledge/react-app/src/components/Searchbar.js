import React, { Component } from 'react';
import Grid from './Grid';
import '../css/searchbar.scss';
import '../css/grid.scss';

const URL_TO_RETRIEVE_DATA = 'https://api.myjson.com/bins/uptto';
var constData = {};

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentdata: {},
      userInput: ''
    };

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  componentDidMount() {
    fetch(URL_TO_RETRIEVE_DATA)
      .then(response => response.json())
      .then(dataJson => {
        constData = dataJson;
        this.setState({ currentdata: dataJson });
      });
  }

  updateInputValue(evt) {
    this.setState({userInput: evt.target.value});
    if(evt.target.value.length >= 3){
      this.filterAgents(evt);
    }
    else{
      // Return the data to its default value
      if(this.currentdata !== constData){
        this.setState({currentdata: constData})
      }
    }
  }

  filterAgents(input) {
    const inputValue = input.target.value.toUpperCase();
    const newData = constData.companies.filter(agent => agent.name.toUpperCase().includes(inputValue) || agent.description.toUpperCase().includes(inputValue));
    this.setState({currentdata: {"companies": newData}})
  }

  render() {
    if(this.state.currentdata.companies){
      return (
        <div>
          <form>
            <div className="searchbar">
              <input value={this.state.userInput} onChange={this.updateInputValue} type="text" className="searchbar__textfield" placeholder="Buscar por Ubicación"/>
            </div> 
          </form>
          <div className="agent-section">
            {this.state.currentdata.companies.map((agent, i) => <Grid key = {i} data = {agent} />)}
          </div>
        </div>
        );
    }
    return (
      <div>
        <form>
          <div className="searchbar">
            <input value={this.state.userInput} onChange={this.updateInputValue} type="text" className="searchbar__textfield" placeholder="Buscar por Ubicación"/>
          </div> 
        </form>
        <div className="agent-section"></div>
      </div>
      );
    }
  }
  

export default Searchbar;