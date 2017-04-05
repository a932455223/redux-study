import React, { Component } from 'react';

class App extends Component {
    state = {
        count:0
    }

    shouldComponentUpdate(){
        return false;
    }

    update = (e)=>{
        this.forceUpdate();
    }
    increment = (e)=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
        <div>
            <button onClick={this.increment}>{this.state.count}</button>
            <button onClick={this.update}>forceUpdate</button>
        </div>
    )
  }
}

export default App;
