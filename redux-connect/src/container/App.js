import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../component/Input'
import FirstName from './FirstName'
import SecondName from './SecondName'
import  * as actions from '../actions'

class App extends Component{

render(){
    const { dispatch } = this.props
    return (
        <div>
            <Input text='firstName' handleChange={(val) => {dispatch(actions.updateFirstname(val))}} />
            <Input text='secondName' handleChange={(val) => {dispatch(actions.updateSecondname(val))}} />
            <FirstName />
            <SecondName />
        </div>
    )
}
}

export default connect()(App)
