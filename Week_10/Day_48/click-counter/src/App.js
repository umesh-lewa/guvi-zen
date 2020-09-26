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
    count: 0,
    width : window.innerWidth
  };

  handleIncrementClick = () => {
    //this.setState(prev => ({ count: prev.count + 1 }));
    this.setState({
      count : this.state.count + 1   
    });
  };

  handleDecrementClick = () => {
    //this.setState(prev => ({ count: prev.count + 1 }));
    this.setState({
      count : this.state.count - 1   
    });
  };

  clearCount = () => {

    this.setState({
      count : 0 
    });
  };

  resizeWidth = () => {
    this.setState({
      width : window.innerWidth
    });
  }

  componentDidMount(){
    window.addEventListener("resize",this.resizeWidth);
  }

  componentDidUpdate(){
    window.addEventListener("resize",this.resizeWidth);
  }

  componentWillUnmount(){  
    window.removeEventListener("resize",this.resizeWidth);
  }

  render() {
    console.log(this.state.width);
    return (
      <div className="uniq">
      <button className="button" onClick={this.handleIncrementClick}>+</button>
      <h2 className="counter">{this.state.count}</h2>
      <button className="button" onClick={this.handleDecrementClick}>-</button>
      <h3>
        </h3>
      <button className="button" onClick={this.clearCount}>Clear</button>
      <h3>{this.state.width}</h3>
      </div>
    );
  }
}

class ClearCount extends React.Component{

  render(){

    return(
    <div>
      <button></button>
    </div>
    );
  }
}

export default App;
