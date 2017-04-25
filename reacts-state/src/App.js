import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    apple:{
      count:4,
      colors:['red','yellow']
    },
      orange:{
      count:5,
      colors:['green','organge']
      }
  }

    addApple = ()=>{
          this.setState({
              apple:{
                  count:(this.state.apple.count+1)
              }
          })
    }


    addOrange = ()=>{
        this.setState({
            orange:{
                ...this.state.orange,
                count:(this.state.orange.count+1)
            }
        })
    }
  render() {
    return (
      <div className="App">
        <p>
          <span>{this.state.apple.count}</span>
          <button onClick={this.addApple}> add apple</button>
        </p>
        <p>
          <span>{this.state.orange.count}</span>
          <button onClick={this.addOrange}> add orange</button>
        </p>
      </div>
    );
  }
}

export default App;
