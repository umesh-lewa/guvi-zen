import React from 'react';
import logo from './logo.svg';
import './App.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div style={divStyle}>
      <div>
        <h4>Things</h4>
        <ItemsList />
      </div>
      <div>
        <h4>Things</h4>
        <ItemsList />
      </div>
      <div>
        <h4>Things</h4>
        <ItemsList />
      </div>
    </div>
    </header>
    </div>
  );
}

const itemsData = [
  {
    id: 1,
    task: "Something 1",
    completed: false,
  },
  {
    id: 2,
    task: "Something 2",
    completed: false,
  },
  {
    id: 3,
    task: "Something 3",
    completed: false,
  },
  {
    id: 4,
    task: "Something 4",
    completed: false,
  },
];

class ItemsList extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      items: itemsData,
    };
  }

  render() {
    const todoItems = this.state.items.map((eachItem) => (
      <Item key={eachItem.id} data={eachItem} />
    ));
    return (todoItems);
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.data.completed,
    };
  }

  handleClick = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed,
      };
    });
  };

  render() {
    let style;
    this.state.completed ? (style = {
        textDecoration: "line-through",
      })
      : (style = null);
    return (
      <div className="d-flex align-items-center my-2 justify-content-center">
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleClick}
          className="mx-3"
        />
        <h6 style={style} className="align-self-end">
          {this.props.data.task}
        </h6>
      </div>
    );
  }
}

export default App;
