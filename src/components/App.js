import React from 'react';
import './App.css';
import Board from './Board/Board';
import Form from './Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: [
        "kraków",
        "warszawa",
        "wrocław",
        "poznań",
        "gdańsk",
        "gdynia",
        "kielce",
        "radom",
        "łódź"
      ],
      grid: [
        ['w', 'r', 'o', 'k', 's', 'n', 'a', 'd'],
        ['r', 'a', 'k', 'i', 'e', 'l', 'c', 'e'],
        ['o', 'd', 'r', 'z', 'p', 'o', 'ł', 'g'],
        ['c', 'o', 'a', 's', 'o', 'r', 'ó', 'd'],
        ['ł', 'm', 'k', 'i', 'z', 'e', 'd', 'y'],
        ['a', 'g', 'ó', 'p', 'n', 'a', 'ź', 'n'],
        ['w', 'e', 'w', 'k', 'a', 't', 'w', 'i'],
        ['a', 'g', 'd', 'a', 'ń', 's', 'k', 'a'],
      ],
    }
  }

  mockGrid() {
    this.setState({
      wordList: [
        "kraków",
        "warszawa",
        "wrocław",
        "poznań",
        "gdańsk",
        "gdynia",
        "kielce",
        "radom",
        "łódź"
      ],
      grid: [
        ['w', 'r', 'o', 'k', 's', 'n', 'a', 'd'],
        ['r', 'a', 'k', 'i', 'e', 'l', 'c', 'e'],
        ['o', 'd', 'r', 'z', 'p', 'o', 'ł', 'g'],
        ['c', 'o', 'a', 's', 'o', 'r', 'ó', 'd'],
        ['ł', 'm', 'k', 'i', 'z', 'e', 'd', 'y'],
        ['a', 'g', 'ó', 'p', 'n', 'a', 'ź', 'n'],
        ['w', 'e', 'w', 'k', 'a', 't', 'w', 'i'],
        ['a', 'g', 'd', 'a', 'ń', 's', 'k', 'a'],
      ],
    });
  }

  handleCellClick(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <Board grid={this.state.grid} clickHandler={this.handleCellClick} />
        <Form />
      </div>
    );    
  }

}

export default App;
