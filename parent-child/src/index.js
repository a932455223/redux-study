import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


const Message = ({message}) => {
	return <p>{message}</p>
}


class Input extends Component{

	state = {
		value:''
	}	

	render(){
		return (
			<div>
				<input value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} />
				<Message message={this.state.value} />
			</div>
			)
	}
}


ReactDOM.render(
  <Input />,
  document.getElementById('root')
);
