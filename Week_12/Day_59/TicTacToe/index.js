import React from "react";
import ReactDOM from 'react-dom';
import Game from "./components/Game";

const App = () => <Game />;

export default App;

ReactDOM.render(<App />, document.querySelector("#app-root"));