import React from 'react';
import './App.css';
import Board from './Board/Board';
import Form from './Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
      grid: [],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <Board />
        <Form />
      </div>
    );    
  }
}

export default App;
