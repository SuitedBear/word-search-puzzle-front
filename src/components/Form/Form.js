import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridWidth: '10',
      gridHeight: '10',
      numberOfWords: '10',
      generatorUrl: 'http://localhost:3001/',
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    let { name, value } = target;

    this.setState({
      [name]: Number(value)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // conver state to numbers
    let { gridWidth, gridHeight, numberOfWords} = this.state;
    const request = `${this.state.generatorUrl}puzzle?width=${gridWidth}&height=${gridHeight}&words=${numberOfWords}`;
    // const request = this.state.generatorUrl;
    console.log(request);
    fetch(request)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(e => console.log(e));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Width:
          <input name="gridWidth" 
            type="number" min="3" max="30" 
            value={this.state.gridWidth}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Height:
          <input name="gridHeight"
            type="number" min="3" max="30" 
            value={this.state.gridHeight}
            onChange={this.handleChange}
          />
        </label>
        <label>
          # of words:
          <input name="numberOfWords"
            type="number" min="1" max="30" 
            value={this.state.numberOfWords}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Get Puzzle" />
      </form>
    )
  }
}
