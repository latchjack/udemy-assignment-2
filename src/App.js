import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';

class App extends Component {
  state = {
    charCount: 1
  }

  countHandler = (event) => {
    this.setState({ charCount: event.target.value })

  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.countHandler}
          value={this.state.charCount}
        />
        <p>character count: {this.state.charCount}</p>
        <Validation length={this.state.charCount.length} />
      </div>
    );
  }
}

export default App;
