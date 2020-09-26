import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    //this.setState(prev => ({ count: prev.count + 1 }));
    this.setState({
      count : this.state.count + 1   
    });
  };

  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        <div className="counter">{this.state.count}</div>
      </button>
    );
  }
}

export default App;
