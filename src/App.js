import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//3 - Fizz
//5 - Buzz
//15 - FizzBuzz

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prefield: 10,
      count: 10
    }
    this.handleChangeCount = this.handleChangeCount.bind(this)
    this.handleStartButton = this.handleStartButton.bind(this)
  }

  handleChangeCount = e => this.setState({prefield: Number(e.target.value)})
  handleStartButton = () => this.setState({count: this.state.prefield})




  render() {
    let list = []

    for(let i = 1;i <= this.state.count;i++) {
        list.push(<div key={i}>{
          (i % 15 === 0)  ?  'FizzBuzz' :
          (i % 5 === 0)   ? 'Buzz' :
          (i % 3 === 0)   ? 'Fizz' :
          i}</div>)
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <input type="number" id="input" onChange={this.handleChangeCount} value={this.state.prefield}/>
          <button id="button" onClick={this.handleStartButton}>Start</button>
          <div>
            <h1>Results:</h1>
            {list}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
