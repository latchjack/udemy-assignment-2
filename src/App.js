import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';
import Char from './Char'

class App extends Component {
  state = {
    charCount: ''
  }

  countHandler = (event) => {
    this.setState({ charCount: event.target.value });
  }

  render() {
    const charList = this.state.charCount.split('').map((letter, index) => {
      return <Char letter={letter} key={index} />
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.countHandler}
          value={this.state.charCount}
        />
        <p>character count: {this.state.charCount}</p>
        <Validation length={this.state.charCount.length} />
        {charList}
      </div>
    );
  }
}

export default App;
