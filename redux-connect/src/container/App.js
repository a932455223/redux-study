import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from './component/Input'
import FirstName from './FirstName'
import SecondName from './SecondName'
import { Provider } from 'react-redux'
import * as actions from 'actions'
export default class App extends Component{

render(){
    const { dispatch } = this.props
    return (
        <div>
            <Input handleChange={(val) = {dispatch(actions.updateFirstname(val))}} />
            <Input handleChange={(val) => {dispatch(actions.updateSecondname(val))}} />
            <FirstName />
            <SecondName />
        </div>
    )
}
}
