import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label></label>
        <input type="submit" value="Get Puzzle" />
      </form>
    )
  }
}
