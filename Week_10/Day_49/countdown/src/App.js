import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <audio className="audio-element" id="audio-element">
            <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" />
          </audio>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timerValue: 10
    }
  }

  componentDidMount() {
    let timerInterval = setInterval(() => {
      this.setState(prevS => ({ timerValue: prevS.timerValue - 1 }))
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  clearTimer = () => {
    clearInterval(this.timerInterval);
  }

  playAudio = () => {
    let audioEl = document.getElementById("audio-element");
    audioEl.play();
  };

  render() {

    if (this.state.timerValue == 0) {
      return (
        <div className="audioDiv">
          {this.playAudio()}   
        </div>
      )
    }

    return (
      <div className="uniq">
        <h2>{this.state.timerValue}</h2>
        <button onClick={this.clearTimer}>Stop Timer</button>
      </div>
    )
  }
}
export default App;
