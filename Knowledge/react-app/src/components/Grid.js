import React, { Component } from 'react';
import '../css/grid.scss';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agents : []
    }
    this.updateData = this.updateData.bind(this);
  };
  updateData() {
    this.setState({agents: [{"nombre": "hola"}]})
  }
  render() {
    return (
      <div className="agent-section">
      </div>
    );
  }
}

export default Grid;