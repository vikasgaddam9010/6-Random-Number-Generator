import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  btnClicked = () => {
    const num = Math.random()
    this.setState({randomNumber: Math.ceil(num * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.btnClicked}>Generate</button>
          <p>{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
