import React, { Component } from 'react';
import './App.css';
function info(msg,color='red'){
    console.log('%c'+msg,'color:'+color);
}
class Message extends Component{

    componentWillReceiveProps(pre,next){
        console.dir(pre)
        console.dir(next)
        info('I will receive.')
    }

    componentWillUpdate(){
        info('I will update.')
    }

    componentDidUpdate(){
        info('I updated.')
    }
    render(){
        info('I rendering.')
        return (
            <h1>Receive test.</h1>
        )
    }
}

class App extends Component {
  state = {
      number:0
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({number:this.state.number+1})}}>test</button>
        <p>{this.state.number}</p>
        <Message />
      </div>
    );
  }
}

export default App;
